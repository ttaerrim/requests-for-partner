import React from 'react';
import { companyIcon } from 'assets';
import styled from 'styled-components';

const RightSide = () => {
    return (
        <RightBox>
            <img src={companyIcon} />
            <span>A 가공 업체</span>
            <span>로그아웃</span>
        </RightBox>
    );
};

const RightBox = styled.div`
    color: #ffffff;
    & > img {
        width: 16.67px;
        height: 15px;
    }
`;

export default RightSide;
