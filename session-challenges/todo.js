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

if (todoArray) {

    function loadTodo() {
        todoArray.forEach((element) => {
            let li = document.createElement("li");
            li.innerText = element;
            todolist.appendChild(li);
        });
    }

    function getTodo(){

        listValues.push(todoArray.slice(-1));
        if (todoArray) {
            listValues.forEach((element) => {
                let li = document.createElement("li");
                li.innerText = element;
                todolist.appendChild(li);
            });
        }
        listValues = [];
    }

}