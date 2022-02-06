/*
 * Vue Animations by Oliver Vollborn
 */

// Helpers
require("./src/css/delay.css");

// Animations
require("./src/css/draw-to-right.css");
require("./src/css/fade-from-left.css");
require("./src/css/fade-from-right.css");
require("./src/css/fade-in.css");
require("./src/css/size-fade-in.css");

let elements = [];
let options = {
  automaticElementListReload: true
};

/**
 * @param {Element} element
 * @returns {boolean}
 */
const isOnScreen = (element) => {
  let rect = element.getBoundingClientRect();
  return rect.top + 100 < window.innerHeight && rect.bottom >= 0;
}

/**
 * @returns {Element[]}
 */
const reloadElements = () => {
  elements = Array.from(document.getElementsByClassName('vue-animations'));
  return elements;
}

/**
 * @param {boolean} shouldReload
 */
const setAutomaticElementListReload = (shouldReload = true) => {
  options.automaticElementListReload = shouldReload;
}

const handle = () => {
  if (options.automaticElementListReload) {
    reloadElements();
  }

  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    if (!element.classList.contains('applied') && isOnScreen(element)) {
      element.classList.add('applied');
    }
  }
}

document.addEventListener('scroll', handle);

export default {
  elements,
  options,
  setAutomaticElementListReload,
  isOnScreen,
  handle
}
