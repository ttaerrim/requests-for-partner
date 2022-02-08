import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 0 155px;
    margin: auto;
    align-content: center;
    flex-direction: column;
    @media screen and (max-width: 592px) {
        position: fixed;
        padding: 0 20px;
    }
`;

export const CardsWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`;

export const TopUtils = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Filtering = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media screen and (max-width: 1399px) {
        flex-direction: column;
    }
`;
export const Banner = styled.div`
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
