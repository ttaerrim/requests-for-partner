import styled from 'styled-components';
import { CheckboxTypes } from 'utils/types';
const Checkbox = ({
    onChange,
    children,
    id,
    value,
    checked,
    name,
}: CheckboxTypes) => {
    return (
        <div>
            <StyledCheckbox
                onChange={onChange}
                id={id}
                value={value}
                checked={checked}
                name={name}
                type="checkbox"
            ></StyledCheckbox>
        </div>
    );
};

const StyledCheckbox = styled.input`
    display: none;

    & + label {
        display: inline-block;
        width: 18px;
        height: 18px;
        border: 2px solid #939fa5;
        border-radius: 2px;
        position: relative;
        /* margin-right: 13px; */
    }
    &:checked + label {
        border: none;
    }
    &:checked + label::after {
        background-color: #2196f3;
        border-radius: 2px;
        color: white;
        content: '✓';
        font-size: 10px;
        width: 18px;
        height: 18px;
        text-align: center;
        position: absolute;
    }
`;

export default Checkbox;
/**
 * .input[type="checkbox"] {
  display: none;
}
.input[type="checkbox"] + label {
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  position: relative;
  margin-right: 13px;
}
.input:checked + label::after {
  
}

 */
