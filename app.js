const form  = document.getElementById("form");
const username  = document.getElementById("username");
const password  = document.getElementById("password");
const email  = document.getElementById("email");
const password2  = document.getElementById("password2");

console.log(username)

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    const usernameValue =username.value.trim();
    const emailValue =email.value.trim();
    const passwordValue =password.value.trim();
    const password2Value =password2.value.trim();

    if(usernameValue === ""){
        setErrorFor(username,"Username cannot be blank")
    }else{
        setSuccessFor(username)
    }
    if(emailValue === ""){
        setErrorFor(email,"Email cannot be blank")
    }else{
        setSuccessFor(email)
    }
    if(passwordValue === ""){
        setErrorFor(password,"Password cannot be blank")
    }else{
        setSuccessFor(password)
    }
    if(password2Value === ""){
        setErrorFor(password2,"Password2 cannot be blank")
    }else{
        setSuccessFor(password2)
    }
}

function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");  
    //add error message inside small
    small.innerText = message ;

    //add error class
    formControl.className ="form-control error"
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

