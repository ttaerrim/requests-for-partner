import React, { useEffect } from 'react';
import {
    RequestsArray,
    ISetData,
    ISetSelectedArray,
    IRequests,
} from 'utils/types';
import { METHOD, MATERIAL } from 'utils/constants/data';
import { Checkbox } from 'layout/Checkbox';
import { List } from './styled-filter';
const Option: React.FC<{
    option: string;
    setData: ISetData;
    data: RequestsArray;
    originData: RequestsArray;
    name: string;
    id: number;
    selected: (string | ConcatArray<string>)[];
    setSelected: ISetSelectedArray;
}> = ({
    option,
    setData,
    data,
    id,
    originData,
    name,
    selected,
    setSelected,
}) => {
    const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.currentTarget;
        if (target.checked) {
            setSelected(selected.concat(target.value));
        } else {
            setSelectedInit(target);
        }
    };

    const setSelectedInit = (target: EventTarget & HTMLInputElement) => {
        if (target.name === METHOD) {
            setSelected(selected.filter((method) => method !== target.value));
        } else if (target.name === MATERIAL) {
            setSelected(
                selected.filter((metarial) => metarial !== target.value)
            );
        }
    };
    useEffect(() => {
        const onFilter = () => {
            if (!selected) {
                setData(originData);
            } else {
                const newData = originData.reduce<IRequests[]>((acc, curr) => {
                    const selectedMethodCondition =
                        name === 'method' && selected && selected.length > 0
                            ? selected.every((i) =>
                                  curr.method.includes(i.toString())
                              )
                            : true;
                    const selectedMaterialCondition =
                        name === 'material' && selected && selected.length > 0
                            ? selected.every((i) =>
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
    }, [selected, originData]);

    return (
        <List>
            <Checkbox
                id={id.toString() + option}
                checked={
                    selected ? (selected as string[]).includes(option) : false
                }
                onChange={handleClick}
                label={option}
                name={name}
                value={option}
            />
        </List>
    );
};

export default Option;
