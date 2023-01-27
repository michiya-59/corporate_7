'use strict'

window.addEventListener('load', () => {
  // ハンバーガーメニュー
  let header = document.getElementById('header');
  let hunburger_menu = document.getElementById('hunburger_menu');
  let mask_menu = document.getElementById('mask_menu');

  hunburger_menu.addEventListener('click', () => {
    header.classList.toggle('open_header');
    hunburger_menu.classList.toggle('open');
  });
  
  hunburger_menu.addEventListener('click', () => {
    mask_menu.classList.toggle('open_mask');
  });
  
  mask_menu.addEventListener('click', () => {
    header.classList.remove('open_header');
    hunburger_menu.classList.remove('open');
    mask_menu.classList.remove('open_mask');
  });
});