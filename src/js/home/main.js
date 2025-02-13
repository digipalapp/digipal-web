let loginButton = document.querySelector("#loginButton")
let studentButton = document.querySelector("#studentLogin")
let teacherButton = document.querySelector("#teacherLogin")

teacherButton.addEventListener("click", function onClick (){
    window.location="login/teacher"
})
studentButton.addEventListener("click", function onClick(){
    window.location="login/student"
})
loginButton.addEventListener("click", function onClick (){
    window.location="login"
})