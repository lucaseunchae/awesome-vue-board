# Awesome Vue Board

<p align="center"><img src="https://github.com/lucaseunchae/awesome-vue-board/assets/123533586/72960c17-260d-4b2f-8934-3fc973b8d15f" width="400px"></p>
<p align="center">Vue3 프로젝트의 구조와 코드 작성 방법을 참고할 수 있는 <a href="https://lambent-khapse-2d4d34.netlify.app/" target="_blank">게시판 데모</a>입니다.</p>

<br>

## 🚩

프로젝트를 만든 동기, 만들어나간 과정, 완성 이후 느낀점은 <a href="https://plump-course-51b.notion.site/Awesome-Vue-Board-41123fdaffd44546b86e2ccfb3fb3ecb?pvs=4" target="_blank">프로젝트 회고글</a>에 작성해 두었습니다.

<br>

## 기술 스택

- Vue3(Composition API)
- TypeScript
- SCSS
- Pinia
- Tanstack Query
- Axios

<br>

## API

<a href="https://jsonplaceholder.typicode.com/" target="_blank">JSONPlaceholder</a>에서 제공하는 OpenAPI를 사용했습니다.

<br>

## 기능

- 게시글 목록 조회
- 게시글 조회
- 게시글 삭제
- 게시글 수정
- 댓글 작성
- 댓글 삭제

<br>

## 화면 구성

### 1. HomeView

<img src="https://github.com/lucaseunchae/awesome-vue-board/assets/123533586/72960c17-260d-4b2f-8934-3fc973b8d15f" width="400px">

- 게시글 목록을 조회할 수 있습니다.
- 카데고리, 좋아요, 찜 기능은 OpenAPI 사용으로 인해 UI만 구현되어 있습니다.

### 2. PostDetailView

<img src="https://github.com/lucaseunchae/awesome-vue-board/assets/123533586/2cf1d967-8de4-451f-8709-7a77c74bca9b" width="400px">

- 게시글을 삭제할 수 있습니다.
- 게시글 수정 페이지로 이동할 수 있습니다.
- 댓글을 작성할 수 있습니다.
- 댓글 목록을 조회할 수 있습니다.

### 3. PostUpdateView

<img src="https://github.com/lucaseunchae/awesome-vue-board/assets/123533586/a3fa9f7c-0891-4431-9b9c-d531fe3ffb7b" width="400px">

- 게시글을 수정할 수 있습니다.

<br>

## 주요 컴포넌트

| 컴포넌트명    | 설명                                                                                                              |
| ------------- | ---------------------------------------------------------------------------------------------------------------- |
| BaseButton    | 'filled', 'outlined', 'text' 타입을 지원하고, isLoading이나 disabled 상태를 표현할 수 있습니다.                      |
| BaseIcon      | Material Symbol을 사용할 수 있습니다.                                                                              |
| BaseModal     | Modal Wrapper로, LoginModal이나 ConfirmDialog와 같은 컴포넌트를 구현하는데 사용할 수 있습니다.                        |
| ConfirmDialog | BaseModal의 구현 컴포넌트로, callback 함수를 prop으로 받아 confirm시 호출합니다.                                      |
| AlertDialog   | BaseModal의 구현 컴포넌트로, 주로 서버 통신 에러시 유저에게 보여주는 경고 문구입니다.                                   |
| ToastMessage  | 화면 우측 하단에 stack형태로 쌓이는 message이며 'Success', 'Info', 'Warning', 'Error' 상태를 나타낼 수 있습니다.       |
| Text          | Typography Design System 컴포넌트로 TextHeading, TextBody, TextCaption과 같은 컴포넌트들이 존재합니다.                |

<br>

## 프로젝트 구조

```bash
+---.vscode
+---public
\---src
    +---api                     // Axios config, api 
    +---assets
    |   \---scss
    +---components              // Global Components
    |   +---Base                               
    |   +---Common              
    |   +---Text                
    |   \---TheSidebar
    +---composables             // Global Composables
    +---features                // 기능별 분리
    |   +---Comment
    |   |   +---components
    |   |   \---composables
    |   \---Post
    |       +---components
    |       +---composables
    |       \---views
    +---model                   // Type과 관련된 코드
    +---router
    +---stores
    +---utils
    \---views
```
