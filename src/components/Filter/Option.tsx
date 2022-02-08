import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
    RequestsArray,
    ISetData,
    ISetSelectedArray,
    IRequests,
} from 'utils/types';
import { METHOD, MATERIAL } from 'utils/constants/data';
import Checkbox from 'layout/Checkbox';
const Option: React.FC<{
    option: string;
    setData: ISetData;
    data: RequestsArray;
    originData: RequestsArray;
    name: string;
    id: number;
    selectedMethod: (string | ConcatArray<string>)[];
    setSelectedMethod: ISetSelectedArray;
    selectedMaterial: (string | ConcatArray<string>)[];
    setSelectedMaterial: ISetSelectedArray;
    checkList: (null | number)[];
    setCheckList: React.Dispatch<React.SetStateAction<(null | number)[]>>;
}> = ({
    option,
    setData,
    data,
    id,
    originData,
    name,
    selectedMethod,
    setSelectedMethod,
    selectedMaterial,
    setSelectedMaterial,
    checkList,
    setCheckList,
}) => {
    const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.currentTarget;
        if (target.checked) {
            setSelected(target);
            console.log(target.checked);
            setCheckList([...checkList, parseInt(target.id)]);
        } else {
            setSelectedInit(target);
            setCheckList(checkList.filter((id) => id !== parseInt(target.id)));
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

    useEffect(() => {
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

        onFilter();
    }, [selectedMaterial, selectedMethod, checkList, originData]);

    return (
        <List>
            <Span>
                <StyledInput
                    type="checkbox"
                    name={name}
                    id={id.toString()}
                    value={option}
                    onChange={handleClick}
                    checked={
                        checkList ? (checkList as number[]).includes(id) : false
                    }
                />
                <Checkbox
                    type="checkbox"
                    name={name}
                    id={id.toString()}
                    value={option}
                    onChange={handleClick}
                    checked={
                        checkList ? (checkList as number[]).includes(id) : false
                    }
                />
            </Span>
            <span>{option}</span>
        </List>
    );
};

const List = styled.div`
    display: flex;
    font-size: 14px;
    font-weight: 500;
    margin: 12px 17px;
`;

const Span = styled.span`
    margin-right: 10px;
`;

const StyledInput = styled.input`
    width: 18px;
    height: 18px;
    border: none;
`;
export default Option;
