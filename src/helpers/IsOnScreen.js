/**
 * Checks if element is on screen
 * @param {Element} element
 * @returns {boolean}
 */
export const isOnScreen = (element) => {
  let rect = element.getBoundingClientRect();
  return rect.top + 100 < window.innerHeight && rect.bottom >= 0;
}
