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
    selectedMethod: (string | ConcatArray<string>)[];
    setSelectedMethod: ISetSelectedArray;
    selectedMaterial: (string | ConcatArray<string>)[];
    setSelectedMaterial: ISetSelectedArray;
    checkList: (null | number)[];
    setCheckList: React.Dispatch<React.SetStateAction<(null | number)[]>>;
    isOpen: boolean;
}> = ({
    buttonData,
    data,
    setData,
    originData,
    name,
    selectedMethod,
    setSelectedMethod,
    selectedMaterial,
    setSelectedMaterial,
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
                    selectedMethod={selectedMethod}
                    setSelectedMethod={setSelectedMethod}
                    selectedMaterial={selectedMaterial}
                    setSelectedMaterial={setSelectedMaterial}
                    setCheckList={setCheckList}
                    checkList={checkList}
                />
            ))}
        </StyledFilterBtn>
    );
};

export default FilterButton;
