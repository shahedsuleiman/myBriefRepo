let username = document.querySelector("usernameinput");
let useremail = document.querySelector("emailinput");
let useraddres = document.querySelector("useraddres");


fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(data => {
        data.map((x) => {
            // ---------------------------from json
        })
    })

username.innerHTML = `${window.sessionStorage.getItem()}`;
useremail.innerHTML = `${window.sessionStorage.getItem()}`;
useraddres.innerHTML = `${window.sessionStorage.getItem()}`;