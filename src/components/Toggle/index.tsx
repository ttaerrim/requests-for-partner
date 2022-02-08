import React, { useRef } from 'react';

import styled from 'styled-components';

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
const ToggleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 1rem;

    @media screen and (max-width: 1399px) {
        margin-top: 20px;
        justify-content: flex-start;
    }
`;
const ToggledContainer = styled.div`
    display: flex;
    position: relative;
    width: 34px;
    height: 14px;
    background: #c2c2c2;
    border-radius: 25px;
    input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    margin-right: 16px;
`;

const Label = styled.label`
    width: 20px;
    height: 20px;
    background: #f5f5f5;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    border-radius: 50%;
    transition: transform 0.1s linear;
    position: absolute;
    top: -3px;
`;

/* transform: translate(${(props) => (props.checked ? '26px' : '1px')}); */
const Notch = styled.input`
    position: hide;
`;

const DescText = styled.p`
    font-size: 14px;
`;

export default Toggle;
