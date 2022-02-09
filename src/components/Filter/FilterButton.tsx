import Option from './Option';
import { RequestsArray, ISetData, ISetSelectedArray } from 'utils/types';

import { StyledFilterBtn } from './styled-filter';

const FilterButton: React.FC<{
    buttonData: string[];
    data: RequestsArray;
    setData: ISetData;
    originData: RequestsArray;
    name: string;
    option: string[];
    selected: (string | ConcatArray<string>)[];
    setSelected: ISetSelectedArray;
    checkList: (null | number)[];
    setCheckList: React.Dispatch<React.SetStateAction<(null | number)[]>>;
    isOpen: boolean;
}> = ({
    buttonData,
    data,
    setData,
    originData,
    name,
    selected,
    setSelected,
    checkList,
    setCheckList,
    isOpen,
}) => {
    return (
        <StyledFilterBtn isOpen={isOpen}>
            {buttonData.map((item, index) => (
                <Option
                    key={index}
                    name={name}
                    option={item}
                    data={data}
                    id={index}
                    setData={setData}
                    originData={originData}
                    selected={selected}
                    setSelected={setSelected}
                    setCheckList={setCheckList}
                    checkList={checkList}
                />
            ))}
        </StyledFilterBtn>
    );
};

export default FilterButton;
