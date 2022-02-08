import Button from 'layout/Button';
import React, { useState } from 'react';
import { INGREDIENT, PROCESSING_METHOD } from 'utils/constants/data';
import { RequestsArray, ISetData } from 'utils/types';

import downArrow from 'assets/arrow_drop_down.png';
import refresh from 'assets/refresh.png';

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

    const openOptionHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        const checkValue = event.currentTarget.value;
        if (checkValue === 'method') {
            setIsMethodOpen((prev) => !prev);
            setIsIngreOpen(false);
        }
        if (checkValue === 'ingredient') {
            setIsIngreOpen((prev) => !prev);
            setIsMethodOpen(false);
        }
    };

    return (
        <div>
            <div>
                <Button value="method" onClick={openOptionHandler}>
                    가공방식
                    <ArrowIMG src={downArrow} alt="drop-down" />
                </Button>
                <Button value="ingredient" onClick={openOptionHandler}>
                    재료(1)
                    <ArrowIMG src={downArrow} alt="drop-down" />
                </Button>
                <RefreshBtn>
                    <RefreshIMG src={refresh} alt="refresh" />
                    <span>필터링 리셋</span>
                </RefreshBtn>
            </div>

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
                    />
                )}
            </OptionHolder>
            <OptionHolder name="meterial">
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
                    />
                )}
            </OptionHolder>
        </div>
    );
};

const OptionHolder = styled.div<OptionHolderTypes>`
    position: absolute;
    z-index: 100;
    background: #fff;
    left: ${(props) => props.name === 'meterial' && '208px'};
`;
const ArrowIMG = styled.img`
    width: 10px;
    height: 5px;
    margin-bottom: 3px;
    margin-left: 12px;
`;

const RefreshBtn = styled.button`
    font-size: 12px;
    font-weight: 400px;
    color: #2196f3;
    margin-left: 16px;
`;

const RefreshIMG = styled.img`
    width: 16px;
    height: 16px;
    margin-right: 10px;
`;

export default Filter;
