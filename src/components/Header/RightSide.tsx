import { companyIcon } from 'assets';
import { RightBox } from './styled-header';

const RightSide = () => {
    return (
        <RightBox>
            <img src={companyIcon} alt="icon" />
            <span>A 가공 업체</span>
            <hr />
            <span>로그아웃</span>
        </RightBox>
    );
};

export default RightSide;
