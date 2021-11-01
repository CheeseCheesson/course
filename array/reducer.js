const eurosS = [29.76, 41.85, 46.5];
const sum = eurosS.reduce((total, amount) => total + amount);
console.log(sum);
/*
const euros = [29.76, 41.85, 46.5];
const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if( index === array.length-1) { 
    return total / array.length;
  }else { 
    return total;
  }
});

console.log(average);
*/

/*
const euros = [29.76, 41.85, 46.5];
const averageR = euros.reduce((total, amount, index, array) => {
    total += amount
    return total/array.length
  }, 0);

  console.log(averageR);
  */
/*
const euros = [29.76, 41.85, 46.5];
const doubled = euros.reduce((total, amount) => {
  total.push(amount * 2);
  return total;
}, []);
doubled; //
*/
/*
const euro = [29.76, 41.85, 46.5];
const above30 = euro.reduce((total, amount) => {
  if (amount > 30) {
    total.push(amount);
  }
  return total;
}, []);
above30; //
*/
const fruitBasket = [
  "banana",
  "cherry",
  "orange",
  "apple",
  "cherry",
  "orange",
  "apple",
  "banana",
  "cherry",
  "orange",
  "fig",
];

const count = fruitBasket.reduce((tally, fruit) => {
  if (!tally[fruit]) {
    tally[fruit] = 1;
  } else {
    tally[fruit] = tally[fruit] + 1;
  }
  return tally;
}, {});
count;

// сокращенно

let shortCount = fruitBasket.reduce((tally, fruit) => {
  tally[fruit] = 1;
  return tally;
}, {});
shortCount;

//Сливаем массив воедино с помощью reduce

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const flat = data.reduce((total, amount) => {
  return total.concat(amount);
}, []);
flat;

// получить все цвета в переменной data
const data2 = [
  { a: "happy", b: "robin", c: ["blue", "green"] },
  { a: "tired", b: "panther", c: ["green", "black", "orange", "blue"] },
  { a: "sad", b: "goldfish", c: ["green", "red"] },
];

// 
const colors = data2.reduce((total, amount) => {
  amount.c.forEach((color) => {
    total.push(color);
  });
  return total;
}, []);
colors;

//  уникальные значения
const uniqueColors = data2.reduce((total, amount) => {
    amount.c.forEach( color => {
      if (total.indexOf(color) === -1){
       total.push(color);
      }
    });
    return total;
  }, []);
  uniqueColors


  // Пайплайн с reduce()
  let pipeline = [increment, double, decrement];

function increment(input) { return input + 1;}
function decrement(input) { return input - 1;}
function double(input) { return input * 2; }
function halve(input) { return input / 2; }

const result = pipeline.reduce(function(total, func) {
    return func(total);
  }, 1);
  result

  
