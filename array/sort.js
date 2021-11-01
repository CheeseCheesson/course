/*
let numbers = [4, 2, 5, 1, 3];

let sorted = numbers.sort((a, b) => a - b)

console.log(sorted)


//сортировка объектов

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic' },
    { name: 'Zeros', value: 37 }
  ];
  items.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a должно быть равным b
    return 0;
  });

  items

  /////////////////////
  var stringArray = ['Голубая', 'Горбатая', 'Белуга'];
var numericStringArray = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

// снова предполагаем, что функция печати определена
console.log('stringArray:', stringArray.join());
console.log('Сортировка:', stringArray.sort());

console.log('numberArray:', numberArray.join());
console.log('Сортировка без функции сравнения:', numberArray.sort());
console.log('Сортировка с функцией compareNumbers:', numberArray.sort(compareNumbers));

console.log('numericStringArray:', numericStringArray.join());
console.log('Сортировка без функции сравнения:', numericStringArray.sort());
console.log('Сортировка с функцией compareNumbers:', numericStringArray.sort(compareNumbers));

console.log('mixedNumericArray:', mixedNumericArray.join());
console.log('Сортировка без функции сравнения:', mixedNumericArray.sort());
console.log('Сортировка с функцией compareNumbers:', mixedNumericArray.sort(compareNumbers));

*/

// Пример: сортировка c помощью map

// массив для сортировки
let list = ['Дельта', 'альфа', 'ЧАРЛИ', 'браво'];

// временный массив содержит объекты с позицией и значением сортировки
let mapped = list.map(function(el, i) {
return { index: i, value: el.toLowerCase() };
});
mapped
// сортируем массив, содержащий уменьшенные значения
mapped.sort(function(a, b) {
  if (a.value > b.value) {
    return 1; }
  if (a.value < b.value) {
    return -1; }
  return 0;
});

// контейнер для результа
let result = mapped.map(function(el) {
  return list[el.index];
});
result 