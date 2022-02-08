import styled, { css } from 'styled-components';
import { IsOpenTypes, OptionHolderTypes } from 'utils/types';

export const StyledFilterBtn = styled.div<IsOpenTypes>`
    border: 1px solid #939fa5;
    border-radius: 4px;
    width: 130px;
    height: auto;
    margin-top: 4px;
    position: relative;
    ${({ isOpen }) => {
        if (!isOpen) {
            return css`
                display: none;
            `;
        }
    }}
`;

export const ButtonsHolder = styled.div`
    display: flex;
`;
export const OptionHolder = styled.div<OptionHolderTypes>`
    position: absolute;
    z-index: 100;
    background: #fff;
    left: ${(props) => props.name === 'meterial' && '263px'};
`;

export const ArrowIMG = styled.img`
    width: 10px;
    height: 5px;
    margin-bottom: 3px;
    margin-left: 12px;
`;

export const RefreshBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400px;
    color: #2196f3;
    margin-left: 16px;
    font-size: 12px;
`;

export const RefreshIMG = styled.img`
    width: 16px;
    height: 16px;
    margin-right: 12px;
`;
