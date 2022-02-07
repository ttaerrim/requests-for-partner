import styled from 'styled-components';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import MenuScreen from './MenuScreen';
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <HeaderContainer>
            <LeftSide setIsOpen={setIsOpen} />
            <RightSide />
            <MenuScreen isOpen={isOpen} />
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #1565c0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 380px) {
        height: 44px;
    }
`;

export default Header;
