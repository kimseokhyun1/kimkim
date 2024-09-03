// header 영역------------------------------
$('li.main-menu').mouseenter(function () {
    $('.sub-menu').stop().slideDown(400)
    $('header').addClass('on')
})
$('li.main-menu').mouseleave(function () {
    $('.sub-menu').stop().slideUp(400)
    $('header').removeClass('on')
})

// $('.art2 figure a').click(function (e) {
//     e.preventDefault();
//     $(this).children('img').attr("src", "./img2/QR1.jpg");
// })
/* img 의 속성을 수정하겠다. src를 뒤에 경로로 바꾸겠다 */

// $('.art3 figure a').click(function (e) {
//     e.preventDefault();
//     $(this).children('img').attr("src", "./img2/QR2.jpg");
// })
