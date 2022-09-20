/* eslint-disable quotes */
/* eslint-disable linebreak-style */
const data = [
  {
    id: '1',
    img: './assets/images/speaker_01.png',
    name: 'Yochai BenKler',
    position: 'Lorem, ipsum dolor sit amet consectetur.',
    ach: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: '2',
    img: './assets/images/speaker_02.png',
    name: 'Yochai BenKler',
    position: 'Lorem, ipsum dolor sit amet consectetur.',
    ach: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: '3',
    img: './assets/images/speaker_03.png',
    name: 'Yochai BenKler',
    position: 'Lorem, ipsum dolor sit amet consectetur.',
    ach: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: '4',
    img: './assets/images/speaker_04.png',
    name: 'Yochai BenKler',
    position: 'Lorem, ipsum dolor sit amet consectetur.',
    ach: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: '5',
    img: './assets/images/speaker_05.png',
    name: 'Yochai BenKler',
    position: 'Lorem, ipsum dolor sit amet consectetur.',
    ach: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: '6',
    img: './assets/images/speaker_06.png',
    name: 'Yochai BenKler',
    position: 'Lorem, ipsum dolor sit amet consectetur.',
    ach: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
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
