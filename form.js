

let first = document.querySelector(".first");
let last = document.querySelector(".last");
let emailin = document.querySelector(".emailin");
let password = document.querySelector(".pwd");
let cpassword = document.querySelector(".cpwd");


let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let error3 = document.getElementById("error3");
let error4 = document.getElementById("error4");

first.addEventListener("keyup", error1msg);
function error1msg() {
    if (!/^[a-zA-Z]*$/.test(first.value.trim())) {
        error1.innerHTML = "*Name must contain only characters";
        return false;
    } else {
        error1.innerHTML = "";
        return true;
    }
}
last.addEventListener("keyup", error5msg);
function error5msg() {
    if (!/^[a-zA-Z]*$/.test(last.value.trim())) {
        error5.innerHTML = "*Name must contain only characters";
        return false;
    } else {
        error5.innerHTML = "";
        return true;
    }
}

emailin.addEventListener("keyup", error2msg);
function error2msg() {
    if (!emailin.value.match(/^[A-Za-z\ _\-0-9]+@[A-Za-z]+\.[A-Za-z]{2,4}$/)) {
        error2.innerHTML = "*Please Enter a Valid Email Address";
        return false;
    } else {
        error2.innerHTML = "";
        return true;
    }
}

password.addEventListener("keyup", error3msg);
function error3msg() {
    if (password.value.trim().length === 0) {
        error3.innerHTML = "*Password is Required";
        return false;
    } else if (password.value.trim().length > 8) {
        error3.innerHTML = "*Password must not exceed 8 characters";
        return false;
    } else if (!/[A-Z]/.test(password.value.trim())) {
        error3.innerHTML = "*Password must contain at least one uppercase character";
        return false;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password.value.trim())) {
        error3.innerHTML = "*Password must contain at least one special character";
        return false;
    } else {
        error3.innerHTML = "";
        return true;
    }
}


cpassword.addEventListener("keyup", error4msg);
function error4msg() {
    if (cpassword.value.trim() === "") {
        error4.innerHTML = "*Confirm Password is Required";
        return false;
    } else if (cpassword.value.trim() !== password.value.trim()) {
        error4.innerHTML = "*Passwords do not match";
        return false;
    } else {
        error4.innerHTML = "";
        return true;
    }
}



