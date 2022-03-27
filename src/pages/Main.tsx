import Header from 'components/Header';
import Contents from 'components/Contents';
import styled from 'styled-components';
import { Fragment } from 'react';

const Main = () => {
    return (
        // <MainContainer>
        <Fragment>
            <Header />
            <Contents />
        </Fragment>
        // </MainContainer>
    );
};

const MainContainer = styled.div`
    width: 100%;
`;

export default Main;
