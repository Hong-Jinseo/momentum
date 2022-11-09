const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAM = "hidden";
const USERNAME_KEY = "key_username";


function onLoginSubmit(event){
    event.preventDefault();         // 브라우저의 기본 동작을 막아줌 (여기서는 새로고침을 막기 위함)
    loginForm.classList.add(HIDDEN_CLASSNAM);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGrettings(username);
}


function paintGrettings(username){
    greeting.innerText = `Hello ${username}!`;          // greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAM);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAM);
    loginForm.addEventListener("submit", onLoginSubmit);    // submit 발생조건 : 엔터, 버튼 클릭

}else{
    // show the greeting
    paintGrettings(savedUsername);
}