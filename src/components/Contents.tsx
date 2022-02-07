import React, { useEffect, useState } from 'react';
import Filter from 'components/Filter';
import Cards from 'components/Cards';
import Toggle from 'components/Toggle';
import { RequestsArray } from 'utils/types';

const Contents = () => {
    const [data, setData] = useState<RequestsArray | null>([]);

    const getData = async () => {
        const json = await (
            await fetch('http://localhost:4000/requests')
        ).json();
        setData(json);
    };

    useEffect(() => {
        getData();
    }, []);

    console.log('data:', data);
    if (data === null) return <div>로딩 중</div>;
    return (
        <div>
            <Filter data={data} setData={setData} />
            <Toggle />
            <Cards data={data} />
        </div>
    );
};

export default Contents;
