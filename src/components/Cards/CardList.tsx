import Card from 'components/Cards/Card';
import { Fragment } from 'react';
import { RequestsArray } from 'utils/types';

import { CardHolder, NoRequestDiv } from './styled-cards';

const CardList: React.FC<{ data: RequestsArray }> = ({ data }) => {
    return (
        <Fragment>
            {data.length ? (
                <CardHolder className="cards">
                    {data.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </CardHolder>
            ) : (
                <NoRequestDiv>조건에 맞는 견적 요청이 없습니다.</NoRequestDiv>
            )}
        </Fragment>
    );
};

export default CardList;
