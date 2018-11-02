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

  //MobileMenu
	let mobHamb = $('.mob-burg-btn');
	let mobHambClose = $('.mob-burg__h > span');
	let mobSub = $('.mob-burg__sub');
	let dBody = $('body');

	mobSub.on('click', function(e) {
		if($(e.target).hasClass('mob-burg__sub')) {
			$(this).removeClass('active');
			dBody.removeClass('active');
		} else {
			e.stopImmediatePropagation();
		}
	})
	mobHamb.on('click', function(){
		$(this).parent().find('.mob-burg__sub').addClass('active').find('.mob-burg__wrap').addClass('active');
		dBody.addClass('active');
	})
	mobHambClose.on('click', function() {
		mobHamb.parent().find('.mob-burg__sub').removeClass('active');
		dBody.removeClass('active');
	})

	let mobPhone = $('.mob-phone__open');
	let mClose = $('.mob-close');
	let mSub = $('.mob-phone__sub');
	mSub.on('click', function(e) {
		$(e.target).hasClass('mob-phone__sub') ? $(this).removeClass('active') : e.stopImmediatePropagation();
	})
	mobPhone.on('click', function(){
		$(this).parent().find('.mob-phone__sub').addClass('active');
	})
	mClose.on('click', function(){
		mobPhone.parent().find('.mob-phone__sub').removeClass('active');
	})

})
