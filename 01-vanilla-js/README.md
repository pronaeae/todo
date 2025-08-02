# 01-vanilla-js - Vanilla JavaScript TODO 리스트

## 🚀 실행 방법

### 방법 1: Node.js 사용

```bash
# 01-vanilla-js 폴더에서
npx serve .

# 브라우저에서 http://localhost:3000 접속
```

### 방법 2: Live Server (VS Code 확장)

-   VS Code에서 Live Server 확장 설치
-   `index.html` 파일 우클릭 → "Open with Live Server"

## 🎯 구현된 기능

-   ✅ 할 일 추가/삭제/완료 토글
-   ✅ 로컬 스토리지 저장
-   ✅ XSS 방지 (DOMPurify)
-   ✅ 이벤트 위임을 통한 이벤트 처리

## 💭 개발자 느낀점

### DOM 조작의 복잡성

-   React의 선언적 렌더링에 익숙해진 상태에서 명령형 DOM 조작의 불편함을 체감
-   데이터 변경 시 `innerHTML`로 전체 DOM을 다시 렌더링해야 하는 번거로움
-   부분 업데이트가 아닌 전체 리렌더링 방식으로 인한 성능 이슈 가능성

### 상태 관리의 어려움

-   전역 배열(`list`)을 사용한 상태 관리의 한계
-   데이터와 UI 동기화를 수동으로 처리해야 하는 복잡성
-   상태 변경 시마다 `renderTodoItem()`과 `updateTodo()`를 명시적으로 호출

### 개발 생산성

-   오랜만에 바닐라 JavaScript 사용으로 인한 문서 참조 필요
-   React에 비해 상대적으로 긴 개발 시간 소요 (익숙하지 않았다.)
-   코드 재사용성과 유지보수성의 한계 체험

### 보안 고려사항

-   XSS 방지를 위한 DOMPurify 라이브러리 사용
-   난독화 작업이 필요할 경우 직접 구현 필요 (Vite, Webpack 등의 빌드 도구 사용)

### 성능 고려사항

-   할 일 목록이 많을 경우 전체 리렌더링으로 인한 성능 저하 가능성

## 🏗️ 프로젝트 구조

```
01-vanilla-js/
├── index.html          # 메인 HTML 파일
├── global.css          # 스타일시트
├── localstorage.js     # JavaScript 로직
└── README.md          # 이 파일
```

## 🔧 사용된 기술

-   **HTML5**: 시맨틱 마크업
-   **CSS3**: 모던 스타일링
-   **Vanilla JavaScript**: ES6+ 문법 사용
-   **DOMPurify**: XSS 방지
-   **localStorage**: 데이터 영속성

### 이벤트 위임 패턴

```javascript
document.getElementById("todo-list").addEventListener("click", function (e) {
	// 동적으로 생성된 요소들에 대한 이벤트 처리
});
```

### 로컬 스토리지 관리

```javascript
function updateTodo() {
	localStorage.setItem("todo", JSON.stringify(list));
}

function initTodo() {
	const todo = localStorage.getItem("todo");
	if (todo) {
		list = JSON.parse(todo);
		renderTodoItem();
	}
}
```

### XSS 방지

```javascript
const value = DOMPurify.sanitize(inputField.value);
```

## 🎓 학습 포인트

이 단계를 통해 다음을 체험할 수 있습니다:

1. **DOM 조작의 복잡성**: 직접적인 DOM 조작의 번거로움
2. **상태 관리의 어려움**: 전역 변수와 수동 동기화
3. **이벤트 처리의 복잡성**: 이벤트 위임 패턴의 필요성
4. **보안 고려사항**: XSS 방지의 중요성
