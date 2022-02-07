import React, { useEffect, useState } from 'react';
import {
    RequestsArray,
    ISetData,
    ISetSelectedArray,
    IRequests,
    ISetSelected,
} from 'utils/types';

const METHOD = 'method';
const MATERIAL = 'material';
const Option: React.FC<{
    option: string;
    setData: ISetData;
    data: RequestsArray;
    originData: RequestsArray;
    onFiltered(selectedValue: string): void;
    name: string;
    selectedMethod: (string | ConcatArray<string>)[];
    setSelectedMethod: ISetSelectedArray;
    selectedMaterial: (string | ConcatArray<string>)[];
    setSelectedMaterial: ISetSelectedArray;
}> = ({
    option,
    setData,
    data,
    onFiltered,
    originData,
    name,
    selectedMethod,
    setSelectedMethod,
    selectedMaterial,
    setSelectedMaterial,
}) => {
    const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.currentTarget;
        if (target.checked) {
            setSelected(target);
        } else {
            setSelectedInit(target);
        }
    };

    const setSelected = (target: EventTarget & HTMLInputElement) => {
        if (target.name === METHOD) {
            setSelectedMethod(selectedMethod.concat(target.value));
        }
        if (target.name === MATERIAL) {
            setSelectedMaterial(selectedMaterial.concat(target.value));
        }
    };

    const setSelectedInit = (target: EventTarget & HTMLInputElement) => {
        if (target.name === METHOD) {
            setSelectedMethod(
                selectedMethod.filter((method) => method !== target.value)
            );
        }
        if (target.name === MATERIAL) {
            setSelectedMaterial(
                selectedMaterial.filter((metarial) => metarial !== target.value)
            );
        }
    };
    const onFilter = () => {
        if (!selectedMaterial && !selectedMethod) {
            setData(originData);
        } else {
            const newData = originData.reduce<IRequests[]>((acc, curr) => {
                const selectedMethodCondition =
                    selectedMethod && selectedMethod.length > 0
                        ? // ? curr.method.includes(selectedMethod)
                          selectedMethod.every((i) =>
                              curr.method.includes(i.toString())
                          )
                        : true;
                const selectedMaterialCondition =
                    selectedMaterial && selectedMaterial.length > 0
                        ? selectedMaterial.every((i) =>
                              curr.material.includes(i.toString())
                          )
                        : true;
                if (selectedMaterialCondition && selectedMethodCondition) {
                    acc.push(curr);
                }
                return acc;
            }, []);
            setData(newData);
        }
    };

    useEffect(() => {
        onFilter();
    }, [selectedMaterial, selectedMethod]);
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
