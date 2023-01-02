let add_btn = document.getElementById("add-btn");
let todolist = document.getElementById("todo-list");

let todotask = document.getElementById("todo-task");

let todoArray = JSON.parse(localStorage.getItem("todo")) || [];

let clear_todo = document.querySelector(".clear-todo");

add_btn.addEventListener("click", () => {
  todoArray.push(todotask.value);
  localStorage.setItem("todo", JSON.stringify(todoArray));
  console.log(todoArray);
  getTodo();
  todotask.value = "";
});

let uniqueValues = [];
let listValues = [];

//  CLEAR TODO BUTTON

clear_todo.addEventListener("click", () => {
  localStorage.clear();
  todolist.innerText = "";
});

// DELETE BUTTON
let delete_btn = document.createElement("button");
delete_btn.innerText = "Delete";
delete_btn.className = "secondary todo-delete";
delete_btn.addEventListener("click", deleteTodo);


if (todoArray) {

    //LOAD TODO FROM LOCAL STORAGE ON PAGE LOAD
  function loadTodo() {
    let delete_btn = document.createElement("button");
    delete_btn.innerText = "Delete";
    delete_btn.className = "secondary todo-delete";
    delete_btn.addEventListener("click", deleteTodo);
    todoArray.forEach((element) => {
      let li = document.createElement("li");
      li.innerText = element;
      li.appendChild(delete_btn);
      todolist.appendChild(li);
    });
  }

  // GET TODO FROM LOCAL STORAGE ON ADD BUTTON CLICK
  function getTodo() {

    let delete_btn = document.createElement("button");
    delete_btn.innerText = "Delete";
    delete_btn.className = "secondary todo-delete";
    delete_btn.addEventListener("click", deleteTodo);

    listValues.push(todoArray.slice(-1));

    listValues.forEach((element) => {
      let li = document.createElement("li");
      li.innerText = element;
      li.appendChild(delete_btn);
      todolist.appendChild(li);
    });
    listValues = [];
  }
}

function deleteTodo() {
  let li = event.target.parentElement;
  todolist.removeChild(li);
  let index = todoArray.indexOf(li.innerText);
  todoArray.splice(index, 1);
  localStorage.setItem("todo", JSON.stringify(todoArray));
  console.log(todoArray);
}