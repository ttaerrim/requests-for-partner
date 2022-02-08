import React from 'react';
import styled from 'styled-components';

const MenuScreen: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
    return (
        <>
            <BackScreen>asd</BackScreen>
            <FrontScreen>asd</FrontScreen>
        </>
    );
};

const BackScreen = styled.div`
position absolute;
width: 150px;
height: 100px;
opacity: 50%;
background: #323D45;
z-index: 1;
display:none
`;

const FrontScreen = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
    background: #ffffff;
    box-shadow: 0px 2px 2px 0px #0000003d;
    box-shadow: 0px 0px 2px 0px #0000001f;
    z-index: 2;
    display: none;
`;

export default MenuScreen;
