import styled from 'styled-components';

export const DescText = styled.p`
    font-size: 14px;
`;

export const ToggleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 1rem;

    @media screen and (max-width: 1399px) {
        margin-top: 20px;
        justify-content: flex-start;
    }
`;

export const ToggledContainer = styled.div`
    display: flex;
    position: relative;
    width: 34px;
    height: 14px;
    background: #c2c2c2;
    border-radius: 25px;
    input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    margin-right: 16px;
`;

export const Label = styled.label`
    width: 20px;
    height: 20px;
    background: #f5f5f5;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    border-radius: 50%;
    transition: transform 0.1s linear;
    position: absolute;
    top: -3px;
`;

export const Notch = styled.input`
    position: hide;
`;
