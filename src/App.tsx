import { Fragment } from 'react';
import GlobalStyle from './GlobalStyle';
import Main from 'pages/Main';
import styled from 'styled-components';

const App = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <Div>
                <Main />
            </Div>
        </Fragment>
    );
};

const Div = styled.div``;

export default App;
