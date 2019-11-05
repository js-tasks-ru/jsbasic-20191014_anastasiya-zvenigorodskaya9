/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */

const x = Number(prompt('Введите число'));
const n = Number(prompt('И еще разок'));

function pow() {
  let result;
  if (Number.isInteger(x) && Number.isInteger(n)) {
    alert(x ** n);
    result = x ** n;
  } else {
    alert('Можно только целые числа!');
    result = false;
  }
  return result;
}

pow();
