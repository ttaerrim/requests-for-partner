import styled from 'styled-components';
import { mediaQuery, MOBILE } from 'styles/mediaQuery';

const theme = {
    notMobile: `min-width: ${MOBILE}`,
    headerBgColor: '#1565c0',
};

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    background-color: ${theme.headerBgColor};
    align-items: center;

    ${mediaQuery(MOBILE)} {
        height: 44px;
        justify-content: space-between;
    }
`;

export const LeftBox = styled.div`
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
        background-color: ${theme.headerBgColor};
    }

    ${mediaQuery(MOBILE)} {
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

export const ScreenBox = styled.div<{ isOpen: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    transition: 0.5s;
    @media screen and (${theme.notMobile}) {
        display: none;
        position: fixed;
    }
`;

export const BackScreen = styled.div<{ isOpen: boolean }>`
    position: fixed;
    height: 100%;
    opacity: 50%;
    background: #323d45;
    z-index: 1;
    width: ${({ isOpen }) => (isOpen ? '100%' : '0')};
`;

export const FrontScreen = styled.div<{ isOpen: boolean }>`
    position: fixed;
    height: 100%;
    min-height: 100%;
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

export const RightBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    color: #ffffff;
    margin-right: 2.78%;
    & > img {
        width: 16.67px;
        height: 15px;
        margin-right: 8px;
    }
    & > span {
        font-size: 14px;
        font-weight: 500;
    }
    & > hr {
        width: 1px;
        height: 16px;
        margin: 0 32px;
        border: 1px solid #ffffff;
    }
    ${mediaQuery(MOBILE)} {
        display: none;
    }
`;
