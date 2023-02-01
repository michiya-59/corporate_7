'use strict'

window.addEventListener('load', () => {
  // ハンバーガーメニュー
  let header = document.getElementById('header');
  let hunburger_menu = document.getElementById('hunburger_menu');
  let mask_menu = document.getElementById('mask_menu');
  let nav_menu = document.getElementById('nav_menu');
  let pickup = document.getElementById('pickup');
  let contact = document.getElementById('contact');

  hunburger_menu.addEventListener('click', () => {
    header.classList.toggle('open_header');
    hunburger_menu.classList.toggle('open');
    mask_menu.classList.toggle('open_mask');
    nav_menu.classList.toggle('opan_nav_menu');
  });
  
  mask_menu.addEventListener('click', () => {
    header.classList.remove('open_header');
    hunburger_menu.classList.remove('open');
    mask_menu.classList.remove('open_mask');
    nav_menu.classList.remove('opan_nav_menu');
  });
  
  nav_menu.addEventListener('click', () => {
    header.classList.remove('open_header');
    hunburger_menu.classList.remove('open');
    mask_menu.classList.remove('open_mask');
    nav_menu.classList.remove('opan_nav_menu');
  })

  pickup.addEventListener('click', () => {
    header.classList.remove('open_header');
    hunburger_menu.classList.remove('open');
    mask_menu.classList.remove('open_mask');
    nav_menu.classList.remove('opan_nav_menu');
  })

  contact.addEventListener('click', () => {
    header.classList.remove('open_header');
    hunburger_menu.classList.remove('open');
    mask_menu.classList.remove('open_mask');
    nav_menu.classList.remove('opan_nav_menu');
  })
});