/* 下からタレが上がってくるやつ */
$('.js-tare').animate({
  'top': '15vh'
},30000);

/* ヘッダーメニューのToggle */
$('.js-gnav-toggle').on('click', function() {
  $(this).toggleClass('is-open');
  $('.js-gnav').slideToggle(450);
});
