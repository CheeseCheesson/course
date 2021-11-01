// массив с напитками, отсортирован по популярности
const coffees = ["Latte", "Cappuccino", "Americano"];
const prices = [1.5, 1, 2];

let coffeeName = "Cappuccino"; //prompt('Поиск кофе по названию:').trim().toLocaleLowerCase()
let coffeeNameCorrect = coffeeName[0].toLocaleUpperCase() + coffeeName.slice(1);

let ifndCoffee = coffees.findIndex((coffee) => {
  return coffee === coffeeNameCorrect;
});

if (ifndCoffee >= 0) {
  console.log(
    `Держите ваш любимый кофе ${coffeeNameCorrect}. Он ${
      ifndCoffee + 1
    }-й по популярности в нашей кофейне.`
  );
}

let updatedPrices = prices.map((price) => price * 1.5);

coffees.forEach((coffee, indx) => {
  console.log(`Кофе ${coffee} сейчас стоит ${updatedPrices[indx]} евро`);
});

// оценки клиентов

let clientsEstimations = [5, 3, 10, 6, 9, 1, 3];

for (let i = 0; i < 5; i++) {
    askClientToGiveEstimation()
}
function askClientToGiveEstimation() {
    let askClientToGiveEstimation = 10; // +prompt('Как вы оцениваете нашу кофейню от 1 до 10?').trim()

    if (askClientToGiveEstimation > 0 && askClientToGiveEstimation <= 10) {
      clientsEstimations.push(askClientToGiveEstimation);
    }
  }
clientsEstimations

let goodEstimations = clientsEstimations.filter(num => num > 5)

console.log(goodEstimations.length);

let notGoodEstimations = clientsEstimations.filter(num => num <= 5)

console.log(notGoodEstimations.length);