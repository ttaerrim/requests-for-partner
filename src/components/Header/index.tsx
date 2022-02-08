import styled from 'styled-components';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import MenuScreen from './MenuScreen';
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <LeftSide setIsOpen={setIsOpen} />
                <RightSide />
                <MenuScreen isOpen={isOpen} />
            </HeaderWrapper>
        </HeaderContainer>
    );
};
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
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
