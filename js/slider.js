$(document).ready(function(){
  $('.slider_img_content').slick({
    centerMode: true,
    centerPadding: '100px',
    arrows: true,
    prevArrow: '<div class="prev"><i class="fa-solid fa-circle-arrow-left"></i></div>',
	  nextArrow: '<div class="next"><i class="fa-solid fa-circle-arrow-right"></i></div>',
    autoplay: true, //自動再生
    infinite: true, //スライドのループ有効化
    dots: true, //ドットのナビゲーションを表示
    slidesToShow: 3, //表示するスライドの数
    slidesToScroll: 3, //スクロールで切り替わるスライドの数
    responsive: [{
      breakpoint: 900, //ブレークポイントが768px
      settings: {
        centerMode: true,
        slidesToShow: 1, //表示するスライドの数
        slidesToScroll: 1, //スクロールで切り替わるスライドの数
        centerPadding: '50px'
      }
    }]
  });
});