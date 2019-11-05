/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
const obj = { test: 1 };
const obj2 = {};

function clone() {
  for (const key in obj) {
    obj2[key] = obj[key];
  }

  obj2.test = 2;

  alert(obj2.test);
  alert(obj.test);
}

clone();
