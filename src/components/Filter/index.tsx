import { useState } from 'react';
import FilterButton from './FilterButton';

import {
    INGREDIENT,
    PROCESSING_METHOD,
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
    data: RequestsArray;
    setData: ISetData;
    originData: RequestsArray;
}> = ({ data, setData, originData }) => {
    const [isMethodOpen, setIsMethodOpen] = useState(false);
    const [isIngreOpen, setIsIngreOpen] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState<
        (string | ConcatArray<string>)[]
    >([]);
    const [selectedMaterial, setSelectedMaterial] = useState<
        (string | ConcatArray<string>)[]
    >([]);

    const [methodCheckList, setMethodCheckList] = useState<(null | number)[]>(
        []
    );
    const [materialCheckList, setMaterialCheckList] = useState<
        (null | number)[]
    >([]);

    const [materialDatas, setMaterialDatas] = useState<string[]>([]);

    const openOptionHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        const checkValue = event.currentTarget.value;
        if (checkValue === METHOD) {
            setIsMethodOpen((isMethodOpen) => !isMethodOpen);
            setIsIngreOpen(false);
        }
        if (checkValue === MATERIAL) {
            setIsIngreOpen((isIngreOpen) => !isIngreOpen);
            setIsMethodOpen(false);
        }
    };

    const closeOptionHandler = () => {
        setIsMethodOpen(false);
        setIsIngreOpen(false);
    };

    const handleAllUncheck = () => {
        setArraysInit();
        closeOptionHandler();
    };

    const setArraysInit = () => {
        setSelectedMethod([]);
        setSelectedMaterial([]);
        setMaterialCheckList([]);
        setMethodCheckList([]);
    };

    // for (let i = 0; i < data.length; i++) {
    //     const materialArr = data[i].material;
    //     for (let j = 0; j < materialArr.length; j++) {
    //         setMaterialDatas((prevDatas) => {
    //             return [...prevDatas];
    //         });
    //     }
    // }

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
                        isOpen={isMethodOpen}
                        buttonData={PROCESSING_METHOD}
                        name="method"
                        option={PROCESSING_METHOD}
                        data={data}
                        setData={setData}
                        originData={originData}
                        selectedMethod={selectedMethod}
                        setSelectedMethod={setSelectedMethod}
                        selectedMaterial={selectedMaterial}
                        setSelectedMaterial={setSelectedMaterial}
                        setCheckList={setMethodCheckList}
                        checkList={methodCheckList}
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
                        isOpen={isIngreOpen}
                        selectedMethod={selectedMethod}
                        setSelectedMethod={setSelectedMethod}
                        selectedMaterial={selectedMaterial}
                        setSelectedMaterial={setSelectedMaterial}
                        buttonData={INGREDIENT}
                        name="material"
                        option={INGREDIENT}
                        data={data}
                        setData={setData}
                        originData={originData}
                        setCheckList={setMaterialCheckList}
                        checkList={materialCheckList}
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
