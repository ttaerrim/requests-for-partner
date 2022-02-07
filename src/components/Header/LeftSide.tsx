import React from 'react';
import styled from 'styled-components';
import { logoIcon } from 'assets';

const LeftSide = () => {
    return (
        <LeftBox>
            <img src={logoIcon} />
        </LeftBox>
    );
};

const LeftBox = styled.div`
    margin: 2.78%;
    & > img {
        width: 153px;
        height: 20px;
        background-color: #1565c0;
    }
`;

export default LeftSide;
