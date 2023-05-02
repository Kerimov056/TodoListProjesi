
//              1-ci is

//   Burada todo daxil etdik ve yaranan todo gedib hem local stroge dusdu 
//   hemde on yuzde gorsendi.


// const form = document.querySelector("#todoAddForm");
// const todo_input = document.querySelector("#todoName");
// const listGroup = document.querySelector(".list-group");

// let todos=[];

// run();

// function run(){
//     form.addEventListener("submit",addTodo);
// }

// function addTodo(e){
//     const textInput = todo_input.value.trim();
//     if(textInput==null || textInput==""){
//         alert("Eroor");
//     }
//     else{
//         addTodoToUi(textInput);
//         addTodoStorge(textInput);
//     }
//     e.preventDefault();
// }

// function addTodoToUi(newTodo){
//     const li = document.createElement("li");
//     li.className="list-group-item d-flex justify-content-between";
//     li.textContent=newTodo;

//     const a =document.createElement("a");
//     a.href = "#";
//     a.className = "delete-item";
    
//     const i = document.createElement("i");

//     a.appendChild(i);
//     li.appendChild(a);
//     listGroup.appendChild(li);

//     todo_input.value="";
// }

// function addTodoStorge(newTodo){
//     ChenageaddTodoStroge();
//     todos.push(newTodo);
//     localStorage.setItem("todos",JSON.stringify(todos))
// }

// function ChenageaddTodoStroge(){
//     if(localStorage.getItem("todos")===null){
//         todos=[];
//     }
//     else{
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }
// }
//-------------------------------------------------------------------------

