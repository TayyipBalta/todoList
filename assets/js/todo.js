const btns = document.querySelectorAll(".deleteBtn");
const addBtn = document.querySelector(".addBtn");
const todoList = document.querySelector("#todoList");
const todoText = document.querySelector(".todoText");
let count = 0;
btns.forEach((btn) =>
{
    btn.addEventListener("click" , deleteTodo);
});

function deleteTodo()
{
    this.parentElement.remove();
    count--;
}



addBtn.addEventListener("click" , addTodo);


function addTodo() 
{
    if(todoText.value === "")
    {
        console.warn("bos olamaz");
        return;
    }
    count++;
    const todo = document.createElement("li");
    todo.textContent = count + "-" + todoText.value + " ";
    const btn = document.createElement("button");
    btn.classList.add("deleteBtn");
    btn.textContent = "❌";
    btn.addEventListener("click" , deleteTodo);
    todo.appendChild(btn);
    todoList.appendChild(todo);
}