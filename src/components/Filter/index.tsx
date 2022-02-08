import Button from 'layout/Button';
import React, { useState, useCallback } from 'react';
import { INGREDIENT, PROCESSING_METHOD } from 'utils/constants/data';
import { RequestsArray, ISetData } from 'utils/types';

import { downArrow, downArrowWhite, refresh } from 'assets';
import { OptionHolderTypes } from 'utils/types';
import FilterButton from './FilterButton';
import styled from 'styled-components';

const Filter: React.FC<{
    data: RequestsArray;
    setData: ISetData;
    onFiltered(selectedValue: string): void;
    originData: RequestsArray;
}> = ({ data, setData, onFiltered, originData }) => {
    const [isMethodOpen, setIsMethodOpen] = useState<boolean>(false);
    const [isIngreOpen, setIsIngreOpen] = useState<boolean>(false);
    const [selectedMethod, setSelectedMethod] = useState<
        (string | ConcatArray<string>)[]
    >([]);
    const [selectedMaterial, setSelectedMaterial] = useState<
        (string | ConcatArray<string>)[]
    >([]);

    const [methodcheckList, setMethodCheckList] = useState<(null | number)[]>(
        []
    );
    const [materialcheckList, setMaterialCheckList] = useState<
        (null | number)[]
    >([]);

    const openOptionHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        const checkValue = event.currentTarget.value;
        if (checkValue === 'method') {
            setIsMethodOpen((prev) => !prev);
            setIsMethodOpen(!isMethodOpen);
            setIsIngreOpen(false);
        }
        if (checkValue === 'ingredient') {
            setIsIngreOpen((prev) => !prev);
            setIsIngreOpen(!isIngreOpen);
            setIsMethodOpen(false);
        }
    };

    const handleAllUncheck = useCallback(() => {
        setSelectedMethod([]);
        setSelectedMaterial([]);
        setMaterialCheckList([]);
        setMethodCheckList([]);
        setIsMethodOpen(false);
        setIsIngreOpen(false);
    }, []);
    console.log(selectedMaterial);
    return (
        <ButtonsHolder>
            <div>
                <Button
                    value="method"
                    onClick={openOptionHandler}
                    theme={isMethodOpen && 'deepblue'}
                >
                    가공방식
                    {selectedMethod.length > 0 && (
                        <span> ({selectedMethod.length})</span>
                    )}
                    {isMethodOpen ? (
                        <ArrowIMG src={downArrowWhite} alt="drop-down" />
                    ) : (
                        <ArrowIMG src={downArrow} alt="drop-down" />
                    )}
                </Button>
                <OptionHolder>
                    {isMethodOpen && (
                        <FilterButton
                            buttonData={PROCESSING_METHOD}
                            name="method"
                            option={PROCESSING_METHOD}
                            data={data}
                            setData={setData}
                            onFiltered={onFiltered}
                            originData={originData}
                            selectedMethod={selectedMethod}
                            setSelectedMethod={setSelectedMethod}
                            selectedMaterial={selectedMaterial}
                            setSelectedMaterial={setSelectedMaterial}
                            setCheckList={setMethodCheckList}
                            checkList={methodcheckList}
                        />
                    )}
                </OptionHolder>
            </div>
            <div>
                <Button
                    value="ingredient"
                    theme={isIngreOpen && 'deepblue'}
                    onClick={openOptionHandler}
                >
                    재료
                    {selectedMaterial.length > 0 && (
                        <span> ({selectedMaterial.length})</span>
                    )}
                    {isIngreOpen ? (
                        <ArrowIMG src={downArrowWhite} alt="drop-down" />
                    ) : (
                        <ArrowIMG src={downArrow} alt="drop-down" />
                    )}
                </Button>
                <OptionHolder>
                    {isIngreOpen && (
                        <FilterButton
                            selectedMethod={selectedMethod}
                            setSelectedMethod={setSelectedMethod}
                            selectedMaterial={selectedMaterial}
                            setSelectedMaterial={setSelectedMaterial}
                            buttonData={INGREDIENT}
                            name="material"
                            option={INGREDIENT}
                            data={data}
                            setData={setData}
                            onFiltered={onFiltered}
                            originData={originData}
                            setCheckList={setMaterialCheckList}
                            checkList={materialcheckList}
                        />
                    )}
                </OptionHolder>
            </div>
            {selectedMethod.length || selectedMaterial.length ? (
                <RefreshBtn onClick={handleAllUncheck}>
                    <RefreshIMG src={refresh} alt="refresh" />
                    <span>필터링 리셋</span>
                </RefreshBtn>
            ) : (
                ''
            )}
        </ButtonsHolder>
    );
};

const ButtonsHolder = styled.div`
    display: flex;
`;
const OptionHolder = styled.div<OptionHolderTypes>`
    position: absolute;
    z-index: 100;
    background: #fff;
    left: ${(props) => props.name === 'meterial' && '263px'};
`;

const ArrowIMG = styled.img`
    width: 10px;
    height: 5px;
    margin-bottom: 3px;
    margin-left: 12px;
`;

const RefreshBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400px;
    color: #2196f3;
    margin-left: 16px;
    font-size: 12px;
`;

const RefreshIMG = styled.img`
    width: 16px;
    height: 16px;
    margin-right: 12px;
`;

export default Filter;
