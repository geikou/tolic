/* 下からタレが上がってくるやつ */
$('.js-tare').animate({
  'top': '15vh'
},30000);

/* ヘッダーメニューのToggle */
$('.js-gnav-toggle').on('click', function() {
  $(this).toggleClass('is-open');
  $('.js-gnav').slideToggle(450);
});

/* twitterクーポンシェア */

var w = 500,
    h = 350;
var wPosX = (window.innerWidth-w)/2,
    wPosY = (window.innerHeight-h)/2;

function twitterPopup(){
	var url = 'https://twitter.com/share?';
	url += 'text=' + encodeURI('模擬店「TOLIC」のクーポンを獲得しました！ pic.twitter.com/b0rKXCL9u3');
  url += '&url=' + '..';
  url += '&via=' + 'TOLIC2016';
	url += '&hashtags=' + '芸工祭2016';
  console.log(url);
	window.open(url, 'tweetwin', 'width='+w+',height='+h+',left='+wPosX+',top='+wPosY+',menubar=no,toolbar=no,scrollbars=yes');
}
