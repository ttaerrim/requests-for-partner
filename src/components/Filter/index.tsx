import { useState } from 'react';
import FilterButton from './FilterButton';

import {
    METHOD_LIST,
    MATERIAL_LIST,
    METHOD,
    MATERIAL,
} from 'utils/constants/data';
import { RequestsArray, ISetData } from 'utils/types';
import { downArrow, downArrowWhite, refresh } from 'assets';

import {
    ArrowIMG,
    ButtonsHolder,
    OptionHolder,
    RefreshBtn,
    RefreshIMG,
} from './styled-filter';
import Button from 'layout/Button';

const Filter: React.FC<{
    setData: ISetData;
    originData: RequestsArray;
}> = ({ setData, originData }) => {
    const [isMethodOpen, setIsMethodOpen] = useState(false);
    const [isMaterialOpen, setIsMaterialOpen] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState<
        (string | ConcatArray<string>)[]
    >([]);
    const [selectedMaterial, setSelectedMaterial] = useState<
        (string | ConcatArray<string>)[]
    >([]);

    const openOptionHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        const checkValue = event.currentTarget.value;
        if (checkValue === METHOD) {
            setIsMethodOpen((isMethodOpen) => !isMethodOpen);
            setIsMaterialOpen(false);
        }
        if (checkValue === MATERIAL) {
            setIsMaterialOpen((isMaterialOpen) => !isMaterialOpen);
            setIsMethodOpen(false);
        }
    };

    const closeOptionHandler = () => {
        setIsMethodOpen(false);
        setIsMaterialOpen(false);
    };

    const handleAllUncheck = () => {
        setArraysInit();
        closeOptionHandler();
    };

    const setArraysInit = () => {
        setSelectedMethod([]);
        setSelectedMaterial([]);
    };
    return (
        <ButtonsHolder>
            <div>
                <Button
                    value="method"
                    onClick={openOptionHandler}
                    theme={selectedMethod.length > 0 && 'deepblue'}
                >
                    가공방식
                    {selectedMethod.length > 0 && (
                        <span> ({selectedMethod.length})</span>
                    )}
                    {selectedMethod.length > 0 ? (
                        <ArrowIMG src={downArrowWhite} alt="drop-down" />
                    ) : (
                        <ArrowIMG src={downArrow} alt="drop-down" />
                    )}
                </Button>
                <OptionHolder>
                    <FilterButton
                        name="method"
                        setData={setData}
                        originData={originData}
                        buttonData={METHOD_LIST}
                        option={METHOD_LIST}
                        isOpen={isMethodOpen}
                        selected={selectedMethod}
                        setSelected={setSelectedMethod}
                    />
                </OptionHolder>
            </div>
            <div>
                <Button
                    value="material"
                    theme={selectedMaterial.length > 0 && 'deepblue'}
                    onClick={openOptionHandler}
                >
                    재료
                    {selectedMaterial.length > 0 && (
                        <span> ({selectedMaterial.length})</span>
                    )}
                    {selectedMaterial.length > 0 ? (
                        <ArrowIMG src={downArrowWhite} alt="drop-down" />
                    ) : (
                        <ArrowIMG src={downArrow} alt="drop-down" />
                    )}
                </Button>
                <OptionHolder>
                    <FilterButton
                        name="material"
                        setData={setData}
                        originData={originData}
                        buttonData={MATERIAL_LIST}
                        option={MATERIAL_LIST}
                        isOpen={isMaterialOpen}
                        selected={selectedMaterial}
                        setSelected={setSelectedMaterial}
                    />
                </OptionHolder>
            </div>
            {selectedMethod.length > 0 || selectedMaterial.length > 0 ? (
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

export default Filter;
