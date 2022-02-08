import styled, { css } from 'styled-components';
import { CheckboxProps } from 'utils/types';

export const Checkbox = ({
    id,
    checked,
    onChange,
    label,
    name,
    value,
}: CheckboxProps) => {
    return (
        <CheckboxContainer>
            <CheckBox checked={checked} htmlFor={id}>
                <HiddenCheckbox
                    id={id}
                    type="checkbox"
                    onChange={onChange}
                    checked={checked}
                    name={name}
                    value={value}
                />
                <Icon checked={checked} viewBox="0 0 24 24">
                    {' '}
                    <polyline points="19 7 10 17 5 12" />{' '}
                </Icon>
            </CheckBox>
            {label ? <Label htmlFor={id}>{label}</Label> : null}
        </CheckboxContainer>
    );
};
const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
`;
const Icon = styled.svg<{ checked: boolean }>`
    fill: none;
    stroke: white;
    stroke-width: 3px;
    ${({ checked }) => {
        if (!checked) {
            return css`
                display: none;
            `;
        }
    }};
`;

const CheckBox = styled.label<{ checked: boolean }>`
    display: inline-block;
    width: 18px;
    height: 18px;
    border: ${({ checked }) =>
        checked ? '1px solid #2196F3' : '2px solid #939fa5'};
    background: ${({ checked }) => checked && '#2196F3'};
    border-radius: 2px;
    cursor: pointer;
    position: relative;
    ${Icon} {
        position: absolute;
    }
`;

const HiddenCheckbox = styled.input`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const Label = styled.label`
    display: inline-block;
    padding-left: 12px;
    cursor: pointer;
`;
