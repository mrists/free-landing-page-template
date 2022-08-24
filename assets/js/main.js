const body = document.body
const hamburgerBtn = document.querySelector('.header-navbar__hamburger');
const navbarList = document.querySelector('.header-navbar__list');

let isShow = false

function toggleActive() {
  !isShow ? body.classList.toggle('active') : body.removeAttribute('class');
  
  hamburgerBtn.classList.toggle('active');
  navbarList.classList.toggle('active');

  isShow = !isShow;
}

hamburgerBtn.addEventListener('click', toggleActive);