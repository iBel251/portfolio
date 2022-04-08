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
  {
    id: 8,
    name: 'Keeping track of hundreds  of components website',
    name2: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    imageUrl: 'popup-img.jpg',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    demoLink: '',
    srcLink: '',
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
            <button type="button" onclick="openPopup(7)" class="cardbtn2">
              See Project
            </button>
          </div>`;
  div.querySelector('.card-new').style.backgroundImage = `url("${projects[i].imageUrl}")`;
  document.querySelector('.works').appendChild(div);
}

function renderFirstCard() {
  const div = document.createElement('div');
  div.className = 'card1';
  div.innerHTML = `<img src="gymfit.png" alt="">
  <h1>Multi-Post Stories</h1>
  <p>A daily selection of privately personalized reads;
    no accounts or sign-ups required. has been the industry's
    standard dummy text ever since the 1500s,
    when an unknown printer took a standard dummy text.</p>
  <ul class="card1-btn">
    <li>css</li>
    <li>html</li>
    <li>bootstrap</li>
    <li>Ruby</li>
  </ul>
  <button class="card1btn" onclick="openPopup(7)">See Project</button>
`;
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
  if (window.innerWidth < 600) {
    target.querySelector('.modal-title').textContent = projects[i].name2;
    target.querySelector('.modal-text').textContent = projects[i].description2;
  } else {
    target.querySelector('.modal-title').textContent = projects[i].name;
    target.querySelector('.modal-text').textContent = projects[i].description;
  }

  target.querySelector('.modal-img').src = projects[i].imageUrl;
  target.querySelector('.technologies-used-list').innerHTML = projects[i].technologies.map((tech) => `<li>${tech}</li>`).join('');
  target.querySelector('.see-live-btn').href = projects[i].demoLink;
  target.querySelector('.see-src-btn').href = projects[i].srcLink;
  document.body.classList.add('no-scroll-desktop');
}
renderFirstCard();
for (let i = 1; i < 7; i += 1) {
  renderCards(i);
}

/* Form email validation */

const form = document.querySelector('#contact-form');
const message = document.querySelector('#error-message');

function submitform() {
  const email = document.getElementById('email-input').value;
  if (email !== email.toLowerCase()) {
    message.textContent = 'Email can\'t contain uppercase letters';
    return false;
  }
  form.setAttribute('action', 'https://formspree.io/f/meqnzyjg');
  form.submit();
  return true;
}

/* Store and fech forms data from local storage. */

const email = document.getElementById('email-input');
const fullName = document.getElementById('user-name');
const comment = document.getElementById('user-message');
function storageSave() {
  const setData = {
    name: fullName.value,
    Email: email.value,
    Comment: comment.value,
  };
  localStorage.setItem('StorageData', JSON.stringify(setData));
}

function getSave() {
  const getData = JSON.parse(localStorage.getItem('StorageData'));
  email.value = getData.Email;
  fullName.value = getData.name;
  comment.value = getData.Comment;
}

if (!localStorage.getItem('SavedData')) {
  const SavedData = { name: '', Email: '', Comment: '' };
  localStorage.setItem('SavedData', JSON.stringify(SavedData));
} else {
  getSave();
}

form.addEventListener('change', storageSave);

if (1 === 10) {
  openPopup(1);
  closePopup();
  submitform();
}
