// getName1, getName2, getName3., getName2, getName3
// function declaration
/*console.log(getName1('Jhon'));
function getName1(name) {
   return `Имя равно ${name}`
}
// function expression
const getName2 =  function (name) {
  return  `Имя равно ${name}`
}
console.log(getName2('Kristina'));

// arrow function
const getName3 = name => `Имя равно ${name}`
console.log(getName3('Maxim'));*/

const even = "четные";
const odd = "нечетные";
const emptyStr = "";

function getSumOfNumbers(number, type = odd) {
  let summ = 0;
  if (type == odd) {
    for (let i = 1; i <= number; i += 2) {
      summ += i;
    }
    return summ;
  } else if (type == even) {
    for (let i = 0; i <= number; i += 2) {
      summ += i;
    }
    return summ;
  }else if (type == emptyStr){
    for (let i = 0; i <= number; i ++) {
        summ += i;
      }
      return summ;
  }
}

console.log(getSumOfNumbers(10, emptyStr));

/*
function getDivisors(number = 1) {
  if (!Number.isInteger(number)) {
    console.log(`number должен быть целым числом и больше нуля!`);
    return;
  }
  let devisorCount = "";
  let iterCount = 0;
  for (let i = 0; i <= number; i++) {
    if (number % i == 0) {
      devisorCount += `${i}, `;
      iterCount++;
    }
  }

  return `Колличество делителей: ${iterCount}, делители ${devisorCount.slice(
    0,
    -2
  )}`;
}
console.log(getDivisors(30));*/
/*
const foo = (v) =>  v + 10
console.log(foo(100)); 
*/
/*
function checkQuestionAnswer(question, correctAnswer) {
    let userQ = prompt(question).toLowerCase().trim()
    if(userQ.toLowerCase() == correctAnswer.toLowerCase()){
        alert(`Ответ ${userQ} верный`);
    } else {
        alert(`Ответ ${userQ} неверный`)
    }

}

checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');
*/
/*
function showSuccessMessage(message) {
  console.log(message);
}

function showErrorMessage(message) {
  console.error(message);
}

const text = "Привет! Как дела! Давно мы с тобой не виделись.!";

checkTextOnErrorSymbol(text, "а", showSuccessMessage, showErrorMessage);


function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === errorSymbol) {
      count++;
      errorCallback(`Найден запрещенный символ "${text[i]}" под индексом ${i}.`);
    }
  }
  if (!count) {
    successCallback(`В данном тексте нет запрещенных символов`);
  }
}
*/