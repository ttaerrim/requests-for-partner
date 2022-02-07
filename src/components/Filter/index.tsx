import React, { useState } from 'react';
import { RequestsArray, ISetData } from 'utils/types';
import Option from './Option';
import FilterButton from './FilterButton';

const PROCESSING_METHOD = ['밀링', '선반'];
const INGREDIENT = ['알루미늄', '탄소강', '구리', '합금강', '강철'];
// const [select, setSelected] = useState(0);

const Filter: React.FC<{
    data: RequestsArray;
    setData: ISetData;
    onFiltered(selectedValue: string): void;
    originData: RequestsArray;
}> = ({ data, setData, onFiltered, originData }) => {
    const [isMethodOpen, setIsMethodOpen] = useState<boolean>(false);
    const [isIngreOpen, setIsIngreOpen] = useState<boolean>(false);
    const [selectedMethod, setSelectedMethod] = useState<
        (string | ConcatArray<string>)[]
    >([]);
    const [selectedMaterial, setSelectedMaterial] = useState<
        (string | ConcatArray<string>)[]
    >([]);

    const openOptionHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        const checkValue = event.currentTarget.value;
        if (checkValue === 'method') {
            setIsMethodOpen((prev) => !prev);
        }
        if (checkValue === 'ingredient') {
            setIsIngreOpen((prev) => !prev);
        }
    };

    return (
        <div>
            <button value="method" onClick={openOptionHandler}>
                가공방식
            </button>
            <button value="ingredient" onClick={openOptionHandler}>
                재료(1)
            </button>

            {/* {isMethodOpen && (
                <FilterButton
                    buttonData={PROCESSING_METHOD}
                    name="method"
                    option={PROCESSING_METHOD}
                    data={data}
                    setData={setData}
                    onFiltered={onFiltered}
                    originData={originData}
                />
            )}

            {isIngreOpen && (
                <FilterButton
                    buttonData={INGREDIENT}
                    name="material"
                    option={INGREDIENT}
                    data={data}
                    setData={setData}
                    onFiltered={onFiltered}
                    originData={originData}
                />
            )} */}

            {isMethodOpen && (
                <div>
                    {PROCESSING_METHOD.map((item, index) => {
                        return (
                            <Option
                                name="method"
                                key={index}
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
                        );
                    })}
                </div>
            )}

            {isIngreOpen && (
                <div>
                    {INGREDIENT.map((item, index) => (
                        <Option
                            name="material"
                            key={index}
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
                </div>
            )}

            <div>
                <button>필터링 리셋</button>
            </div>
        </div>
    );
};

export default Filter;
