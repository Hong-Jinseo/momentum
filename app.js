const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAM = "hidden";

function onLoginSubmit(event){
    event.preventDefault();         // 브라우저의 기본 동작을 막아줌 (여기서는 새로고침을 막기 위함)
    loginForm.classList.add(HIDDEN_CLASSNAM);

    const username = loginInput.value;
    greeting.innerText = `Hello ${username}!`;          // greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAM);
}


// Listener 안의 function은 내가 아닌 브라우저가 실행하는 것
loginForm.addEventListener("submit", onLoginSubmit);    // submit 발생조건 : 엔터, 버튼 클릭