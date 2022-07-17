let fullname = document.querySelector('#fullname');
let email = document.querySelector('#email');
let username = document.querySelector('#username');
let password = document.querySelector('#password');
let submit = document.querySelector('#signup');
let message = document.querySelector('#message');
if (window.localStorage) {
    submit.addEventListener("click", () => {
        if (username != "" || password != "" || fullname != "" || email != "") {
            localStorage.setItem("fullname", fullname);
            localStorage.setItem("email", email);
            localStorage.setItem("user", username);
            localStorage.setItem("pass", password);
            window.location.replace("signin.html");
            return false;
        } else {
            alert("Please fill all fields");
        }
    })
} else {
    console.log("not supported");
}