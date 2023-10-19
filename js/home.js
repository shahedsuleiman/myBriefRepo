
// document.addEventListener('DOMContentLoaded', function() {



  const carouselContainer = document.querySelector('.carousel-item');
      fetch('http://localhost:3000/books')
        .then((response) => response.json())
        .then((data) => {
          data.map((book) => {
            // console.log(book);
            if (book.prize == "1"){
              console.log("flsijbg");
              // let slide = document.querySelector('.container-slide');
              let div = document.createElement("div");
              div.className = "carousel-item";
            // slide.classList.add('carousel-item');
            div.innerHTML = `
                <div class="carousel-item__image"><img src="${book.img}"></div>
                <div class="carousel-item__info">
                  <div class="carousel-item__container">
                    <h2 class="carousel-item__subtitle">${book.author}</h2>
                    <h1 class="carousel-item__title">${book.title}</h1>
                    <p class="carousel-item__description">${book.long_description}</p>
                    <button class="carousel-item__btn">View Book</button>
                  </div>
                </div>`;
               console.log(book.title);
            carouselContainer.appendChild(div);
            console.log(div);
            }
          })
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });

const carouselItems = document.getElementsByClassName('carousel-item');
console.log(carouselItems);
let total = carouselItems.length;
let current = 0;

carouselItems[0].classList.add('active');

document.querySelector("#moveRight").addEventListener('click', function() {
  let next = current;
  current = current + 1;
  setSlide(next, current);
});

document.querySelector("#moveLeft").addEventListener('click', function() {
  let prev = current;
  current = current - 1;
  setSlide(prev, current);
});

function setSlide(prev, next) {
  // if (next = total) {
  //   return;
  // }

  let slide = next;

  if (next > prev) {
    slide = prev;
    next++;
  }

  if (next < 0) {
    slide = total - 1;
    current = total - 1;
  }

  carouselItems[slide].classList.remove('active');
  carouselItems[next].classList.add('active');

  console.log('current ' + current);
  console.log('prev ' + prev);
}


  // const carouselItems = document.getElementsByClassName('carousel-item');
  // console.log(carouselItems);
  // let total = carouselItems.length;
  // let current = 0;

  // carouselItems[slide].classList.remove('active');
  //   carouselItems[next].classList.add('active');
  // carouselItems[0].classList.add('active');

  // document.getElementById('moveRight').addEventListener('click', function() {
  //   let next = current;
  //   current = current + 1;
  //   setSlide(next, current);
  // });

  // document.getElementById('moveLeft').addEventListener('click', function() {
  //   let prev = current;
  //   current = current - 1;
  //   setSlide(prev, current);
  // });

  // function setSlide(prev, next) {
  //   let slide = next;

  //   if (next > prev) {
  //     slide = next;
  //     next--;
  //     // next++;
  //   }
    
  //   if (next < 0) {
  //     slide = total - 1;
  //     current = total - 1;
  //   }

  //   carouselItems[prev].classList.remove('active');
  //   carouselItems[slide].classList.add('active');

  //   console.log('current ' + current);
  //   console.log('prev ' + prev);
  // }
// });

//coming coon section design 
document.addEventListener('DOMContentLoaded', function() {
  let flag = 0;
  const c1 = document.querySelector('.c1');
  const c2 = document.querySelector('.c2');
  const c3 = document.querySelector('.c3');

  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');
  

  nextButton.addEventListener('click', function() {
    if (flag === 0) {
      c1.style.transform = 'translateX(-100px) scale(1)';
      c1.style.zIndex = '9';
      c2.style.transform = 'translateX(100px) scale(1)';
      c2.style.zIndex = '9';
      c3.style.transform = 'translateX(0) scale(1.5)';
      c3.style.zIndex = '99';
      flag = 1;
    } else if (flag === 1) {
      c3.style.transform = 'translateX(-100px) scale(1)';
      c3.style.zIndex = '9';
      c1.style.transform = 'translateX(100px) scale(1)';
      c1.style.zIndex = '9';
      c2.style.transform = 'translateX(0) scale(1.5)';
      c2.style.zIndex = '99';
      flag = 2;
    } else if (flag === 2) {
      c2.style.transform = 'translateX(-100px) scale(1)';
      c2.style.zIndex = '9';
      c3.style.transform = 'translateX(100px) scale(1)';
      c3.style.zIndex = '9';
      c1.style.transform = 'translateX(0) scale(1.5)';
      c1.style.zIndex = '99';
      flag = 0;
    }
  });

  prevButton.addEventListener('click', function() {
    if (flag === 0) {
      c3.style.transform = 'translateX(-100px) scale(1)';
      c3.style.zIndex = '9';
      c1.style.transform = 'translateX(100px) scale(1)';
      c1.style.zIndex = '9';
      c2.style.transform = 'translateX(0) scale(1.5)';
      c2.style.zIndex = '99';
      flag = 1;
    } else if (flag === 1) {
      c1.style.transform = 'translateX(-100px) scale(1)';
      c1.style.zIndex = '9';
      c2.style.transform = 'translateX(100px) scale(1)';
      c2.style.zIndex = '9';
      c3.style.transform = 'translateX(0) scale(1.5)';
      c3.style.zIndex = '99';
      flag = 2;
    } else if (flag === 2) {
      c2.style.transform = 'translateX(-100px) scale(1)';
      c2.style.zIndex = '9';
      c3.style.transform = 'translateX(100px) scale(1)';
      c3.style.zIndex = '9';
      c1.style.transform = 'translateX(0) scale(1.5)';
      c1.style.zIndex = '99';
      flag = 0;
    }
  });
});