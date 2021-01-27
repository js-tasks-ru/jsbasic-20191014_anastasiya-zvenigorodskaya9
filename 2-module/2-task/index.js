/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  for (const key in obj) {
    return false;
  }
  return true;
}

const schedule = {};
alert(isEmpty(schedule)); // true
schedule['8:30'] = 'подъём';
alert(isEmpty(schedule)); // false
