let list = [];

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

function addTodo(e) {
	e.preventDefault();
	const inputField = document.getElementById("add-todo-input");

	const value = DOMPurify.sanitize(inputField.value);
	const createdAt = new Date().toJSON();
	const id = list.length ? list.at(-1).id + 1 : 0;

	list.push({ id, createdAt, value, complete: false });
	inputField.value = "";

	renderTodoItem();
	updateTodo();
}

function renderTodoItem() {
	document.getElementById("todo-list").innerHTML = list.map(
		(item) =>
			`<li class='todo-item'>${item.value} <button class='todo-delete' data-id=${item.id}>삭제</button><button class='todo-complete' data-id=${item.id}>${
				item.complete ? "✔️" : "✖️"
			}</button></li>`,
	);
	document.getElementById("todo-complete").innerHTML = `<span class='primary'>완료: ${
		list.filter((item) => item.complete).length
	}개</span> <span class='text'>미완료: ${list.filter((item) => !item.complete).length}개</span>`;
}

// 이벤트 위임을 사용한 삭제 및 완료 처리
document.getElementById("todo-list").addEventListener("click", function (e) {
	const itemId = Number(e.target.getAttribute("data-id"));

	// 삭제 버튼 클릭 시
	if (e.target.classList.contains("todo-delete")) {
		list = list.filter((item) => item.id !== itemId);
		renderTodoItem();
		updateTodo();
	}

	// 완료 버튼 클릭 시
	if (e.target.classList.contains("todo-complete")) {
		const item = list.find((item) => item.id === itemId);
		if (item) {
			item.complete = !item.complete;
			renderTodoItem();
			updateTodo();
		}
	}
});

// 폼 제출 이벤트 리스너

document.addEventListener("DOMContentLoaded", initTodo);
document.getElementById("add-todo").addEventListener("submit", addTodo, false);
