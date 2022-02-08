import { companyIconBlack, logoIconColor } from 'assets';
import React from 'react';
import styled from 'styled-components';

const MenuScreen: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
    return (
        <ScreenBox>
            <BackScreen>asd</BackScreen>
            <FrontScreen>
                <div>
                    <img src={logoIconColor} />
                </div>
                <div>
                    <div>
                        <img src={companyIconBlack} />
                    </div>
                </div>
            </FrontScreen>
        </ScreenBox>
    );
};

const ScreenBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`;

const BackScreen = styled.div`
    position: absolute;
    width: 360px;
    height: 730px;
    opacity: 50%;
    background: #323d45;
    z-index: 1;
`;

const FrontScreen = styled.div`
    position: absolute;
    width: 280px;
    height: 730px;
    background: #ffffff;
    z-index: 2;

    & > div & > div > img {
        position: absolute;
        width: 91.52px;
        height: 12px;
        top: 16px;
        left: 20px;
    }
`;

export default MenuScreen;
