import React, { useEffect, useState } from 'react';
import {
    RequestsArray,
    ISetData,
    ISetConcatArray,
    IRequests,
} from 'utils/types';

const Option: React.FC<{
    option: string;
    setData: ISetData;
    data: RequestsArray;
    originData: RequestsArray | null;
    onFiltered(selectedValue: string): void;
    name: string;
    // id: number;
}> = ({ option, setData, data, onFiltered, originData, name }) => {
    const [isCheckedMethod, setIsCheckedMethod] = useState<boolean>(false);
    const [isCheckedMaterial, setIsCheckedMaterial] = useState<boolean>(false);
    const [selectedTargetName, setSelectedTargetName] = useState<string | null>(
        null
    );
    const [selectedValue, setSelectedValue] = useState<
        (string | ConcatArray<string>)[]
    >([]);
    const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
    const [selectedMaterial, setSelectedMaterial] = useState<string | null>(
        null
    );

    const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        // const selectedValue = event.currentTarget.value;
        const target = e.currentTarget;
        console.log(target);
        // setSelectedValue(target.value);
        if (target.name === 'method') {
            setSelectedMethod(target.value);
        }
        if (target.name === 'material') {
            setSelectedMaterial(target.value);
        }
    };
    const onFilter = (selectedValue: string) => {
        // if (가공방식 && 재료 암것도 없으면) setData(originalData)
        // else {
        //          const filteredList = data.reduce((acc, curr)=>{
        // const methodCondition = method ? cur.methodStatus === method : true;
        //  const
        // })
        // }
        // if (selectedTargetName === 'method') {
        //     setData(data.filter((item) => item.method.includes(selectedValue)));
        // }
        // if (selectedTargetName === 'material') {
        //     setData(
        //         data.filter((item) => item.material.includes(selectedValue))
        //     );
        // }
    };

    useEffect(() => {
        // if (!isChecked) {
        //     setData([...data]);
        // }

        // if (selectedValue) {
        //     // onFilter(selectedValue);
        // }
        // if (selectedValue && !isCheckedMethod && !isCheckedMaterial) {
        //     setData(originData);
        // }
        // const newData = data.reduce<IRequests[]>((acc, curr) => {
        console.log(selectedMaterial, selectedMethod);
        // }, {});
    }, [isCheckedMethod, selectedValue, selectedMaterial, selectedMethod]);
    return (
        <li>
            <input
                type="checkbox"
                name={name}
                value={option}
                onChange={handleClick}
            />
            <p>{option}</p>
        </li>
    );
};

export default Option;
