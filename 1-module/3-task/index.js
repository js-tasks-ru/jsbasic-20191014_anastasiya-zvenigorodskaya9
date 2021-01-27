/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */

function ucFirst(str) {
  if (str.length > 0) {
    let firstSymbol = str[0].toUpperCase();
    let capitalizedStr = firstSymbol + str.slice(1);
    return capitalizedStr;
  } else {return '';}
}

ucFirst('');
