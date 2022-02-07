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
                            <td>도면개수</td>
                            <td>{item.amount}개</td>
                        </tr>
                        <tr>
                            <td>총 수량</td>
                            <td>{item.count}개</td>
                        </tr>
                        <tr>
                            <td>가공 방식</td>
                            <td>{item.method}</td>
                        </tr>
                        <tr>
                            <td>재료</td>
                            <td>{item.material}</td>
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
    margin-top: 24px; ;
`;
const Hr = styled.hr`
    border: 1px solid #e5e5e5;
    padding: 0;
    margin: 0; ;
`;
export default Card;
