import React from 'react';
import { IRequests } from 'utils/types';
import styled from 'styled-components';

const Card: React.FC<{ item: IRequests }> = ({ item }) => {
    return (
        <StyledCard>
            <div>
                <Title>{item.title}</Title>
                <SubTitle>{item.client}</SubTitle>
                <Period>{item.due}까지 납기</Period>
                <Hr />
                <table>
                    <tbody>
                        <tr>
                            <Normal>도면개수</Normal>
                            <Bold>{item.count}개</Bold>
                        </tr>
                        <tr>
                            <Normal>총 수량</Normal>
                            <Bold>{item.amount}개</Bold>
                        </tr>
                        <tr>
                            <Normal>가공방식</Normal>
                            <Bold>{item.method}</Bold>
                        </tr>
                        <tr>
                            <Normal>재료</Normal>
                            <Bold>{item.material}</Bold>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <button>요청 내역 보기</button>
                <button>채팅하기</button>
            </div>
        </StyledCard>
    );
};

const StyledCard = styled.div`
    width: 350px;
    height: 350px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    padding: 24px 16px;

    &:hover {
        border: 2px solid #2196f3;
    }
`;

const Title = styled.div`
    font-weight: 700;
    font-size: 16px;
    color: #323d45;
`;

const SubTitle = styled.div`
    font-weight: 500;
    font-size: 14px;
    color: #323d45;
    margin-top: 4px;
`;
const Period = styled.div`
    font-weight: 400;
    font-size: 14px;
    color: #939fa5;
    margin-top: 24px;
    margin-bottom: 16px;
`;
const Hr = styled.hr`
    outline: 0.2px solid #e5e5e5;
    border: 0;
    height: 0px;
    padding: 0;
    margin-bottom: 18px;
`;

const Normal = styled.td`
    font-weight: 400;
    font-size: 14px;
    padding: 4px 30px 4px 0;
`;

const Bold = styled.td`
    font-weight: 700;
    font-size: 14px;
`;

export default Card;
