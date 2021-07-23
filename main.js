// selectors 

const formEl = document.querySelector(".form");
const todos = document.querySelector(".todos");
const inputEl = document.querySelector(".todo-input");
const filterOptions = document.querySelector(".filter-options");

// event listener 

formEl.addEventListener("submit", addTodo);
todos.addEventListener("click",handleTodosClick)
filterOptions.addEventListener("change", filterTodo)

// functions 

// Add new Todo

function addTodo (event){
    event.preventDefault();

    if(inputEl.value){

    // create Div element
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create Li
    const todoText = document.createElement("li");
    todoText.classList.add("todo-text");
    todoText.innerText= inputEl.value;
    todoDiv.appendChild(todoText);

    // Create completeBtn Button
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn")
    completeBtn.innerHTML= '<i class="fas fa-check"></i>';
    todoDiv.appendChild(completeBtn);
    
    // Create Trash Button
    const trashBtn = document.createElement("button");
    trashBtn.classList.add("trash-btn")
    trashBtn.innerHTML= '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(trashBtn)

    // Add New Tod to Todos list
    todos.appendChild(todoDiv)

    // Reset Input Value
    inputEl.value = ""
    }
    
}

// Delete and Mark as completed

function handleTodosClick (event){
    const target = event.target;
    
    // add line through for complete 
    if (target.classList.contains("complete-btn")){
        target.parentElement.classList.toggle("completed");
    // delete todo element 
    } else if(target.classList.contains("trash-btn")){
        target.parentElement.classList.add("fall");
        target.parentElement.addEventListener("transitionend", ()=>{
        target.parentElement.remove();
        });
        
    }
}


// filter Todos

function filterTodo(event){

    const selection = event.target.value;
    const todoItems= todos.childNodes;
    
    todoItems.forEach(function (todo) {
        switch (selection){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
        }
    })
}