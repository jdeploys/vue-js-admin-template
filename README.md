# vue-js-admin-template

vue 2 기반의 관리자용 웹 페이지용 템플릿 프로젝트입니다.

> 정리 및 유지 보수 참고용으로 작성하는 프로젝트입니다.

### 주요 설정

프로젝트 생성

- `vue-cli` ^4 기반의 `vue create` 명령어 사용

언어 및 프레임워크

- `typescript`
- `vue`

주요 라이브러리 및 프레임워크

- `quasar` [quasar](https://quasar.dev/) UI 구성용 라이브러리
- `vuex` state 관리용
- `vue-class-component` typescript 지원을 위한 필수 라이브러리
- `vue-property-decorator` typescript 지원을 위한 필수 라이브러리
- `vuex-module-decorators` vuex 의 모듈을 클래스화해서 사용하기 쉽도록 도와주는 라이브러리

### 참고사항

해당 repository 에는 기초 구조 설계 참고를 위해 아주 간단한 샘플만 적용하였습니다.

폴더별 사용 용도 및 분리는 아래와 같습니다.

- `assets` vue 기본 지정 asset 폴더
- `components` 재사용 가능성이 있는 모든 컴포넌트는 해당 폴더에 포함
- `config` 현재 app 이 실행되기 전에 사전에 설정되어야 하는 전역 설정을 여기에 포함
- `layouts` app 이 가질 수 있는 레이아웃 형태를 컴포넌트로 선언하여 이곳에 포함
- `pages` router 와 매칭되는 (하나의 url 을 갖는) 페이지들
- `shared` 공통 요소 (ex: axios, util 등)
- `store` vuex 설정과 관련된 내용 포함
- `styles` css 등 스타일과 관련된 내용 포함

아주 기초적이고 자주 사용되지만 설정하기 귀찮은 부분까지만 구성하였습니다.

더 좋은 사용법이나 개선이 필요한 내용이 있다면 남겨주세요.

### License

MIT License

해당 소스 코드는 자유롭게 사용 가능합니다.
