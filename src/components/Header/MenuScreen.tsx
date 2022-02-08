import { companyIconBlack, logoIconColor } from 'assets';
import React from 'react';
import styled from 'styled-components';

const MenuScreen: React.FC<{ isOpen: boolean; menuOpen: () => void }> = ({
    isOpen,
    menuOpen,
}) => {
    return (
        <ScreenBox isOpen={isOpen}>
            <BackScreen onClick={menuOpen} isOpen={isOpen}></BackScreen>
            <FrontScreen isOpen={isOpen}>
                <div>
                    <img src={logoIconColor} />
                </div>
                <div>
                    <div>
                        <img src={companyIconBlack} />
                        <span>파트너정밀가공</span>
                    </div>
                    <span>로그아웃</span>
                </div>
            </FrontScreen>
        </ScreenBox>
    );
};

const ScreenBox = styled.div<{ isOpen: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    min-width: ${({ isOpen }) => (isOpen ? '360px' : '0')};
    transition: 0.5s;
    @media screen and (min-width: 380px) {
        display: none;
    }
`;

const BackScreen = styled.div<{ isOpen: boolean }>`
    position: fixed;
    height: 100%;
    opacity: 50%;
    background: #323d45;
    z-index: 1;
    width: ${({ isOpen }) => (isOpen ? '100%' : '0')};
`;

const FrontScreen = styled.div<{ isOpen: boolean }>`
    position: absolute;
    height: 100%;
    background: #ffffff;
    z-index: 2;
    width: ${({ isOpen }) => (isOpen ? '78%' : '0')};
    transition: 0.5s;

    & > * {
        display: ${({ isOpen }) => (isOpen ? '' : 'none')};
    }

    & > div:nth-child(1) {
        height: 44px;
        border-bottom: 1px solid #e5e5e5;
        & > img {
            position: absolute;
            width: 91.52px;
            height: 12px;
            top: 16px;
            left: 20px;
        }
    }
    & > div:nth-child(2) {
        padding: 36px 0 0 32px;
        & > div {
            display: flex;
            align-items: center;
            margin-bottom: 24px;
            & > img {
                width: 15px;
                height: 15px;
                margin-right: 8px;
            }
        }
    }
`;

export default MenuScreen;
