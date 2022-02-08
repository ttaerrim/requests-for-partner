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
    onFiltered(selectedValue: string): void;
    setData: ISetData;
    originData: RequestsArray;
    name: string;
    option: string[];
    selectedMethod: (string | ConcatArray<string>)[];
    setSelectedMethod: ISetSelectedArray;
    selectedMaterial: (string | ConcatArray<string>)[];
    setSelectedMaterial: ISetSelectedArray;
}> = ({
    buttonData,
    data,
    setData,
    onFiltered,
    originData,
    option,
    name,
    selectedMethod,
    setSelectedMethod,
    selectedMaterial,
    setSelectedMaterial,
}) => {
    return (
        <StyledFilterBtn>
            {buttonData.map((item, index) => (
                <Option
                    key={index}
                    name={name}
                    option={item}
                    data={data}
                    setData={setData}
                    onFiltered={onFiltered}
                    originData={originData}
                    selectedMethod={selectedMethod}
                    setSelectedMethod={setSelectedMethod}
                    selectedMaterial={selectedMaterial}
                    setSelectedMaterial={setSelectedMaterial}
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
`;

export default FilterButton;
