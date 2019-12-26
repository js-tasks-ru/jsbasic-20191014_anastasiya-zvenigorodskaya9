/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */


const inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';

function getMinMax(str) {
  let segments = str.match(/(-|\+)?[\d]+(\.[\d]+)?/ig) || [];

  segments = segments.map(seg => parseFloat(seg));
  return {
    min: Math.min(...segments),
    max: Math.max(...segments),
  };
}

getMinMax(inputData);
