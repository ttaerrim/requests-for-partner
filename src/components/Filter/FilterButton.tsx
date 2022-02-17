import Option from './Option';
import { RequestsArray, ISetData, ISetSelectedArray } from 'utils/types';

import { StyledFilterBtn } from './styled-filter';

const FilterButton: React.FC<{
    buttonData: string[];
    setData: ISetData;
    originData: RequestsArray;
    name: string;
    option: string[];
    selected: (string | ConcatArray<string>)[];
    setSelected: ISetSelectedArray;
    isOpen: boolean;
}> = ({
    buttonData,
    setData,
    originData,
    name,
    selected,
    setSelected,
    isOpen,
}) => {
    return (
        <StyledFilterBtn isOpen={isOpen}>
            {buttonData.map((item, index) => (
                <Option
                    key={index}
                    name={name}
                    option={item}
                    id={index}
                    setData={setData}
                    originData={originData}
                    selected={selected}
                    setSelected={setSelected}
                />
            ))}
        </StyledFilterBtn>
    );
};

export default FilterButton;
