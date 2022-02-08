import { Fragment, useState } from 'react';

import LeftSide from './LeftSide';
import RightSide from './RightSide';
import MenuScreen from './MenuScreen';

import { HeaderContainer } from './styled-header';

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuOpen = () => {
        setIsOpen((state) => !state);
    };

    return (
        <Fragment>
            <HeaderContainer>
                <LeftSide menuOpen={menuOpen} />
                <RightSide />
            </HeaderContainer>
            <MenuScreen isOpen={isOpen} menuOpen={menuOpen} />
        </Fragment>
    );
};

export default Header;
