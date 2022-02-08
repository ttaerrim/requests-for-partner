import React, { useEffect, useState } from 'react';
import Filter from 'components/Filter';
import Cards from 'components/Cards';
import Toggle from 'components/Toggle';
import { RequestsArray } from 'utils/types';
import styled from 'styled-components';

const Contents = () => {
    const [data, setData] = useState<RequestsArray | null>([]);
    const [originData, setOriginData] = useState<RequestsArray | null>([]);
    const [isToggled, setIsToggled] = useState<boolean>(false);

    useEffect(() => {
        const getData = async () => {
            const json = await (
                await fetch('http://localhost:4000/requests')
            ).json();
            setData(json);
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
//contents 반응형으로 1400px
const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 0 155px 0 155px;
    margin: auto;
    align-content: center;
    flex-direction: column;
`;

const CardsWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`;

const TopUtils = styled.div`
    display: flex;
    flex-direction: column;
`;
const Filtering = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media screen and (max-width: 1399px) {
        flex-direction: column;
    }
`;
const Banner = styled.div`
    margin: 40px 0 50px 0;

    div:first-child {
        font-size: 20px;
        font-weight: 700;
    }
    div:last-child {
        font-size: 16px;
        font-weight: 400;
    }
`;

export default Contents;
