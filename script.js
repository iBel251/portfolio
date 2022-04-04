const menubtn = document.querySelector('.menu-btn');
const fullMenu = document.querySelector('.header');
const navBtns = document.querySelectorAll('.full-menu a');
let menuOpen = false;
menubtn.addEventListener('click', () => {
  if (!menuOpen) {
    menubtn.classList.add('open');
    fullMenu.classList.add('open-menu');
    menuOpen = true;
  } else {
    menubtn.classList.remove('open');
    fullMenu.classList.remove('open-menu');
    menuOpen = false;
  }
});

for (let i = 0; i < 3; i++) {
  navBtns[i].addEventListener('click', () => {
    if (menuOpen) {
      menubtn.classList.remove('open');
      fullMenu.classList.remove('open-menu');
      menuOpen = false;
    }
  });
}
