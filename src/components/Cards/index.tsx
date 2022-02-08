import CardList from 'components/Cards/CardList';

import { RequestsArray } from 'utils/types';

const Cards: React.FC<{ data: RequestsArray }> = ({ data }) => {
    return <CardList data={data} />;
};

export default Cards;
