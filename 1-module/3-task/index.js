/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */

function ucFirst(str) {
  if (str.length > 0) {
    let firstSymbol = str[0].toUpperCase();
    return firstSymbol + str.slice(1);
  } else {return '';}
}
