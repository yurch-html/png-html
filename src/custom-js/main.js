$(document).ready(function(){
//  lang
  $('.lang-list__btn').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
  });
  
  //  menu
  $('.open-menu').click(function() {
    $('.nav-page').toggleClass('active');
  });
  
//  search
  $('.search-btn').click(function() {
    $('.squares-sect').toggleClass('active');
    $('.squares-sect__search-sect').toggleClass('active');
  });
});














