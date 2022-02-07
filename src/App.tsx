import { Fragment } from 'react';
import GlobalStyle from './GlobalStyle';
import Main from 'pages/Main';

const App = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <Main />
        </Fragment>
    );
};

export default App;
