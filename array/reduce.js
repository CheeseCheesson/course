const salariesOfDevelopers = [400, 500, 520, 1000, 890, 3000];

salariesOfDevelopers.reduce((acc, item, indx, array) => {
  console.log(acc); // 0, default, default, default, default, default = 6 длинна массива
  // = [400, 500, 520, 1000, 890, 3000] = 6 длинна массива
  //первое значение будет 0,
}, 0); // 0 как здесь

salariesOfDevelopers.reduce((acc, item, indx, array) => {
  console.log(acc); // 0, 1, 1, 1, 1, 1 = 6 длинна массива
  // чтобы убрать default, нужно что-то возвращать, например 1
  return 1;
  //первое значение будет 0,
}, 0); // 0 как здесь

// получить первый элемент в массиве

salariesOfDevelopers.reduce((acc, item, indx, array) => {
console.log(acc);
}) // убать значение по дефолту

salariesOfDevelopers.reduce((acc, item, indx, array) => {
    console.log(acc);
    return 1
    }) // убать значение по дефолту


// считать сумму при помощи reduce
let reducerSum = salariesOfDevelopers.reduce((acc, item, indx, array) => {
    console.log('acc', acc,'+', 'item', item);
    return acc + item
}, 0)

reducerSum