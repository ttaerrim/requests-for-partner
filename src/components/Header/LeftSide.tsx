import React from 'react';

import { logoIcon, hamburger } from 'assets';
import { LeftBox } from './styled-header';

const LeftSide: React.FC<{
    menuOpen: () => void;
}> = ({ menuOpen }) => {
    return (
        <LeftBox>
            <img src={hamburger} onClick={menuOpen} alt="icon" />
            <img src={logoIcon} alt="icon" />
        </LeftBox>
    );
};

export default LeftSide;
