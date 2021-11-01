
/*
let middle = [5, 6, 7] 

let arr1 = [1, 2, 3, 4,...middle, 8, 9]

console.log(arr1);


console.log(Math.max(...middle))

console.log(Math.max.apply(null, arr1));


//клонирование

let arr2 = [3,5,23,6,34,63]

let cloneArr2 = [...arr2]

console.log(cloneArr2);

arr2.push(32)

console.log(arr2);
console.log(cloneArr2);

// строку в массив

let password = 'asdrFD'

let arrPass = [...password]
console.log(arrPass);

const [a, s, d, r, F, D] = [...password]

console.log(a);
console.log(s);


// из строки деструктуризация в массив

let text = 'lorem, ipsom, libson, dripson'

let [lorem, ipsom, libson, dripson] = [...text]

console.log(libson);

*/
// итерация по массиву
/*
let fruits = ['Яблоко', 'Банан', 'Kivi', 'Orange'];

fruits.forEach(function(item, indx, arr){
    console.log(item);
    console.log(indx);
    console.log(arr);
})

//Добавление элемента в конец массива получаем блину массива
let newLength = fruits.push('Апельсин');
console.log(typeof newLength);

//Удаление последнего элемента массива, получаем удалённый элемент
let last = fruits.pop();
console.log(last);

//Удаление первого элемента массива, получаем удалённый элемент 
let first = fruits.shift()
console.log(first);

//Добавление элемента в начало массива
let newLengthUnshift = fruits.unshift('Клубника')
console.log(newLengthUnshift);

// Поиск номера элемента в массиве
fruits.push('Манго');
let pos = fruits.indexOf('Клубника');
console.log(fruits);
console.log(pos);

//Удаление элемента с определённым индексом // возвращает удалёный элемент
let removedItem = fruits.splice(pos, 1); 
console.log(removedItem);

// Удаление нескольких элементов, начиная с определённого индекса // возвращает удалёные элементы
let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
console.log(vegetables);
let pos2 = 1
let n = 2
let rmItems = vegetables.splice(pos2, n)
console.log(rmItems);

//Создание копии массива
let shallowCopy = fruits.slice()
console.log(shallowCopy);
*/
/*
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let arrArray = new Array(5)

console.log(arrArray);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/
/*
let assocArr = [(1, 'apple'), (2, 'pear'), (3, 'orange')]

console.log(typeof assocArr);

let associative_array = new Array();
associative_array["one"] = "Lorem";
associative_array["two"] = "Ipsum";
associative_array["three"] = "dolor";
for (let i in associative_array) { console.log(i) };
*/
/*
let board = [
    ['R','N','B','Q','K','B','N','R'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p','p','p','p','p','p'],
    ['r','n','b','q','k','b','n','r'] ];
  
  console.log(board.join('\n') + '\n\n');
  
  // Двигаем королевскую пешку вперёд на две клетки
  board[4][4] = board[6][4];
  board[6][4] = ' ';
  console.log(board.join('\n'));
  
  board[3][4] = board[1][4];
  board[1][4] = ' ';
  console.log(board.join('\n'));
  */