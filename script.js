const menubtn = document.querySelector('.menu-btn');
const fullMenu = document.querySelector('.header');
const navBtns = document.querySelectorAll('.full-menu a');

menubtn.addEventListener('click', () => {

  menubtn.classList.toggle('open');
  fullMenu.classList.toggle('open-menu');

});

for (let i = 0; i < 3; i += 1) {
  navBtns[i].addEventListener('click', () => {
    menubtn.classList.toggle('open');
    fullMenu.classList.toggle('open-menu');
  });
}
