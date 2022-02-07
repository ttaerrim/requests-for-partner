import Card from 'components/Cards/Card';
import { RequestsArray } from 'utils/types';
const CardList: React.FC<{ data: RequestsArray }> = ({ data }) => {
    return (
        <>
            {data.map((item) => (
                <Card key={item.id} item={item} />
            ))}
        </>
    );
};

export default CardList;
