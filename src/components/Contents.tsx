import { useEffect, useState } from 'react';

import Filter from 'components/Filter';
import Cards from 'components/Cards';
import Toggle from 'components/Toggle';
import { RequestsArray } from 'utils/types';

import { Banner, Filtering, Wrapper } from './styled-contents';

const Contents = () => {
    const [data, setData] = useState<RequestsArray | null>([]);
    const [originData, setOriginData] = useState<RequestsArray | null>([]);
    const [isToggled, setIsToggled] = useState<boolean>(false);

    useEffect(() => {
        const getData = async () => {
            const json = await (await fetch('/requests')).json();
            setOriginData(json);
        };
        getData();
    }, []);

    const filteredData =
        data && isToggled
            ? data.filter((item) => item.status === '상담중')
            : data;
    if (filteredData === null || data === null || originData === null)
        return <div>로딩 중</div>;

    return (
        <Wrapper>
            <Banner>
                <div>들어온 요청</div>
                <div>파트너님에게 딱 맞는 요청서를 찾아보세요.</div>
            </Banner>
            <Filtering>
                <Filter setData={setData} originData={originData} />

                <Toggle isToggled={isToggled} setIsToggled={setIsToggled} />
            </Filtering>

            <Cards data={filteredData} />
        </Wrapper>
    );
};

export default Contents;
