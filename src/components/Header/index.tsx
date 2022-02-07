import styled from 'styled-components';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const Header = () => {
    return (
        <HeaderContainer>
            <LeftSide />
            <RightSide />
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
`;

export default Header;
