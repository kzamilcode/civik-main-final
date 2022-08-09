/***protfoloi-product-fliter***/

let list = document.querySelectorAll('.list');

let itemBox = document.querySelectorAll('.contentBx');

for(let i = 0; i<list.length; i++){
  list[i].addEventListener('click', function(){
    for(let j = 0; j<list.length; j++){
list[j].classList.remove('active')

    }
    this.classList.add('active');
    let dataFilter = this.getAttribute('data-filter');

let itemBox = document.querySelectorAll('.contentBx');
    for(let k = 0; k<itemBox.length; k++){
      itemBox[k].classList.remove('active');
      itemBox[k].classList.add('hide');

      if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == 'all'){
        itemBox[k].classList.remove('hide');
        itemBox[k].classList.add('active');
      }

    }
  })

}

  /**---
navbar underline hover
  --**/

  function navV() {
    return {
       
       
        active: "portfolio"
        
    }
  }

 



