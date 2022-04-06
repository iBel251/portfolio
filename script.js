const menubtn = document.querySelector('.menu-btn');
const fullMenu = document.querySelector('.header');
const navBtns = document.querySelectorAll('.full-menu a');

menubtn.addEventListener('click', () => {
  menubtn.classList.toggle('open');
  fullMenu.classList.toggle('open-menu');
  document.body.classList.toggle('no-scroll');
});

for (let i = 0; i < 3; i += 1) {
  navBtns[i].addEventListener('click', () => {
    menubtn.classList.toggle('open');
    fullMenu.classList.toggle('open-menu');
    document.body.classList.toggle('no-scroll');
  });
}

const projects = [
  {
    id: 1,
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    imageUrl: 'gymfit.png',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    demoLink: '#',
    srcLink: '#',
  },
  {
    id: 2,
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: 'background-darken.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    demoLink: '#',
    srcLink: '#',
  },
  {
    id: 3,
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: 'background-new2.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    demoLink: '#',
    srcLink: '#',
  },
  {
    id: 4,
    name: 'Website Protfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: 'background-new3.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    demoLink: '#',
    srcLink: '#',
  },
  {
    id: 5,
    name: 'Profesional Art Printing Data More',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: 'background-darken.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    demoLink: '#',
    srcLink: '#',
  },
  {
    id: 6,
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: 'background-new2.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    demoLink: '#',
    srcLink: '#',
  },
  {
    id: 7,
    name: 'Website Protfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: 'background-new3.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    demoLink: '',
    srcLink: '#',
  },
];

function renderCards(i) {
  const div = document.createElement('div');
  div.className = 'card-new';
  div.className = 'card';
  div.innerHTML = `<div class="card-new">
          <div class="card-content">
            <h1 class="card-title">${projects[i].name}</h1>
            <p class="txt-white">${projects[i].description}</p>
            <ul class="card-btn">
              ${projects[i].technologies.map((tech) => `<li>${tech}</li>`).join('')}
            </ul>
            </div>
            <button type="button" onclick="openPopup(${i})" class="cardbtn2">
              See Project
            </button>
          </div>`;
  div.querySelector('.card-new').style.backgroundImage = `url("${projects[i].imageUrl}")`;
  document.querySelector('.works').appendChild(div);
}

function closePopup() {
  const target = document.querySelector('.modal-container');
  target.classList.remove('active-modal');
  document.body.classList.toggle('no-scroll-desktop');
}

function openPopup(i) {
  const target = document.querySelector('.modal-container');
  target.classList.add('active-modal');
  target.querySelector('.modal-title').textContent = projects[i].name;
  target.querySelector('.modal-text').textContent = projects[i].description;
  target.querySelector('.modal-img').src = projects[i].imageUrl;
  target.querySelector('.technologies-used-list').innerHTML = projects[i].technologies.map((tech) => `<li>${tech}</li>`).join('');
  target.querySelector('.see-live-btn').href = projects[i].demoLink;
  target.querySelector('.see-src-btn').href = projects[i].srcLink;
  document.body.classList.add('no-scroll-desktop');
}

for (let i = 1; i < 7; i += 1) {
  renderCards(i);
}

if (1 === 10) {
  openPopup(1);
  closePopup();
}