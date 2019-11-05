/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  console.log('1', name);
  name = name.replace(/\s/g, '');

  let result;
  if (name.length > 3) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function sayHello() {
  let userName = prompt('Введите ваше имя');
  userName = userName.replace(/\s/g, '');

  if (isValid(userName)) {
    alert(`Welcome back,${userName} !`);
  } else {
    alert('Некорректное имя');
  }
}

sayHello();
