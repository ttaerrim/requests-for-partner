import React from 'react';
import styled from 'styled-components';
import { ButtonProps, ButtonTypes } from 'utils/types';

const Button = ({ onClick, children, type, value }: ButtonTypes) => {
    return (
        <StyledButton theme={type} onClick={onClick} value={value}>
            {children}
        </StyledButton>
    );
};

const StyledButton = styled.button<ButtonProps>`
    border: none;
    border-radius: 4px;
    padding: 6px 12px;
    margin-right: 8px;
    font-size: 14px;
    border: ${(props) =>
        props.theme === 'white' ? '1px solid #2196F3' : '1px solid #939FA5'};
    color: ${(props) => (props.theme === 'blue' ? '#fff' : '#2196F3')} || ${(
    props
) => props.theme === 'filter' && '#323D45'}
    background: ${(props) => props.theme === 'blue' && '#2196F3'};
`;

export default Button;
