import styled, { css } from 'styled-components';
import { IsOpenTypes, OptionHolderTypes } from 'utils/types';

export const StyledFilterBtn = styled.div<IsOpenTypes>`
    border: 1px solid #939fa5;
    border-radius: 4px;
    width: 120%;
    height: auto;
    margin-top: 4px;
    background: #fff;
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

export const List = styled.div`
    display: flex;
    font-size: 14px;
    font-weight: 500;
    margin: 12px 17px;
`;
