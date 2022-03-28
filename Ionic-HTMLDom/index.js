let addInput, addButton, listTodo;

const data = [
	{ id: 1, content: "Di choi", isChecked: false },
	{ id: 2, content: "Di hoc", isChecked: true },
];

window.onload = () => {
	addInput = document.querySelector("#addInput");
	addButton = document.querySelector("#addBtn");
	listTodo = document.querySelector("#listTodo");

	listTodo.addEventListener("click", onDeleteToDo);
	addButton.addEventListener("click", onAddToDo);
	renderList(data);
};

function onAddToDo() {
	if (!addInput.value) {
		return;
	}
	const newInput = {
		id: data.length + 1,
		content: addInput.value,
		isChecked: false,
	};
	data.push(newInput);
	addInput.value = "";
	renderList(data);
}

function onChecked(id) {
	const findById = data.find((item) => {
		return item.id === id;
	});
	findById.isChecked = !findById.isChecked;
}

function onDeleteToDo(e) {
	const id = parseInt(e.target.id);
	const findById = data.find((item) => {
		return item === id;
	});
	if (id) {
		data.splice(data.indexOf(findById), 1);
	}
	renderList(data);
}

function renderList(list) {
	const newList = list
		.map((item) => {
			return `	<ion-item id="itemId">
                            <ion-checkbox color="dark" onclick=onChecked(${
							item.id
						}); checked="${item.isChecked}"></ion-checkbox>
                            <ion-label style=${
							item.isChecked
								? "text-decoration:line-through"
								: "text-decoration:none"
						}>${item.content}</ion-label>
                            <ion-button color="dark" id="${
							item.id
						}">X</ion-button>
			            </ion-item>`;
		})
		.join("");
	listTodo.innerHTML = newList;
}
