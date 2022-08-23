  /**---
navbar underline hover
  --**/

  function navV() {
    return {
       
        active: "about"
        
    }
  }


  let thumbnails = document.getElementsByClassName('thumbnail');
let slider = document.getElementById('slider');

let buttonRight = document.getElementById('slide-right');
let buttonLeft = document.getElementById('slide-left');

buttonLeft.addEventListener('click', function(){
    slider.scrollLeft -= 125;
})

buttonRight.addEventListener('click', function(){
    slider.scrollLeft += 125;
})

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;


  
  buttonRight.addEventListener('click', function(){
      slider.scrollLeft += 125;
  })
  

