import { Fragment } from 'react';
import Main from 'pages/Main';

import GlobalStyle from './GlobalStyle';

const App = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <Main />
        </Fragment>
    );
};

export default App;
