// login function
function loginToggle() {
    let loginForm = document.getElementById("loginForm");
    let registerForm = document.getElementById("registerForm");
    let divMove = document.getElementById("divMove");
    loginForm.style.left = "50px";
    registerForm.style.left = "450px";
    divMove.style.left = "0";
  }
  
  // register function
  function registerToggle() {
    let loginForm = document.getElementById("loginForm");
    let registerForm = document.getElementById("registerForm");
    let divMove = document.getElementById("divMove");
    loginForm.style.left = "-400px";
    registerForm.style.left = "50px";
    divMove.style.left = "110px";
  }
  
  // get user information then store in json server
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let firstName = document.getElementById("registerForm").elements[0].value;
    let lastName = document.getElementById("registerForm").elements[1].value;
    let email = document.getElementById("registerForm").elements[2].value;
    let password = document.getElementById("registerForm").elements[3].value;
    let address = document.getElementById("registerForm").elements[4].value;
    let agree = document.getElementById("registerForm").elements[5].value;
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        userName: `${firstName} ${lastName}`,
        email: email,
        password: password,
        address: address,
        agree: agree,
      }),
    });
  });
  
  // Terms And Conditions Start
  const termAndConditions = document.getElementById("termAndConditions");
  const close = document.querySelector(".close");
  
  function showTerm() {
    termAndConditions.style.display = "block";
  }
  
  function hideTerm() {
    termAndConditions.style.display = "none";
  }
  
  close.addEventListener("click", (e) => {
    e.preventDefault();
    hideTerm();
  });
  // Terms And Conditions End
