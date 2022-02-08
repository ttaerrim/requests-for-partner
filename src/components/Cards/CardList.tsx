import Card from 'components/Cards/Card';
import { RequestsArray } from 'utils/types';

import { CardHolder, NoRequestDiv } from './styled-cards';

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

export default CardList;
