import { useEffect, useState } from 'react';

import Filter from 'components/Filter';
import Cards from 'components/Cards';
import Toggle from 'components/Toggle';
import { RequestsArray } from 'utils/types';

import {
    Banner,
    CardsWrapper,
    Filtering,
    TopUtils,
    Wrapper,
} from './styled-contents';

const Contents = () => {
    const [data, setData] = useState<RequestsArray | null>([]);
    const [originData, setOriginData] = useState<RequestsArray | null>([]);
    const [isToggled, setIsToggled] = useState<boolean>(false);

    useEffect(() => {
        const getData = async () => {
            const json = await (
                await fetch(
                    'https://limitless-fjord-71130.herokuapp.com/requests'
                )
            ).json();

            setData(json);
            setOriginData(json);
        };

        getData();
    }, []);

    console.log(setData);
    const filteredData =
        data && isToggled
            ? data.filter((item) => item.status === '상담중')
            : data;
    if (filteredData === null || data === null || originData === null)
        return <div>로딩 중</div>;

    return (
        <Wrapper>
            <TopUtils>
                <Banner>
                    <div>들어온 요청</div>
                    <div>파트너님에게 딱 맞는 요청서를 찾아보세요.</div>
                </Banner>
                <Filtering>
                    <Filter
                        data={data}
                        setData={setData}
                        originData={originData}
                    />

                    <Toggle isToggled={isToggled} setIsToggled={setIsToggled} />
                </Filtering>
            </TopUtils>

            <CardsWrapper>
                <Cards data={filteredData} />
            </CardsWrapper>
        </Wrapper>
    );
};

export default Contents;
