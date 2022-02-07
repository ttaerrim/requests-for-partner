import Card from 'components/Cards/Card';
import styled from 'styled-components';
import { RequestsArray } from 'utils/types';
const CardList: React.FC<{ data: RequestsArray }> = ({ data }) => {
    return (
        <CardHolder>
            {data.length ? (
                data.map((item) => <Card key={item.id} item={item} />)
            ) : (
                <div>조건에 맞는 견적 요청이 없습니다.</div>
            )}
        </CardHolder>
    );
};

const CardHolder = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export default CardList;
