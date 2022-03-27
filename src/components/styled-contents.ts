import styled from 'styled-components';
import { mediaQuery, PC_SMALL, TABLET, MOBILE } from 'styles/mediaQuery';

export const Wrapper = styled.div`
    display: flex;
    width: 1130px;
    margin: 40px auto;
    align-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1 0 auto;
    ${mediaQuery(PC_SMALL)} {
        width: 750px;
    }
    ${mediaQuery(TABLET)} {
        width: 400px;
    }
`;

export const Filtering = styled.section`
    display: flex;
    justify-content: space-between;
    width: inherit;
    flex-wrap: wrap;
    ${mediaQuery(TABLET)} {
        flex-direction: column;
    }
`;
export const Banner = styled.div`
    margin-bottom: 50px;
    width: inherit;

    div:first-child {
        font-size: 20px;
        font-weight: 700;
    }
    div:last-child {
        font-size: 16px;
        font-weight: 400;
    }
`;
