/***filter** */


$(document).ready(function(){
    $('.list').click(function(){
      const value = $(this).attr('data-filter');
      if(value == ''){
        $('.card').show('1000')
      }else{
        $('.card').not('.' +value).hide('1000');
        $('.card').filter('.' +value).show('1000');
      }
    })
  })


  /****-arrow****/

let slides = document.querySelectorAll('.nContainer');
let index = 0;

function next(){
  slides[index].classList.remove('nActive');
  index  = (index + 1) % slides.length;
  slides[index].classList.add('nActive');

};

function prev(){
  slides[index].classList.remove('nActive');
  index  = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('nActive');

}
