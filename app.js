


const form = document.querySelector("#todoAddForm");
const todo_input = document.querySelector("#todoName");
const listGroup = document.querySelector(".list-group");
const cardBody = document.querySelectorAll(".card-body")[0];
const cardBody1 = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clearButton");


let todos=[];

//-------------------------------------------------------------
//bu nedeey olur program ise kecen kimi isleyecek 
//codlar funksiyalrdir.
run();

function run(){
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",list_get);
    clear.addEventListener("click",ClearTodo);
}
//--------------------------------------------------------------


//-------------------------------------------------------------
//todo elave edirik burda.
function addTodo(e){
    const textInput = todo_input.value.trim();
    if(textInput==null || textInput==""){
        AllertShow("danger","Ad hissesini bos buraxmayin zehemt olmasa:");
    }
    else{
        addTodoToUi(textInput);
        addTodoStorge(textInput);
        AllertShow("success","Todo yuklendi");
    }
    e.preventDefault();
}

//bu todo elave edir.
function addTodoToUi(newTodo){
    const li = document.createElement("li");
    li.className="list-group-item d-flex justify-content-between";
    li.textContent=newTodo;

    const a =document.createElement("a");
    a.href = "#";
    a.className = "delete-item";
    
    const i = document.createElement("i");

    a.appendChild(i);
    li.appendChild(a);
    listGroup.appendChild(li);

    todo_input.value="";
}
//-------------------------------------------------------------

//bu stroge'e todo elave edir.-------------------------------
function addTodoStorge(newTodo){
    ChenageaddTodoStroge();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos))
}

//bu ise stroge elavae etmezden evvel bir todo olub olmamasini yoxlayir.
function ChenageaddTodoStroge(){
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}
//-------------------------------------------------------------


//-------------------------------------------------------------
//bu bir todo yaradib yukluende onun yaranib ya yranmadigini
//gosteren bir functiondur.
function AllertShow(type,message) {
    let div = document.createElement("div");
    div.className = "alert alert-"+type;
    div.textContent = message;

    cardBody.appendChild(div);

    setTimeout(function(){
        div.remove();
    },2500);

}
//-------------------------------------------------------------


//-------------------------------------------------------------
//bu stroge'de olan todlari sehfe yenilenede bee keranda yeni 
// ui'da gorsenmesini sagliyir.
function list_get(){
    ChenageaddTodoStroge();
    todos.forEach(function(todo){
        addTodoToUi(todo);
    })
}
//-------------------------------------------------------------------------


//-------------------------------------------------------------
//burda butun todlari hem ui'dan hemde strogden sildik.
function ClearTodo(){
    let todoList = document.querySelectorAll(".list-group-item");
    if(todoList.length > 0){
        todoList.forEach(function(removTodo){
            removTodo.remove();
        });
        localStorage.clear();
        AllertShow("success","Butun Todolar silindi.");
    }
    else{
        AllertShow("warning","Qeyd'de olan bir todo yoxdur.")
    }
    
}
//-------------------------------------------------------------