import styled, { css } from 'styled-components';
import { ButtonProps, ButtonTypes } from 'utils/types';

const Button = ({ onClick, children, value, theme }: ButtonTypes) => {
    return (
        <StyledButton theme={theme} onClick={onClick} value={value}>
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
    border: ${({ theme }) =>
        theme === 'white' || theme === 'blue'
            ? '1px solid #2196F3'
            : '1px solid #939FA5'};
    color: ${({ theme }) => {
        if (theme === 'blue') return '#fff';
        else if (theme === 'white') return '#2196F3';
        else if (theme === 'filter') return '#323D45';
    }};
    background: ${({ theme }) => {
        if (theme === 'blue') return '#2196F3';
        else if (theme === 'deepblue') return '#1565C0';
    }};
    ${({ theme }) => {
        if (theme === 'deepblue')
            return css`
                color: white;
            `;
    }}
`;

export default Button;
