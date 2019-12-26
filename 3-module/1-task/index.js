/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */

/* eslint-disable */
/* eslint-disable */
const userData = [
    {
        'balance': '$1,825.65',
        'picture': 'http://placehold.it/32x32',
        'age': 21,
        'name': 'Golden Branch',
        'gender': 'male',
        'greeting': 'Hello, Golden Branch! You have 7 unread messages.',
        'favoriteFruit': 'banana'
    },
    {
        'index': 1,
        'guid': '53c90e0c-b8b2-494b-8508-7d5870af0351',
        'isActive': true,
        'balance': '$1,490.15',
        'picture': 'http://placehold.it/32x32',
        'age': 26,
    },
    {
        'index': 2,
        'guid': '2483e252-b0d2-4a26-98e6-513531b320b7',
        'isActive': true,
        'balance': '$1,664.27',
        'picture': 'http://placehold.it/32x32',
        'age': 37,
    },
    {
        'index': 3,
        'guid': '51855992-a0e7-4821-8178-92bcd13a1f0c',
        'isActive': true,
        'balance': '$1,072.95',
        'picture': 'http://placehold.it/32x32',
        'age': 40,
    },
    {
        'index': 4,
        'guid': '83405931-c746-4ed6-a05f-10b79b018af2',
        'isActive': false,
        'balance': '$3,422.96',
        'picture': 'http://placehold.it/32x32',
        'age': 45,
    },
    {
        'index': 5,
        'guid': 'd4f7c1c1-a902-431c-95ce-034f74cae5c7',
        'isActive': false,
        'balance': '$2,560.80',
        'picture': 'http://placehold.it/32x32',
        'age': 39,
    },
];


const userAge = 25;

function showSalary(data, age) {
    return data
      .filter(item => item.age <= age)
      .map(item => `${item.name}, ${item.balance}`)
      .join('\n');
}

showSalary(userData, userAge);
