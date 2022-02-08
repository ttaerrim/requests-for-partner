import React from 'react';
import styled from 'styled-components';
import { logoIcon, hamburger } from 'assets';

const LeftSide: React.FC<{
    menuOpen: () => void;
}> = ({ menuOpen }) => {
    return (
        <LeftBox>
            <img src={hamburger} onClick={menuOpen} alt="icon" />
            <img src={logoIcon} alt="icon" />
        </LeftBox>
    );
};

const LeftBox = styled.div`
    display: flex;
    margin-left: 2.78%;
    width: 153px;
    height: 20px;
    align-items: center;
    & > img:nth-child(1) {
        display: none;
        width: 24px;
        height: 24px;
    }
    & > img:nth-child(2) {
        width: 153px;
        height: 20px;
        background-color: #1565c0;
    }

    @media screen and (max-width: 380px) {
        margin-left: 23px;
        & > img:nth-child(1) {
            display: block;
            margin-right: 16px;
        }
        & > img:nth-child(2) {
            width: 91.8px;
            height: 12px;
        }
    }
`;

export default LeftSide;
