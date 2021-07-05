// selectors 

const formEl = document.querySelector(".form");
const todosEl = document.querySelector(".todos");
const inputEl = document.querySelector(".todo-input");

// event listener 

formEl.addEventListener("submit", addTodo);
todosEl.addEventListener("click",handleTodosClick)


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
    todosEl.appendChild(todoDiv)

    // Reset Input Value
    inputEl.value = ""
    }
    
}

// Delete or mark as complete 

function handleTodosClick (event){
    const target = event.target;
    
    // add line through for complete 
    if (target.classList.contains("complete-btn")){
        target.parentElement.classList.toggle("complete");
    // delete todo element 
    } else if(target.classList.contains("trash-btn")){
        target.parentElement.remove();
    }
}