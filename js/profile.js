// document.getElementById('edit-button').addEventListener('click', function () {
//     document.getElementById('username').style.display = 'none';
//     document.getElementById('edit-username').style.display = 'block';
// });


    let namebutton = document.querySelector(".btn2.editname");
    let emailbutton = document.querySelector(".editemail");
    let addresbutton = document.querySelector(".editaddres");

    namebutton.addEventListener("click", () =>{
        document.querySelector(".usernameinput").setAttribute("contenteditable", "true");
    });

    emailbutton.addEventListener("click", () =>{
        document.querySelector(".emailinput").setAttribute("contenteditable", "true");
    });

    addresbutton.addEventListener("click", () =>{
        document.querySelector(".useraddres").setAttribute("contenteditable", "true");
    });

    let confirm = document.querySelector("#confirm");
    confirm.addEventListener("click", () =>{
        let newname = document.querySelector(".usernameinput").textContent;
        let newemail = document.querySelector(".emailinput").textContent;
        let newadd = document.querySelector(".useraddres").textContent;
        fetch(`http://localhost:3000/users/2`, {
            headers: {"Content-type": "application/json; charset=UTF-8"},
                // Adding method type
                method: "PUT",
                // Adding body or contents to send
                body: JSON.stringify({
                        "firstName": "ayoub",
                        "lastName": "Husein",
                        "userName": `${newname}`,
                        "email": `${newemail}`,
                        "password": "123456",
                        "address": `${newadd}`,
                        "agree": "on",
                }),
        })
        .catch(error => console.log("error with fetch 1"));
    })

    addEventListener("DOMContentLoaded", () =>{
        fetch(`http://localhost:3000/users/2`)
        .then(response => response.json())
        .then(data => {
            document.querySelector(".usernameinput").innerHTML = `${data.userName}`;
            document.querySelector(".emailinput").innerHTML = `${data.email}`;
            document.querySelector(".useraddres").innerHTML = `${data.address}`;
        })
        .catch(error => console.log("error with fetch 2"));
    })



//   const userString = sessionStorage.getItem('user-info');
//   const user = JSON.parse(userString);
//   let div= document.getElementById("userinfo");
//   fetch("http://localhost:3000/users")
//   .then((response) => response.json())
//   .then((data) => {
//     data.map((users) => {
//        if(users.firstName == user ){
//         let usernamecon = document.createElement("div");
//         slide.classList.add('info-container');
//       div.innerHTML = `
//           <p>${users.firstName}</p>
//           <p>${users.email}</p>
//        `;
//       div.appendChild(usernamecon);
//        }

//     })
   
    
//   });
//   fetch(`http://localhost:3000/users/${id}`, {
//     method: 'put',
//     headers : {
//         "Content-Type": "application/json",
//     },
//     body: json.stringify({content:updatedata}),
// })
// .then((response) => {

// })
// .catch((error) => console.error('Error deleting post:', error));
 