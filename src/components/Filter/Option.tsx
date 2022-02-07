import React from 'react';
import { ISetData } from 'utils/types';
import { RequestsArray } from 'utils/types';

const Option: React.FC<{
    option: string;
    setData: ISetData;
    data: RequestsArray;
    // id: number;
}> = ({ option, setData, data }) => {
    const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = event.currentTarget.value;
        const newArray = data.filter((item) =>
            item.method.includes(selectedValue)
        );
        console.log(newArray);
    };

    return (
        <li>
            <input type="checkbox" value={option} onChange={handleClick} />
            <p>{option}</p>
        </li>
    );
};

export default Option;
