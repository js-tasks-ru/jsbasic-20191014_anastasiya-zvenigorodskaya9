/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */


function pow(x, n) {
  x = prompt('Введите число');
  n = prompt('И еще разок');

  alert(Math.pow(x, n));
  return Math.pow(x, n);
}

pow();
