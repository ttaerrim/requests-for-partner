import { companyIconBlack, logoIconColor } from 'assets';

import { BackScreen, FrontScreen, ScreenBox } from './styled-header';

const MenuScreen: React.FC<{ isOpen: boolean; menuOpen: () => void }> = ({
    isOpen,
    menuOpen,
}) => {
    return (
        <ScreenBox isOpen={isOpen}>
            <BackScreen onClick={menuOpen} isOpen={isOpen}></BackScreen>
            <FrontScreen isOpen={isOpen}>
                <div>
                    <img src={logoIconColor} alt="icon" />
                </div>
                <div>
                    <div>
                        <img src={companyIconBlack} alt="icon" />
                        <span>파트너정밀가공</span>
                    </div>
                    <span>로그아웃</span>
                </div>
            </FrontScreen>
        </ScreenBox>
    );
};

export default MenuScreen;
