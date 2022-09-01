  /**---
navbar underline hover
  --**/

  function navV() {
    return {
       
        active: "about"
        
    }
  }


//   let thumbnails = document.getElementsByClassName('thumbnail');
// let slider = document.getElementById('slider');

// let buttonRight = document.getElementById('slide-right');
// let buttonLeft = document.getElementById('slide-left');

// buttonLeft.addEventListener('click', function(){
//     slider.scrollLeft -= 125;
// })

// buttonRight.addEventListener('click', function(){
//     slider.scrollLeft += 125;
// })

// const maxScrollLeft = slider.scrollWidth - slider.clientWidth;


  
//   buttonRight.addEventListener('click', function(){
//       slider.scrollLeft += 125;
//   })
  

const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));


