<h1 align="center"> 요청서 관리 과제 </h1>

<h3 align="center"> <strike>서비스 링크: https://limitless-fjord-71130.herokuapp.com</strike></h3>

<p align="center"><img width="800" src="https://user-images.githubusercontent.com/43867711/152996199-0eb414c4-0f97-4d30-9578-e6f024cfb325.png" /></p>

## `Implementation`

> 필터링 기능을 주로 맡아 구현하였습니다.

-   [x] typescript 구현
-   [x] 헤더
-   [x] json-server 사용
    -   [x] concurrently 라이브러리 사용해 json-server와 react 동시 실행
-   [x] 견적 요청 카드
    -   [x] 프로젝트 명
    -   [x] 요청한 고객사
    -   [x] 고객의 희망 납기일
    -   [x] 요청한 도면 개수
    -   [x] 요청한 제품 총 수량
    -   [x] 가공 방식: 도면 별로 밀링, 선반 중 한 가지 방식 선택
    -   [x] 재료: 도면 별로 한 가지 재료 선택
        -   [x] ❗️ **재료 필터의 합금강을 스테인리스강으로 수정**
    -   [x] 카드 전체 영역에 마우스 hover시 보더 스타일
-   [x] 필터링
    -   [x] 가공 방식 필터가 선택되면 해당 방식 조건이 포함된 카드 모두 노출
    -   [x] 재료 필터 선택되면 해당 재료 조건 포함된 카드 모두 노출
    -   [x] 가공 방식과 재료 필터가 둘 다 선택되면 교집합 노출
    -   [x] 필터링 리셋 누르면 전체 필터 선택 해제
-   [x] 토글
    -   [x] 상담 중인 요청만 보기 토글 활성화하면 상담 중 뱃지가 달린 카드만 노출
-   [x] 빈 화면일 때 '조건에 맞는 견적 요청이 없습니다.' 문구 출력

-   [x] 반응형 구현
    -   [x] 햄버거 메뉴 아이콘 탭하면
        -   [x] 백그라운드 #000000 50%
        -   [x] 메뉴 화면이 왼쪽에서 들어옴
    -   [x] 백그라운드 영역 탭하면 메뉴 close

## `Installation`

```
# clone the project
$ git clone https://github.com/console-lo9/requests-for-partner.git

# install modules
$ cd requests-for-partner
$ npm ci

# build
$ npm run build

# start
$ npm run start:dev

⠀
⠀  You can now view this project in the browser.
⠀  http://localhost:3001/
⠀
⠀  Resources
⠀  https://limitless-fjord-71130.herokuapp.com/requests
⠀
```

## `Dependencies`

```
  "dependencies": {
        "@types/jest": "^27.4.0",
        "@types/node": "^16.11.22",
        "@types/react": "^17.0.39",
        "@types/react-dom": "^17.0.11",
        "concurrently": "^7.0.0",
        "cross-env": "^7.0.3",
        "json-server": "^0.17.0",
        "react": "^17.0.2",
        "react-dom": "^17.0.2",
        "react-scripts": "5.0.0",
        "styled-components": "^5.3.3",
        "styled-normalize": "^8.0.7",
        "typescript": "^4.5.5",
        "web-vitals": "^2.1.4"
    },
```

## `Directory`

    ├── public
    ├── server
    └── src
        ├── assets
        ├── components
        │   ├── Cards
        │   ├── Filter
        │   ├── Header
        │   └── Toggle
        ├── layout              # 재사용 가능 컴포넌트
        ├── pages
        └── utils
            └── constants       # 상수 관리

## `ScreenShot`

1. 필터링 기능 - 체크박스

<p ><img src="https://user-images.githubusercontent.com/43867711/153021432-2d78e90b-19c4-41b0-9b03-e7b72661b24e.gif" /></p>

2. 필터링 기능 - 토글

<p><img src="https://user-images.githubusercontent.com/43867711/153021439-bb44aaa0-6003-442d-918f-4ec2ba009809.gif" /></p>

3. 반응형 앱 - 모바일 사이즈

<p><img src="https://user-images.githubusercontent.com/43867711/153042232-badf0e8f-b022-4d3d-ac43-fefe188eedd9.gif"></p>
<p><img src="https://user-images.githubusercontent.com/43867711/153042235-fa195cfd-c2da-44a0-b11c-050041d45144.gif"></p>

## 담당 기능

- 체크박스 필터링 기능
- mock data를 json-server로 구동

## 배운 점

- `TypeScript`를 활용한 React 프로젝트로 생산성을 향상시킬 수 있었다.
- `json-server` 를 사용하여 mock data를 API data를 가져오는 것처럼 구현할 수 있다.
- 필터링 기능을 구현할 때 `Array.reduce()` 메서드로 선택한 모든 요소의 교집합을 반환할 수 있다.
