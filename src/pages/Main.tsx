import Header from 'components/Header';
import Contents from 'components/Contents';
import styled from 'styled-components';

const Main = () => {
    return (
        <MainContainer>
            <Header />
            <Contents />
        </MainContainer>
    );
};

const MainContainer = styled.div`
    width: 100%;
`;

export default Main;
