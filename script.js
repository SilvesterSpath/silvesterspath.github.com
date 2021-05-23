const boxes = document.querySelectorAll('.box');

const links = [
  'https://silvesterspath.github.io/github_finder/',
  'https://silvesterspath.github.io/MovieTime/',
  'https://silvesterspath.github.io/Incrementing-Counter/',
  'https://silvesterspath.github.io/Animated-Navigation/',
  'https://silvesterspath.github.io/Random-Picker/',
  'https://silvesterspath.github.io/How-many-Drinks/',
  'https://silvesterspath.github.io/FAQ-Collapse/',
  'https://silvesterspath.github.io/Progress-steps/',
  'https://silvesterspath.github.io/Blurry-loading/',
  'https://silvesterspath.github.io/Wave-Effect/',
  'https://github.com/SilvesterSpath/Search-Widget.git',
  'https://github.com/SilvesterSpath/Event-keyCodes.git',
];

const images = [
  './img/github_finder.png',
  './img/movie.png',
  './img/counter.png',
  './img/animated_nav.png',
  './img/random_choice.png',
  './img/drink_water.png',
  './img/faq.png',
  './img/steps.png',
  './img/blurry.png',
  './img/login.png',
  './img/search.png',
  './img/keycode.png',
];

const texts = [
  'Gihub Finder',
  'Find Your Movies',
  'Incrementing Counter',
  'Animated Navigation',
  'Random Choice Picker',
  'How many Drinks?',
  'FAQ',
  'Progress Steps',
  'Blurry Loading',
  'Wave Login',
  'Search Collapse',
  'KeyCodes',
];

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  const trigger = (window.innerHeight / 5) * 2;

  boxes.forEach((i, index) => {
    i.style.backgroundImage = `url(${images[index]})`;
    i.style.backgroundSize = 'contain';

    i.setAttribute('href', `${links[index]}`);
    i.innerHTML = `<h3 >${texts[index]}</h3>`;
    const boxTop = i.getBoundingClientRect().top;

    if (boxTop < trigger) {
      i.classList.add('show');
    } else {
      i.classList.remove('show');
    }
  });
}
