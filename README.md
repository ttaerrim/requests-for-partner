<h1 align="center"> 상품 등록 과제 </h1>

<h3 align="center"> 서비스 링크 : https://fervent-tereshkova-9b041a.netlify.app/</h3>

<p align="center"><img width="500" src="https://bit.ly/3HyINHE" /></p>

## 팀원

|  이름  |                       Github                        | 담당 기능                                                                                       |
| :----: | :-------------------------------------------------: | :---------------------------------------------------------------------------------------------- |
| 우종원 | [Ubermensch0608](https://github.com/Ubermensch0608) | 노출 및 판매 기간 설정, 재사용 가능 컴포넌트 생성, 상품소개 이미지, 구매자 추천 이미지 구현     |
| 박중섭 |    [crucial-sub](https://github.com/crucial-sub)    | 상품 배송 설정 및 상품 정보 고시 구현                                                           |
| 이태림 |       [ttaerrim](https://github.com/ttaerrim)       | 상품 기본 정보 구현 및 state 관리                                                               |
| 임수영 |     [penguin311](https://github.com/penguin311)     | 상품 옵션 등록, 추가 옵션 상품 등록, 옵션 등록 영역, 옵션세트 이미지 첨부 기능 구현 및 CSS 적용 |

## 설치

```
# clone the project
$ git clone https://github.com/console-lo9/README-TEMPLATE.git

# install modules
$ cd README-TEMPLATE
$ npm ci || yarn

# start
$ npm start || yarn start

⠀
⠀  You can now view this project in the browser.
⠀  http://localhost:3000/
⠀
```

## 의존성

```
  "dependencies": {
    "axios": "^0.25.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "styled-components": "^5.3.3",
    "web-vitals": "^2.1.4"
  },
```

## 파일 구조

     ├── public
     └── src
         ├── components
         │   ├── BuyerRecommendImg
         │   ├── Etc
         │   ├── NoticeProductInfo
         │   ├── ProductBenefit
         │   ├── ProductDelivery
         │   ├── ProductInfo
         │   ├── ProductOptions
         │   ├── ProductPeriodSetup
         │   ├── ProductThumbnail
         │   └── UploadImages
         ├── layout
         │   ├── Inputs
         │   └── Section
         ├── pages
         ├── store
         │   └── Contexts
         └── utils
             └── svg

> 작성 후 삭제
> 참고 (https://www.lesstif.com/lpt/linux-tree-54952142.html)
>
> ```
> $ tree -N -L 2 -d -I "node_modules"
> ```
>
> 또는 vscode File-tree-generator extension 사용

## 구현 사항

- [] typescript 구현
- [] 헤더
- [] 견적 요청 카드
  - [] 프로젝트 명
  - [] 요청한 고객사
  - [] 고객의 희망 납기일
  - [] 요청한 도면 개수
  - [] 요청한 제품 총 수량
  - [] 가공 방식: 도면 별로 밀링, 선반 중 한 가지 방식 선택
  - [] 재료: 도면 별로 한 가지 재료 선택
  - [] 카드 전체 영역에 마우스 hover시 보더 스타일
- [] 필터링
  - [] 가공 방식 필터가 선택되면 해당 방식 조건이 포함된 카드 모두 노출
  - [] 채료 필터 선택되면 해당 재료 조건 포함된 카드 모두 노출
  - [] 가공 방식과 재료 필터가 둘 다 선택되면 교집합 노출
  - [] 필터링 리셋 누르면 전체 필터 선택 해제
- [] 토글
  - [] 상담 중인 요청만 보기 토글 활성화하면 상담 중 뱃지가 달린 카드만 노출
- [] 빈 화면일 때 '조건에 맞는 견적 요청이 없습니다.' 문구 출력

- [] 반응형 구현
  - [] 햄버거 메뉴 아이콘 탭하면
    - [] 백그라운드 #000000 50%
    - [] 메뉴 화면이 왼쪽에서 들어옴
  - [] 백그라운드 영역 탭하면 메뉴 close

## 스크린샷

> 사진 더 넣을 거면 여기에
