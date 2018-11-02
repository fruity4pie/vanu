$(document).ready(function() {
  //Tabs
  let items = $('.tabs li');
  items.on('click', function(e) {
    e.preventDefault();
    if($(this).hasClass('active')) {

      $(this).removeClass('active');
      $(this).find('.tabs-h').removeClass('active');
    } else {
      items.removeClass('active');
      $(this).addClass('active');
      items.find('.tabs-h').removeClass('active');
      $(this).find('.tabs-h').toggleClass('active');
    }
  })

  //Lang
  let lang = $('.lang');
  lang.on('click', function(e) {
    e.preventDefault();
    lang.find('.lang-h').toggleClass('active');
  })

})
