import React, { useState } from 'react';
import { RequestsArray, ISetData } from 'utils/types';
import Option from './Option';

const PROCESSING_METHOD = ['밀링', '선반'];
const INGREDIENT = ['알루미늄', '탄소강', '구리', '합금강', '강철'];
// const [select, setSelected] = useState(0);

const Filter: React.FC<{
    data: RequestsArray;
    setData: ISetData;
}> = ({ data, setData }) => {
    const [isMethodOpen, setIsMethodOpen] = useState<boolean>(false);
    const [isIngreOpen, setIsIngreOpen] = useState<boolean>(false);

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

            {isMethodOpen && (
                <div>
                    {PROCESSING_METHOD.map((item, index) => (
                        <div>
                            <Option
                                key={index}
                                // id={item.id}
                                option={item}
                                data={data}
                                setData={setData}
                            />
                        </div>
                    ))}
                </div>
            )}

            {isIngreOpen && (
                <div>
                    {INGREDIENT.map((item, index) => (
                        <div>
                            <Option
                                key={index}
                                option={item}
                                data={data}
                                setData={setData}
                            />
                        </div>
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
