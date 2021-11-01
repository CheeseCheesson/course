/*
const getSumOfNumbers = (number, type = 'odd') => {
    let sum = 0;
    for (let i = 0; i <= number; i += 1) {
        const isEven = i % 2 === 0;
        isEven
        const isOdd = !isEven;
        if (!type) {
            type
            sum += i;
        } else if (isEven && type === 'even') {
            type
            isEven
            sum += i;
        } else if (isOdd && type === 'odd') {
            isOdd
            type
            sum += i;
        }
    }

    return sum;
}

const result = getSumOfNumbers(10, 'odd');
console.log('result', result);

*/
/*
const even = "четные";
const odd = "нечетные";
const emptyStr = "";

function getSumOfNumbers(number, type = odd) {
  let summ = 0;
  if (type == odd) {
    for (let i = 1; i <= number; i += 2) {
      summ += i;
    }
  } else if (type == even) {
    for (let i = 0; i <= number; i += 2) {
      summ += i;
    }
  } else if (type == emptyStr) {
    for (let i = 0; i <= number; i++) {
      summ += i;
    }
  }
  return summ;
}

console.log(getSumOfNumbers(10, emptyStr));
*/

// массив с напитками, отсортирован по популярности
const coffees = ['Latte', 'Cappuccino', 'Americano'];

let coffeeName = prompt('Поиск кофе по названию:').trim().toLocaleLowerCase()


let ifndCoffee = coffees.findIndex((coffee) => {
    console.log(coffee.toLowerCase())
    return coffee.toLowerCase() === coffeeName
})

if(ifndCoffee >= 0){
   alert(`Держите ваш любимый кофе ${coffeeName}. Он ${ifndCoffee + 1}-й по популярности в нашей кофейне.`);
} else {
	alert(`К сожалению, такого вида кофе, как ${coffeeName} нет в наличии`)
}