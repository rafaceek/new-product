let elSiteNav = document.querySelector('.site-nav');
let elOpenBtn = document.querySelector('.site-menu__btn');
let elDarkBtn = document.querySelector('.dark__btn');

elOpenBtn.addEventListener('click', () => {
  elSiteNav.classList.toggle('show');
});

elDarkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});