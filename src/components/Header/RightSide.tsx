import { companyIcon } from 'assets';
import styled from 'styled-components';

const RightSide = () => {
    return (
        <RightBox>
            <img src={companyIcon} />
            <span>A 가공 업체</span>
            <hr />
            <span>로그아웃</span>
        </RightBox>
    );
};

const RightBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    color: #ffffff;
    margin-right: 2.78%;
    & > img {
        width: 16.67px;
        height: 15px;
        margin-right: 8px;
    }
    & > span {
        /* word-wrap: nowrap; */
        font-size: 14px;
        font-weight: 500;
    }
    & > hr {
        width: 1px;
        height: 16px;
        margin: 0 32px;
        border: 1px solid #ffffff;
    }
    @media screen and (max-width: 380px) {
        display: none;
    }
`;

export default RightSide;
