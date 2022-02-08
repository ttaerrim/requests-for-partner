import React from 'react';
import styled from 'styled-components';
import {
    RequestsArray,
    ISetData,
    ISetSelected,
    ISetSelectedArray,
} from 'utils/types';

import Option from './Option';

const FilterButton: React.FC<{
    buttonData: string[];
    data: RequestsArray;
    setData: ISetData;
    originData: RequestsArray;
    name: string;
    option: string[];
    selectedMethod: (string | ConcatArray<string>)[];
    setSelectedMethod: ISetSelectedArray;
    selectedMaterial: (string | ConcatArray<string>)[];
    setSelectedMaterial: ISetSelectedArray;
    checkList: (null | number)[];
    setCheckList: React.Dispatch<React.SetStateAction<(null | number)[]>>;
}> = ({
    buttonData,
    data,
    setData,
    originData,
    option,
    name,
    selectedMethod,
    setSelectedMethod,
    selectedMaterial,
    setSelectedMaterial,
    checkList,
    setCheckList,
}) => {
    return (
        <StyledFilterBtn>
            {buttonData.map((item, index) => (
                <Option
                    key={index}
                    name={name}
                    option={item}
                    data={data}
                    id={index}
                    setData={setData}
                    originData={originData}
                    selectedMethod={selectedMethod}
                    setSelectedMethod={setSelectedMethod}
                    selectedMaterial={selectedMaterial}
                    setSelectedMaterial={setSelectedMaterial}
                    setCheckList={setCheckList}
                    checkList={checkList}
                />
            ))}
        </StyledFilterBtn>
    );
};

const StyledFilterBtn = styled.div`
    border: 1px solid #939fa5;
    border-radius: 4px;
    width: 130px;
    height: auto;
    margin-top: 4px;
    position: relative;
`;

export default FilterButton;
