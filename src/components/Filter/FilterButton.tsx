import React from 'react';
import { RequestsArray, ISetData, ISetConcatArray } from 'utils/types';
import Option from './Option';

const FilterButton: React.FC<{
    buttonData: string[];
    data: RequestsArray;
    onFiltered(selectedValue: string): void;
    setData: ISetData;
    originData: RequestsArray | null;
    name: string;
    option: string[];
}> = ({ buttonData, data, setData, onFiltered, originData, option, name }) => {
    return (
        <div>
            {buttonData.map((item, index) => (
                <Option
                    key={index}
                    name={name}
                    option={item}
                    data={data}
                    setData={setData}
                    onFiltered={onFiltered}
                    originData={originData}
                />
            ))}
        </div>
    );
};

export default FilterButton;
