import React, { useState } from 'react';
import { RequestsArray } from 'utils/types';
import styled from 'styled-components';

const Toggle: React.FC<{
    isToggled: boolean;
    setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isToggled, setIsToggled }) => {
    return (
        <ToggledContainer>
            <ToggleInput
                onChange={(event) => {
                    setIsToggled(event.target.checked);
                }}
                type="checkbox"
                checked={isToggled}
            />
            <OnOffSwitch />{' '}
        </ToggledContainer>
    );
};

const ToggledContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const ToggleInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`;

const OnOffSwitch = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;

    right: 0;

    bottom: 0;

    border-radius: 20px;
    background-color: #ccc;

    box-shadow: inset 1px 5px 1px #999;
    transition: 0.4s;
`;

export default Toggle;
