$(document).ready(function(){
  $('.slider_img_content').slick({
    centerMode: true, // スライドを中心に表示して、部分的に前後のスライドが見えるように設定
    centerPadding: '100px', // centerMode時に前後のスライドが見える幅
    arrows: true, // 	前・次の矢印表示
    prevArrow: '<div class="prev"><i class="fa-solid fa-circle-arrow-left"></i></div>',
	  nextArrow: '<div class="next"><i class="fa-solid fa-circle-arrow-right"></i></div>',
    autoplay: true, //自動再生
    infinite: true, //スライドのループ有効化
    dots: true, //ドットのナビゲーションを表示
    slidesToShow: 3, //表示するスライドの数
    slidesToScroll: 3, //スクロールで切り替わるスライドの数
    responsive: [{
      breakpoint: 900, //ブレークポイントが900px
      settings: {
        centerMode: true,
        slidesToShow: 1, //表示するスライドの数
        slidesToScroll: 1, //スクロールで切り替わるスライドの数
        centerPadding: '64px'
      }
    }]
  });
});