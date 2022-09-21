const data = [
  {
    id: '1',
    img: './assets/images/speaker_01.png',
    name: 'Yochai BenKler',
    position: 'Berkman Professor of Entrepreneurial Legal Studies at Havard Law School',
    ach: 'Benkler known for his published book, the wealth of Network.',
  },

  {
    id: '2',
    img: './assets/images/speaker_02.png',
    name: 'Kilnam Chon',
    position: 'Kilnam Chon is an internet enthusiast who has been experienced in the IT industry for years.',
    ach: 'Kilnam Chon is an internet enthusiast who has been experienced in the IT industry for years.',
  },

  {
    id: '3',
    img: './assets/images/speaker_03.png',
    name: 'Julia Leda',
    position: 'President of Young Pirates of Europe.',
    ach: 'Leda who supports and encourages young youths in digital and tech field.',
  },

  {
    id: '4',
    img: './assets/images/speaker_04.png',
    name: 'SohYeong Noh',
    position: 'Derictor of Art Central Nobi',
    ach: 'As the main venue for digital space, Noh promotes understanding among technology.',
  },

  {
    id: '5',
    img: './assets/images/speaker_05.png',
    name: 'Lela Tretikov',
    position: 'Executive Director of the Wikimedia Foundation',
    ach: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation who aims at developing more people through out the world.',
  },

  {
    id: '6',
    img: './assets/images/speaker_06.png',
    name: 'Ryan Merkley',
    position: 'CEO of creative commons, ex COO of the moxilla Foundation',
    ach: 'Ryan had been leading open-source projects at the Mozilla Foundation.',
  },
];

const element = document.querySelector('.speakers');
const render = () => {
  data.forEach((p) => {
    element.innerHTML += `
    <div class='speaker-1'>
      <img src=${p.img} alt="Speaker One" class="img">
      <div class="about-speaker">
        <div class="speaker-name">${p.name}</div>
        <div class="speaker-position">${p.position}</div>
        <hr class="hr-1">
        <div class="speaker-ach">${p.ach}</div>
      </div>
    </div>
    `;
  });
};
window.onload = () => {
  render();
};

// Toggle code
const togBtn = document.querySelector('.toggle');
const icon = togBtn.querySelector('.fa-bars');
togBtn.onclick = function () {
  if (icon.classList.contains('fa-bars')) {
    icon.classList.replace('fa-bars', 'fa-times');
  } else {
    icon.classList.replace('fa-times', 'fa-bars');
  }
};

const toggle = document.querySelector('.toggle');
const mobNav = document.querySelector('.mobile-nav');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  mobNav.classList.toggle('active');
});

// Close NavMenu
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
  toggle.classList.remove('active');
  mobNav.classList.remove('active');
}));