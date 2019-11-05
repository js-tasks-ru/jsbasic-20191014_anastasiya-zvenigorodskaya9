/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */

const x = Number(prompt('Введите число'));
const n = Number(prompt('И еще разок'));

function pow(x, n) {
  let result;
  if (Number.isInteger(x) && Number.isInteger(n)) {
    alert(Math.pow(x, n));
    result = Math.pow(x, n);
  } else {
    alert('Можно только целые числа!');
    result = false;
  }
  return result;
}

pow(x, n);
