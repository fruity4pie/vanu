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
      let h = $(this).offset().top;
      $('body,html').animate({scrollTop:h}, 1000);
    }
  })

  //Map
  let mapItems = $('.map-b__i');
  mapItems.on('click', function(e) {
    e.preventDefault();
    let mapCont = e.target.closest('.map-b__c') || e.target.closest('.map-b__c *:not(a)');
    let mapContAnchors = e.target.closest('.map-b__c a');
    console.log(mapCont)
    if($(this).hasClass('active') && !mapCont) {
      $(this).removeClass('active');
    } else {
      e.stopImmediatePropagation();
      mapItems.removeClass('active');
      $(this).addClass('active');
      if(!mapContAnchors) return;
      if(mapContAnchors) {
        window.location.href = mapContAnchors.href;
      }
    }

  })

  //Lang
  let lang = $('.lang .lang-v a');
  lang.on('click', function(e) {
    e.preventDefault();
    $(this).parent().parent().find('.lang-h').toggleClass('active');
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

  //PopUp
  let btnTrigger = $('.js-popup');
  let popUp = $('.b-popup');
  let btnPopUpClose = $('.b-popup__close')

  btnTrigger.on('click', function(e) {
    e.preventDefault();
    let id = $(this).attr('href');
    $(`#${id}`).addClass('active');
    $('body').addClass('active');
  })

  btnPopUpClose.on('click', function(e) {
    e.preventDefault();
    popUp.removeClass('active');
    $('body').removeClass('active');
  })

  popUp.on('click', function(e) {
    if($(e.target).hasClass('b-popup')) {
      $(this).removeClass('active');
      $('body').removeClass('active');
    } else {
      e.stopImmediatePropagation();
    }
  })

  //rating
  let ratingBtn = $('.vote-post a');
  ratingBtn.on('click', function(e) {
    e.preventDefault();
    $(this).parent().find('.form-vote').removeClass('hidden');
  })

  //mobMap
  // let mapItems = $('.map-b__i');
  // mapItems.on('click', function(e) {
  //   e.preventDefault();
  //   let innerItem = $(this).find('.map-b__c');
  //   if(innerItem.hasClass('active')) {
  //     innerItem.removeClass('active');
  //   } else {
  //     mapItems.find('.map-b__c').removeClass('active');
  //     innerItem.addClass('active');
  //   }
  // })

});
