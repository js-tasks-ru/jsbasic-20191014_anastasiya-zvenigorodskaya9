/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */

const firstNum = prompt('Введите число 1');
const secondNum = prompt('Введите число 2');

function pow(m, n) {
  alert(m ** n);
  return m ** n;
}

pow(firstNum, secondNum);
