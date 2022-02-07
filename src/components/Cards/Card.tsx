import React from 'react';
import { IRequests } from 'utils/types';

const Card: React.FC<{ item: IRequests }> = ({ item }) => {
    return (
        <div>
            <div>
                <p>{item.title}</p>
                <p>{item.client}</p>
                <p>{item.due}까지 납기</p>
                <p>도면 개수 {item.count}개</p>
                <p>총 수량 개{item.amount}</p>
                <p>가공 방식 {item.method} </p>
                <p>재료{item.material}</p>
            </div>
            <div>
                <button>요청 내역 보기</button>
                <button>채팅하기</button>
            </div>
        </div>
    );
};

export default Card;
