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
       
        active: "blog"
        
    }
  }

  /** pagination**/

  function getPageList(totalPages, page, maxLength){
    function range(start, end){
      return Array.from(Array(end - start + 1), (_, i) => i + start);
    }
  
    var sideWidth = maxLength < 9 ? 1 : 2;
    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;
  
    if(totalPages <= maxLength){
      return range(1, totalPages);
    }
  
    if(page <= maxLength - sideWidth - 1 - rightWidth){
      return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
    }
  
    if(page >= totalPages - sideWidth - 1 - rightWidth){
      return range(1, sideWidth).concat(0, range(totalPages- sideWidth - 1 - rightWidth - leftWidth, totalPages));
    }
  
    return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
  }
  
  $(function(){
    var numberOfItems = $(".product .card").length;
    var limitPerPage = 9; //How many card items visible per a page
    var totalPages = Math.ceil(numberOfItems / limitPerPage);
    var paginationSize = 7; //How many page elements visible in the pagination
    var currentPage;
  
    function showPage(whichPage){
      if(whichPage < 1 || whichPage > totalPages) return false;
  
      currentPage = whichPage;
  
      $(".card-content .card").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
  
      $(".pagination li").slice(1, -1).remove();
  
      getPageList(totalPages, currentPage, paginationSize).forEach(item => {
        $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots")
        .toggleClass("active", item === currentPage).append($("<a>").addClass("page-link")
        .attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page");
      });
  
      $(".previous-page").toggleClass("disable", currentPage === 1);
      $(".next-page").toggleClass("disable", currentPage === totalPages);
      return true;
    }
  
    $(".pagination").append(
      $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("")),
      $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("➜"))
    );
  
    $(".card-content").show();
    showPage(1);
  
    $(document).on("click", ".pagination li.current-page:not(.active)", function(){
      return showPage(+$(this).text());
    });
  
    $(".next-page").on("click", function(){
      return showPage(currentPage + 1);
    });
  
    $(".previous-page").on("click", function(){
      return showPage(currentPage - 1);
    });
  });


  /***filter */

  /**** */

  $(document).ready(function(){
    $('.list').click(function(){
      const value = $(this).attr('data-filter');
      if(value == 'web'){
        $('.card').show('1000')
      }else{
        $('.card').not('.' +value).hide('1000');
        $('.card').filter('.' +value).show('1000');
      }
    })
  })
//add active//

$('.list').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
   
})