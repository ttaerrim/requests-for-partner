import React, { useRef } from 'react';

import { DescText, Label, Notch, ToggledContainer, ToggleDiv } from './styled';

const Toggle: React.FC<{
    isToggled: boolean;
    setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isToggled, setIsToggled }) => {
    const checkingRef = useRef<HTMLInputElement>(null);

    const changeHandler = () => {
        const isChecked = checkingRef.current!.checked;

        setIsToggled(isChecked);
    };

    return (
        <ToggleDiv>
            <ToggledContainer>
                <Label
                    htmlFor="toggle"
                    style={{
                        transform: `translateX(${isToggled ? '15px' : '0px'})`,
                    }}
                />
                <Notch
                    onChange={changeHandler}
                    ref={checkingRef}
                    id="toggle"
                    type="checkbox"
                />
            </ToggledContainer>

            <DescText>상담 중인 요청만 보기</DescText>
        </ToggleDiv>
    );
};

export default Toggle;
