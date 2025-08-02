# 02-jquery - jQuery TODO 리스트

## 🚀 실행 방법

### 방법 1: Node.js 사용

```bash
# 02-jquery 폴더에서
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
-   ✅ jQuery를 통한 간편한 DOM 조작

## 💭 개발자 느낀점

### jQuery의 편리함

-   바닐라 JavaScript에 비해 코드가 더 깔끔해짐
-   DOM 선택자와 조작이 더 직관적이고 간단해짐

### 여전히 남아있는 한계

-   바닐라 JavaScript와 비슷한 구조를 유지
-   DOM 조작이 좀 더 수월해진 것 외에는 큰 차이점을 느끼지 못함
-   상태 관리의 어려움은 여전히 존재
-   전체 리렌더링 방식은 동일하게 유지

### 프로젝트 특성상 제한된 jQuery 활용

-   TODO 리스트가 너무 간단하여 jQuery의 강력한 기능들을 활용하지 못함
-   애니메이션이나 복잡한 DOM 조작이 없어서 jQuery의 장점을 충분히 체험하지 못함
-   간단한 프로젝트에서는 바닐라 JavaScript와의 차이가 크지 않음

### 개발 경험

-   바닐라 JavaScript에서 jQuery로 전환 시 코드가 더 읽기 쉬워짐
-   하지만 근본적인 문제들(DOM 조작의 복잡성, 상태 관리 등)은 여전히 존재
-   jQuery는 DOM 조작의 편의성을 제공하지만, 구조적 문제는 해결하지 못함

## 🏗️ 프로젝트 구조

```
02-jquery/
├── index.html          # 메인 HTML 파일
├── global.css          # 스타일시트
├── jquery.js           # jQuery 로직
└── README.md          # 이 파일
```

## 🔧 사용된 기술

-   **HTML5**: 시맨틱 마크업
-   **CSS3**: 모던 스타일링
-   **jQuery**: DOM 조작 및 이벤트 처리
-   **DOMPurify**: XSS 방지
-   **localStorage**: 데이터 영속성

## 📝 주요 코드 설명

### jQuery DOM 선택자

```javascript
$("#todo-list").on("click", ".todo-delete", function () {
	// jQuery를 통한 간편한 이벤트 위임
});
```

### jQuery DOM 조작

```javascript
$("#todo-list").html(todoItems); // innerHTML 대신 jQuery 메서드 사용
$("#add-todo-input").val(""); // value 속성 조작
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

## 🎓 학습 포인트

이 단계를 통해 다음을 체험할 수 있습니다:

1. **jQuery의 편리함**: DOM 조작의 간소화
2. **여전한 한계**: 상태 관리와 구조적 문제는 해결되지 않음
3. **제한된 활용도**: 간단한 프로젝트에서는 큰 차이를 느끼기 어려움
