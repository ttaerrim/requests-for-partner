import Header from 'components/Header';
import Contents from 'components/Contents';
import styled from 'styled-components';

const Main = () => {
    return (
        <>
            <Header />
            <Contents />
        </>
    );
};

const MainContainer = styled.div`
    display: flex;
`;

export default Main;
