/**
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @param {int} min
 * @param {int} max
 * @returns {int}
 */
export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}
