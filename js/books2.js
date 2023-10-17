fetch("http://localhost:3000/books")
    .then((response) => response.json())
    .then((data) => {
        const bookList = document.getElementById("bookList");

        const scienceBooks = data.filter(item => item.type === "Science");
        try {
        scienceBooks.forEach((book,x) => {

            if (x == 4) {
               throw BreakError;

             }
            const card = document.createElement("div");
            card.className = "card";
            // ----------------------------------------------------->
            card.setAttribute(`onclick`,`takeme(${book.id})`);
            card.id = `${book.id}`;

            const image = document.createElement("img");
            image.src = `${book.img}`;
            image.style.width = "296px" ;
            image.style.height = "398px" ;

            const title = document.createElement("h2");
            title.textContent = book.title;

            const description = document.createElement("p");
            // let des = book.long_description.slice(0,40);----------------------------->
            // card.setAttribute(`onclick`,`takeme()`);
            description.textContent = book.long_description;

            // const author = document.createElement("p");
            // author.textContent = "Author: " + book.author;

            // const year = document.createElement("p");
            // year.textContent = "Year: " + book.year;

            // const pages = document.createElement("p");
            // pages.textContent = "Pages: " + book.pages;

            // const rating = document.createElement("p");
            // rating.textContent = "Rating: " + book.rating;

            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(description);
            // card.appendChild(author);
            // card.appendChild(year);
            // card.appendChild(pages);
            // card.appendChild(rating);

            bookList.appendChild(card);
        })}
        
        catch(error){
            console.log("hhhhhhh");
        }
       
    })
    .catch((error) => {
        console.error("Error fetching data: " + error);
    });

    fetch("http://localhost:3000/books")
    .then((response) => response.json())
    .then((data) => {
        const bookList = document.querySelector(".History")

        const scienceBooks = data.filter(item => item.type === "History");

        try {
            scienceBooks.forEach((book,x) => {
                
                if (x == 4) {
                    throw BreakError;
    
                }
                // Create a card for each book and fill it with data
                const card = document.createElement("div");
                card.className = "card";
                card.id = `${book.id}`;
                // ----------------------------------------------------->
                card.setAttribute(`onclick`,`takeme(${book.id})`);
    
                const image = document.createElement("img");
                image.src = `${book.img}`;
                image.style.width = "296px" ;
                image.style.height = "398px" ;
    
                const title = document.createElement("h2");
                title.textContent = book.title;
    
                const description = document.createElement("p");
                description.textContent = book.long_description;
    
                // const author = document.createElement("p");
                // author.textContent = "Author: " + book.author;
    
                // const year = document.createElement("p");
                // year.textContent = "Year: " + book.year;
    
                // const pages = document.createElement("p");
                // pages.textContent = "Pages: " + book.pages;
    
                // const rating = document.createElement("p");
                // rating.textContent = "Rating: " + book.rating;
    
                card.appendChild(image);
                card.appendChild(title);
                card.appendChild(description);
                // card.appendChild(author);
                // card.appendChild(year);
                // card.appendChild(pages);
                // card.appendChild(rating);
    
                bookList.appendChild(card);
            })}
            
            catch(error){
                console.log("hhhhhhh")
            }
           
        })
        .catch((error) => {
            console.error("Error fetching data: " + error);
        });



    fetch("http://localhost:3000/books")
    .then((response) => response.json())
    .then((data) => {
        const bookList = document.querySelector(".Economic")

        const scienceBooks = data.filter(item => item.type === "Economic");

        try {
            scienceBooks.forEach((book,x) => {
                
                if (x == 4) {
                    throw BreakError;
    
                }
                const card = document.createElement("div");
                card.className = "card";
                card.id = `${book.id}`;
                // ------------------------------------------------------>
                card.setAttribute(`onclick`,`takeme(${book.id})`);
    
                const image = document.createElement("img");
                image.src = `${book.img}`;
                image.style.width = "296px" ;
                image.style.height = "398px" ;
    
                const title = document.createElement("h2");
                title.textContent = book.title;
    
                const description = document.createElement("p");
                description.textContent = book.long_description;
    
                // const author = document.createElement("p");
                // author.textContent = "Author: " + book.author;
    
                // const year = document.createElement("p");
                // year.textContent = "Year: " + book.year;
    
                // const pages = document.createElement("p");
                // pages.textContent = "Pages: " + book.pages;
    
                // const rating = document.createElement("p");
                // rating.textContent = "Rating: " + book.rating;
    
                card.appendChild(image);
                card.appendChild(title);
                card.appendChild(description);
                // card.appendChild(author);
                // card.appendChild(year);
                // card.appendChild(pages);
                // card.appendChild(rating);
    
                bookList.appendChild(card);
            })}
            
            catch(error){
                console.log("hhhhhhh")
            }
           
        })
        .catch((error) => {
            console.error("Error fetching data: " + error);
        });


    fetch("http://localhost:3000/books")
    .then((response) => response.json())
    .then((data) => {
        const bookList = document.querySelector(".Story")
        let number = 0;

        const scienceBooks = data.filter(item => item.type === "Story");


        try {
            scienceBooks.forEach((book,x) => {
                
                if (x == 4) {
                    throw BreakError;
    
                }
                const card = document.createElement("div");
                card.className = "card";
                card.id = `${book.id}`;
                // ------------------------------------------------>
                card.setAttribute(`onclick`,`takeme(${book.id})`);
    
                const image = document.createElement("img");
                image.src = `${book.img}`;
                image.style.width = "296px";
                image.style.height = "398px";
    
                const title = document.createElement("h2");
                title.textContent = book.title;
    
                const description = document.createElement("p");
                description.textContent = book.long_description;
    
                // const author = document.createElement("p");
                // author.textContent = "Author: " + book.author;
    
                // const year = document.createElement("p");
                // year.textContent = "Year: " + book.year;
    
                // const pages = document.createElement("p");
                // pages.textContent = "Pages: " + book.pages;
    
                // const rating = document.createElement("p");
                // rating.textContent = "Rating: " + book.rating;
    
                card.appendChild(image);
                card.appendChild(title);
                card.appendChild(description);
                // card.appendChild(author);
                // card.appendChild(year);
                // card.appendChild(pages);
                // card.appendChild(rating);
    
                bookList.appendChild(card);
            })}
            
            catch(error){
                console.log("hhhhhhh")
            }
           
        })
        .catch((error) => {
            console.error("Error fetching data: " + error);
        });

function takeme(id){
    window.location.href = `/html/details.html?id=${id}`;
}

let sicbtn = document.querySelector(".sic");
let hisbtn = document.querySelector(".his");
let ecobtn = document.querySelector(".eco");
let stobtn = document.querySelector(".sto");

sicbtn.addEventListener(`click`, () =>{
    console.log("click");
    let booksid = "Science";
    window.location.href = `/html/books.html?booksid=${booksid}`;
})
hisbtn.addEventListener(`click`, () =>{
    console.log("click");
    let booksid = "History";
    window.location.href = `/html/books.html?booksid=${booksid}`;
})
ecobtn.addEventListener(`click`, () =>{
    console.log("click");
    let booksid = "Economic";
    window.location.href = `/html/books.html?booksid=${booksid}`;
})
stobtn.addEventListener(`click`, () =>{
    console.log("click");
    let booksid = "Story";
    window.location.href = `/html/books.html?booksid=${booksid}`;
})
