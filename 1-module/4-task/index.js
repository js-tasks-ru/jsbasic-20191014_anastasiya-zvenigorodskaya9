/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */


function checkSpam(str) {
  str = str.toLowerCase();
  let subStr1 = '1XbeT now';
  let subStr2 = 'free xxxxx';
  subStr1 = subStr1.toLowerCase();
  subStr2 = subStr2.toLowerCase();
  return str.indexOf(subStr1) > -1 || str.indexOf(subStr2) > -1;
}
