'use strict'

window.addEventListener('load', () => {
  const images_lists = document.querySelectorAll('#images_lists');
  
  window.addEventListener('scroll', () => {
    //ブラウザの高さを取得
    const window_height = window.innerHeight;
    for(let i = 0; i < images_lists.length; i++){
      const images_list_scroll = images_lists[i].getBoundingClientRect().top;
      console.log(images_lists[i]);
      console.log(images_list_scroll);

      if (window_height > images_list_scroll + 100){
        images_lists[i].classList.add('active');
      }
    }
  });
});