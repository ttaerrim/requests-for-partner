import Card from 'components/Cards/Card';
import styled from 'styled-components';
import { RequestsArray } from 'utils/types';
const CardList: React.FC<{ data: RequestsArray }> = ({ data }) => {
    return (
        <CardHolder className="cards">
            {data.length ? (
                data.map((item) => <Card key={item.id} item={item} />)
            ) : (
                <NoRequestDiv>조건에 맞는 견적 요청이 없습니다.</NoRequestDiv>
            )}
        </CardHolder>
    );
};

const CardHolder = styled.div`
    width: inherit;
    height: 110px;
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

const NoRequestDiv = styled.div`
    width: 100%;
    height: 100px;
    border: 1px solid #c2c2c2;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #939fa5;
    font-size: 14px;
`;

export default CardList;
