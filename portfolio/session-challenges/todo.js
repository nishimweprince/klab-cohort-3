let add_btn = document.getElementById("add-btn");
let todolist = document.getElementById("todo-list");

let todotask = document.getElementById("todo-task");

let todoArray = JSON.parse(localStorage.getItem("todo")) || [];

add_btn.addEventListener("click", () => {
  todoArray.push(todotask.value);
  localStorage.setItem("todo", JSON.stringify(todoArray));
  console.log(todoArray);
  getTodo();
  todotask.value = "";
});

let uniqueValues = [];
let listValues = [];

// DELETE BUTTON
let delete_btn = document.createElement("button");
delete_btn.innerText = "Delete";
delete_btn.className = "btn btn-danger";
delete_btn.addEventListener("click", deleteTodo);


if (todoArray) {

    //LOAD TODO FROM LOCAL STORAGE ON PAGE LOAD
  function loadTodo() {
    todoArray.forEach((element) => {
      let li = document.createElement("li");
      li.innerText = element;
      li.appendChild(delete_btn);
      todolist.appendChild(li);
    });
  }

  // GET TODO FROM LOCAL STORAGE ON ADD BUTTON CLICK
  function getTodo() {
    listValues.push(todoArray.slice(-1));

    let delete_btn = document.createElement("button");
    delete_btn.innerText = "Delete";
    delete_btn.className = "btn btn-danger";
    delete_btn.addEventListener("click", deleteTodo);

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