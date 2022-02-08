import { IRequests } from 'utils/types';

import {
    Bold,
    ButtonHolder,
    Hr,
    Normal,
    OnConsult,
    Period,
    StyledCard,
    SubTitle,
    Title,
} from './styled-cards';
import Button from 'layout/Button';

const Card: React.FC<{ item: IRequests }> = ({ item }) => {
    return (
        <StyledCard>
            <div>
                <Title>
                    <span>{item.title}</span>
                    {item.status === '상담중' && <OnConsult>상담중</OnConsult>}
                </Title>
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
                            <Bold>{item.method.join(', ')}</Bold>
                        </tr>
                        <tr>
                            <Normal>재료</Normal>
                            <Bold>{item.material.join(', ')}</Bold>
                        </tr>
                    </tbody>
                </table>
            </div>
            <ButtonHolder>
                <Button theme="blue">요청 내역 보기</Button>
                <Button theme="white">채팅하기</Button>
            </ButtonHolder>
        </StyledCard>
    );
};

export default Card;
