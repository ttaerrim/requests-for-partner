import Card from 'components/Cards/Card';
import { RequestsArray } from 'utils/types';
const CardList: React.FC<{ data: RequestsArray }> = ({ data }) => {
    return (
        <div style={{ display: 'flex' }}>
            {data.length ? (
                data.map((item) => <Card key={item.id} item={item} />)
            ) : (
                <div>조건에 맞는 견적 요청이 없습니다.</div>
            )}
        </div>
    );
};

export default CardList;
