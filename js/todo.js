const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "key_todos";

let toDos = [];


// 새로 입력된 todo를 local storage에 저장
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));   // array 전체를 string 형태로 저장
}

// html에서 todo 삭제
function deleteToDo(event){
    const li = event.target.parentNode;                 // target element의 parent 정보
    li.remove();

    // toDos array의 item과 삭제한 li의 id 비교, 동일하면 array에서 필터링
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); 
    saveToDos();
}

// 입력받은 todo를 html에 띄우기
function paintToDo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

// todo 입력
function handleToDoSubmit(event){
    event.preventDefault()
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

 
// local storage에 이미 저장되어 있던 todo를 load
const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);     // string을 JS 값, 객체로 변환
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); // array의 각 item에 대해 function 실행 (매개변수 순차적으로 넣어줌)
}

