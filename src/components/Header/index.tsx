import styled from 'styled-components';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import MenuScreen from './MenuScreen';
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuOpen = () => {
        setIsOpen((state) => !state);
    };
    console.log(isOpen);

    return (
        <>
            <HeaderContainer>
                <LeftSide menuOpen={menuOpen} />
                <RightSide />
            </HeaderContainer>
            <MenuScreen isOpen={isOpen} menuOpen={menuOpen} />
        </>
    );
};
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    min-width: 360px;
    height: 70px;
    background-color: #1565c0;
    align-items: center;

    @media screen and (max-width: 380px) {
        height: 44px;
    }
`;

const HeaderWrapper = styled.div`
    display: flex;
    width: 1800px;
    justify-content: space-between;
`;

export default Header;
