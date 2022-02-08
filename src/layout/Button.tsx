import styled from 'styled-components';
import { ButtonProps } from 'utils/types';

const Button: React.FC<{ type: string }> = (props) => {
    return <StyledButton theme={props.type}>{props.children}</StyledButton>;
};

const StyledButton = styled.button<ButtonProps>`
    border: none;
    border-radius: 4px;
    padding: 6px 12px;
    margin-right: 8px;
    font-size: 14px;
    border: ${(props) => props.theme !== 'blue' && '1px solid #2196F3'};
    color: ${(props) => (props.theme === 'blue' ? '#fff' : '#2196F3')};
    background: ${(props) => props.theme === 'blue' && '#2196F3'};
`;

export default Button;
