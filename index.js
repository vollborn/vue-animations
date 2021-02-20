require('./src/css/animations.css');

let elements = [];

const elementIsOnScreen = function (element) {
  let rect = element.getBoundingClientRect();
  let elemTop = rect.top + 100;
  let elemBottom = rect.bottom;
  return elemTop < window.innerHeight && elemBottom >= 0;
}

const handleAnimations = function () {
  elements = Array.from(document.getElementsByClassName('vue-animations'));
  for (let i = 0; i < elements.length; i++) {
    let elem = elements[i];
    if (!elem.classList.contains('applied') && elementIsOnScreen(elem)) {
      elem.classList.add('applied');
    }
  }
}

document.addEventListener('scroll', handleAnimations);
module.exports = {}
