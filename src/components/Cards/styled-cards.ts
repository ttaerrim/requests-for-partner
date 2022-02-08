import styled from 'styled-components';

export const CardHolder = styled.div`
    width: inherit;
    height: 110px;
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

export const NoRequestDiv = styled.div`
    width: 100%;
    height: 100px;
    border: 1px solid #c2c2c2;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #939fa5;
    font-size: 14px;
`;

export const StyledCard = styled.div`
    position: relative;
    z-index: 1;
    width: 366px;
    height: auto;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    padding: 24px 16px;
    margin: 8px;
    margin-left: 0px;
    &:hover {
        border: 2px solid #2196f3;
    }
`;

export const Title = styled.div`
    font-weight: 700;
    font-size: 16px;
    color: #323d45;
    display: flex;
    justify-content: space-between;
`;

export const OnConsult = styled.span`
    border: 1px solid #ffa000;
    border-radius: 12px;
    color: #ffa000;
    font-size: 12px;
    font-weight: 500;
    padding: 2px 8px;
`;

export const SubTitle = styled.div`
    font-weight: 500;
    font-size: 14px;
    color: #323d45;
    margin-top: 4px;
`;
export const Period = styled.div`
    font-weight: 400;
    font-size: 14px;
    color: #939fa5;
    margin-top: 24px;
    margin-bottom: 16px;
`;
export const Hr = styled.hr`
    outline: 0.2px solid #e5e5e5;
    border: 0;
    height: 0px;
    padding: 0;
    margin-bottom: 18px;
`;

export const Normal = styled.td`
    font-weight: 400;
    font-size: 14px;
    padding: 4px 30px 4px 0;
`;

export const Bold = styled.td`
    font-weight: 700;
    font-size: 14px;
`;

export const ButtonHolder = styled.div`
    margin-top: 40px;
`;
