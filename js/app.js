// navbar start
let searchBtn = document.querySelector(".searchBtn");
let closeBtn = document.querySelector(".closeBtn");
let searchBox = document.querySelector(".searchBox");
let nav = document.querySelector("nav");
let navigation = document.querySelector(".navigation");
let menuToggle = document.querySelector(".menuToggle");

searchBtn.addEventListener("click", () => {
  searchBox.classList.add("active");
  closeBtn.classList.add("active");
  searchBtn.classList.add("active");
  menuToggle.classList.add("hide");
});

closeBtn.addEventListener("click", () => {
  searchBox.classList.remove("active");
  closeBtn.classList.remove("active");
  searchBtn.classList.remove("active");
  menuToggle.classList.remove("hide");
  nav.classList.remove("open");
});

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  searchBox.classList.remove("active");
  closeBtn.classList.remove("active");
  searchBtn.classList.remove("active");
});
// navbar end

// saerch start
// sent search value into details.html start
document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault(); 
      const searchTerm = searchInput.value;
      const url = `html/details.html?searchInput=${encodeURIComponent(searchTerm)}`;
      window.location.href = url;
    });
  });
  // sent search value into details.html end
// saerch End

// hero section start
const myslide = document.querySelectorAll(".myslide"),
  dot = document.querySelectorAll(".dot");
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
  counter += 1;
  slidefun(counter);
}
function plusSlides(n) {
  counter += n;
  slidefun(counter);
  resetTimer();
}
function currentSlide(n) {
  counter = n;
  slidefun(counter);
  resetTimer();
}
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
  let i;
  for (i = 0; i < myslide.length; i++) {
    myslide[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  if (n > myslide.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = myslide.length;
  }
  myslide[counter - 1].style.display = "block";
  dot[counter - 1].className += " active";
}
// hero section end

// top reted start
document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/books")
    .then((res) => res.json())
    .then((json) => {
      const filteredData = json.filter((item) => item.rating === 5);
      let ul = document.querySelector(".cards");
      const dataSize = filteredData.length;
      // console.log(Number of items in filteredData: ${dataSize});

      for (let value of filteredData) {
        addElement(ul, value);
      }
    });
});

function addElement(appendin, value) {
  let li = document.createElement("li");
  li.className = "cards_item";

  let { img, year, title, author, rating, id } = value;
  let starRating = getStarRating(rating);
  li.innerHTML = `    <section class="new" onclick = sendme(${id})>
        <div class="card">
        <div class="card_image"><img id="imgloay" src="${img}" alt = ""></div>
        
            <div class="card_content">
                <h2 class="card_title">${title}</h2>
                <p class="card_text">${author}</p>
                <div class="star">rating: <span class="star_icon">${starRating} </span></div>
                <h6>${year}</h6>
            </div>
        </div>
        </section>`;
  appendin.appendChild(li);
}

function sendme(id) {
  // console.log(id);
  window.location.href = `/html/details.html?id=${id}`;
}

function getStarRating(rating) {
  let starIcons = "";
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      starIcons += "★"; // Full star
    } else {
      starIcons += "☆"; // Empty star
    }
  }
  return starIcons;
}
// top rated section end

// new section start home

// let books1 = [];
// function relatedbook() {
//     fetch("http://localhost:3000/books")
//         .then((response) => response.json())
//         .then((json) => {
//             books1 = json.map(function (item) {
//                 let card = new Card(item.title, item.author, item.year);
//                 return card;
//             });

//             // Filter the books based on the year
//             let newcard = books1.filter((card) => card.year === 2022);
//             console.log(newcard);
//             console.log(newcard[0]);
//             let dot;
//             // Create HTML for each filtered card
//             let cardn = newcard.map((card, x) =>
//                 <div class="book read">
//                     <div class="cover">
//                         <img src="${card.img}">
//                     </div>
//                     <div class="description">
//                         <p class="title">${newcard[x].title.slice(0,20)}<br>
//                             <span class="author">${card.author}</span>
//                             <h6>${card.year}</h6>
//                         </p>
//                     </div>
//                 </div>
//             ).join('');

//             document.querySelector("#list-th").innerHTML = cardn;
//         })
//         .catch((error) => console.error("Error:", error));
// }

// class Card {
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }
// }

// relatedbook();

//new section  end

//fix newrelase Book  section start

let books1 = [];

function relatedbook() {
  fetch("http://localhost:3000/books")
    .then((response) => response.json())
    .then((json) => {
      books1 = json.map(function (item) {
        let card = new Card(
          item.title,
          item.author,
          item.year,
          item.img,
          item.id
        );
        return card;
      });

      // Filter the books based on the year
      let newcard = books1.filter((card) => card.year === 2022);
      console.log(newcard);
      console.log(newcard[0]);
      let dot;

      // Create HTML for each filtered card
      let cardn = newcard
        .map(
          (card, x) => `
                <div class="book read" onclick = viewnewbook("${card.id}")>
                    <div class="cover">
                        <img src="${card.img}">
                    </div>
                    <div class="description">
                        <p class="title">${newcard[x].title.slice(0, 30)}<br>
                            <span class="author">${card.author}</span>
                            <h6>${card.year}</h6>
                        </p>
                    </div>
                </div>
            `
        )
        .join("");

      document.querySelector("#list-th").innerHTML = cardn;
    })
    .catch((error) => console.error("Error:", error));
}

class Card {
  constructor(title, author, year, img, id) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.img = img; // Add the image property
    this.id = id;
  }
}

relatedbook();

function viewnewbook(book) {
  window.location.href = `/html/details.html?id=${book}`;
}

//fix newrelase Book  section end

//catigories section start

//  class Books {
//   constructor (id,img,title,long_description,author ,year,pages,rating,type) {
//       this.id = id;
//       this.img = img;
//       this.title = title;
//       this.long_description = long_description;
//       this.author = author;
//       this.year = year;
//       this.pages = pages;
//       this.rating = rating;
//       this.type = type;

//   }
// }

var record1 = document.querySelector(".bn632-hover.bn28");
record1.addEventListener("click", () => {
  window.location.href = "/html/books2.html";
});

let catego = document.querySelector(".record All");
function filterCategory(id) {
  let booksid = id.id;
  console.log(booksid);
  window.location.href = `/html/books.html?booksid=${booksid}`;
}

//catigories section end

