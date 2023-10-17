    document.addEventListener("DOMContentLoaded", () =>{
    let urlParams = new URLSearchParams(window.location.search);
    let bookId = urlParams.get('booksid');
    console.log(bookId);
    let section = document.querySelector(".books");
    fetch("http://localhost:3000/books")
    .then(response => response.json())
    .then(data => {
        data.map((data) => {
           
            if (data.type == bookId){
                let description = data.long_description.substring(0,150);
                description = description + "...";
                let book = document.createElement("div");
                book.innerHTML = `
                <div id="container">	
                    <div class="product-details">
                        <h1>${data.title}</h1>
                        <hr>
                        <p class="information">${description}</p>
                        <div class="control">
                            <button class="btn">
                            <span class="buy" id = "${data.id}";><a href="/html/details.html?id=${data.id}">view</a></span>
                            </button>
                            </a>
                        </div>
                    </div>
                    <div class="product-image">
                        <img src="${data.img}" alt="pic of the book">
                        <div class="info">
                            <h2>About the book</h2>
                            <ul>
                                <li><strong>Author: </strong>${data.author}</li>
                                <li><strong>year: </strong>${data.year}</li>
                                <li><strong>pages: </strong>${data.pages}</li>
                                <li><strong>rating: </strong>${data.rating}</li>
                            </ul>
                        </div>
                    </div>
                </div>`;
                section.appendChild(book);
            }else if (data.type == bookId){
                let description = data.long_description.substring(0,150);
                description = description + "...";
                let book = document.createElement("div");
                book.innerHTML = `
                <div id="container">	
                    <div class="product-details">
                        <h1>${data.title}</h1>
                        <hr>
                        <p class="information">${description}</p>
                        <div class="control">
                            <button class="btn">
                            <span class="buy" id = "${data.id}";><a href="/html/details.html?id=${data.id}">view</a></span>
                            </button>
                            </a>
                        </div>
                    </div>
                    <div class="product-image">
                        <img src="${data.img}" alt="pic of the book">
                        <div class="info">
                            <h2>About the book</h2>
                            <ul>
                                <li><strong>Author: </strong>${data.author}</li>
                                <li><strong>year: </strong>${data.year}</li>
                                <li><strong>pages: </strong>${data.pages}</li>
                                <li><strong>rating: </strong>${data.rating}</li>
                            </ul>
                        </div>
                    </div>
                </div>`;
                section.appendChild(book);
            }else if (data.type == bookId){
                let description = data.long_description.substring(0,150);
                description = description + "...";
                let book = document.createElement("div");
                book.innerHTML = `
                <div id="container">	
                    <div class="product-details">
                        <h1>${data.title}</h1>
                        <hr>
                        <p class="information">${description}</p>
                        <div class="control">
                            <button class="btn">
                            <span class="buy" id = "${data.id}";><a href="/html/details.html?id=${data.id}">view</a></span>
                            </button>
                            </a>
                        </div>
                    </div>
                    <div class="product-image">
                        <img src="${data.img}" alt="pic of the book">
                        <div class="info">
                            <h2>About the book</h2>
                            <ul>
                                <li><strong>Author: </strong>${data.author}</li>
                                <li><strong>year: </strong>${data.year}</li>
                                <li><strong>pages: </strong>${data.pages}</li>
                                <li><strong>rating: </strong>${data.rating}</li>
                            </ul>
                        </div>
                    </div>
                </div>`;
                section.appendChild(book);
            }else if (data.type == bookId){
                let description = data.long_description.substring(0,150);
                description = description + "...";
                let book = document.createElement("div");
                book.innerHTML = `
                <div id="container">	
                    <div class="product-details">
                        <h1>${data.title}</h1>
                        <hr>
                        <p class="information">${description}</p>
                        <div class="control">
                            <button class="btn">
                            <span class="buy" id = "${data.id}";><a href="/html/details.html?id=${data.id}">view</a></span>
                            </button>
                            </a>
                        </div>
                    </div>
                    <div class="product-image">
                        <img src="${data.img}" alt="pic of the book">
                        <div class="info">
                            <h2>About the book</h2>
                            <ul>
                                <li><strong>Author: </strong>${data.author}</li>
                                <li><strong>year: </strong>${data.year}</li>
                                <li><strong>pages: </strong>${data.pages}</li>
                                <li><strong>rating: </strong>${data.rating}</li>
                            </ul>
                        </div>
                    </div>
                </div>`;
                section.appendChild(book);
            }
        })
    })
    .catch(error => console.log("there is an error in fetch the books.js"))
});