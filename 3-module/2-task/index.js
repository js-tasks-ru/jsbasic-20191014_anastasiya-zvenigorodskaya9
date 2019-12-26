/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */


const inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';
const inputArray = inputData.split(' ');





function getMinMax(str) {
  const minValue = Math.min.apply(null, str);
  const maxValue = Math.max.apply(null, str);
  console.log(minValue);
  console.log(maxValue);
}


getMinMax(inputArray);


console.log(inputArray); // ожидается [-5.8, 73]
