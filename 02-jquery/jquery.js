let list = [];

function updateTodo() {
	localStorage.setItem("jquery-todo", JSON.stringify(list));
}

function addTodo(e) {
	e.preventDefault();
	const inputField = $("#add-todo-input");

	const value = DOMPurify.sanitize(inputField.val());
	const createdAt = new Date().toJSON();
	const id = list.length ? list.at(-1).id + 1 : 0;

	list.push({ id, createdAt, value, complete: false });
	inputField.val("");

	updateTodo();
	renderTodoItem();
}

function initTodo() {
	const todo = localStorage.getItem("jquery-todo");

	if (todo) {
		list = JSON.parse(todo);
		renderTodoItem();
	}
}

function renderTodoItem() {
	$("#todo-list").html(
		list.map(
			(item) =>
				`<li class='todo-item'>${item.value} <button class='todo-delete' data-id=${item.id}>삭제</button><button class='todo-complete' data-id=${
					item.id
				}>${item.complete ? "✔️" : "✖️"}</button></li>`,
		),
	);

	$("#todo-complete").html(
		`<span class='primary'>완료: ${list.filter((item) => item.complete).length}개</span> <span class='text'>미완료: ${
			list.filter((item) => !item.complete).length
		}개</span>`,
	);
}

function updateTodoList(e) {
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
}

$("#todo-list").on("click", updateTodoList);
$(document).on("DOMContentLoaded", initTodo);
$("#add-todo").on("submit", addTodo);
