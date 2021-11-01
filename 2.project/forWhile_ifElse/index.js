/*const existedUserLogin  = 'the_best_user'
const existedUserPassword  = '12345678'

let userLogin = prompt('Введите логин').trim()
let userPassword = prompt('Введите пароль').trim()

if((existedUserLogin === userLogin) && (existedUserPassword === userPassword)){
    alert(`Добро пожаловать, ${userLogin}!`);
} else {
   alert(`Логин и (или) Пароль введены неверно!`)
}

(existedUserLogin === userLogin && existedUserPassword === userPassword)
?  console.log(`Добро пожаловать, ${userLogin}!`)
:  console.log(`Логин и (или) Пароль введены неверно!`)
*/
//-----------------------------------------------------//-----------------------------------------------------//-----------------------------------------------------//-----------------------------------------------------

/*
Сколько будет 2 + 2?
Сколько будет 2 * 2?
У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?
У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?
Сколько будет 2 + 2 * 2?
*/
/*
let sum = +prompt("Сколько будет 2 + 2");
let mult = +prompt("Сколько будет 2 * 2");
let appleQuestion = +prompt(
  "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?"
);
let candyQuestion = +prompt(
  "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?"
);
let expression = +prompt("Сколько будет 2 + 2 * 2?");

let correctAnswerCounter = 0;
let incorrectAnswerCounter = 0;

const answerSum = 4;
if (sum === answerSum) {
  correctAnswerCounter++;
} else {
  incorrectAnswerCounter++;
}

const answerMult = 4;
if (mult === answerMult) {
  correctAnswerCounter++;
} else {
  incorrectAnswerCounter++;
}

const answerAppleQuestion = 1;
if (appleQuestion === answerAppleQuestion) {
  correctAnswerCounter++;
} else {
  incorrectAnswerCounter++;
}

const answerCandyQuestion = 12;
if (candyQuestion === answerCandyQuestion) {
  correctAnswerCounter++;
} else {
  incorrectAnswerCounter++;
}

const answerExpression = 6;
if (expression === answerExpression) {
  correctAnswerCounter++;
} else {
  incorrectAnswerCounter++;
}
console.log(
  `Конец теста! Правильные ответы - ${correctAnswerCounter}; Неправильные ответы - ${incorrectAnswerCounter}.`
);
*/
//-----------------------------------------------------//-----------------------------------------------------//-----------------------------------------------------//-----------------------------------------------------
/*const answer1 = true;
const answer2 = true;
const answer3 = false;

let q1 = confirm("JavaScript появился в 1995 году?");
if (answer1 === q1) {
  alert("Верно");
} else {
    alert("JavaScript появился в 1995 году")
}

let q2 = confirm("Спецификация JavaScript называется ECMAScript?");
if (answer2 === q2) {
    alert("Верно");
  } else {
      alert("Спецификация JavaScript называется ECMAScript")
  }

let q3 = confirm("JavaScript был создан за 1 месяц?");
if (answer3 === q3) {
  alert("Верно");
} else {
    alert("JavaScript был создан за 10 дней")
}*/
//-----------------------------------------------------//-----------------------------------------------------//-----------------------------------------------------//-----------------------------------------------------

/*for (let i = 0; i < 3; i += 1) {
    let newStudent = prompt('Введите имя нового студента!');
    newStudent = newStudent.trim();
    if (newStudent) {
       alert(`Добро пожаловать, ${newStudent}!`)
    }
 }

 let i = 0

 do{
    let newStudent = prompt('Введите имя нового студента!');
    newStudent = newStudent.trim();
    if (newStudent) {
       alert(`Добро пожаловать, ${newStudent}!`)
    }

    i++

 }while(i < 3)

let j = 0

while(j < 3){
    let newStudent = prompt('Введите имя нового студента!');
    newStudent = newStudent.trim();
    if (newStudent) {
       alert(`Добро пожаловать, ${newStudent}!`)
    }
    j++
}*/
//-----------------------------------------------------//-----------------------------------------------------//-----------------------------------------------------//-----------------------------------------------------

/*
let summ = 0

for(let i = 100; i > 0; i--){
     summ += i
 }
alert(summ);


for(let i = 0; i <= 100; i++){
    summ += i
}
console.log(summ);
*/
//-----------------------------------------------------//-----------------------------------------------------//-----------------------------------------------------//-----------------------------------------------------

/*
Если клиент потратил от 100$ до 300$, то скидка 10%;
Если клиент потратил от 300$ до 500$, то скидка 20%;
Если клиент потратил от 500$, то скидка 30%;
*/

// ---------------------- Restaraunt-----------------
/*
let clientName = "Igor";
let clientSpentForAllTime = 110;
let clientSpentToday = 325;
let discount = 0;

let lastesCount = clientSpentForAllTime + clientSpentToday;

if (lastesCount > 100 && lastesCount < 300) {
  discount = 10;
  clientSpentToday = clientSpentToday - (clientSpentToday * discount) / 100;
  alert(`Ваша скидка составила ${discount}%`);
} else if (lastesCount > 300 && lastesCount < 500) {
  discount = 20;
  clientSpentToday = clientSpentToday - (clientSpentToday * discount) / 100;
  alert(`Ваша скидка составила ${discount}%`);
} else if (lastesCount > 500) {
  discount = 30;
  clientSpentToday = clientSpentToday - (clientSpentToday * discount) / 100;
  alert(`Ваша скидка составила ${discount}%`);
} else {
  alert(
    `Добро пожаловать! Чтобы получить скидку в нашем ресторане, Вам необходимо накопить чеки на сумму не менне 100$`
  );
}

alert(
  `Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${lastesCount}$`
)
*/
/*
let clientName = prompt('Введите имя клиента').trim()
let clientSpentToday = +prompt('Сколько клиент потратил сегодня?').trim()
let clientSpentForAllTime = +prompt('Сколько клиент потратил за все время?').trim()


if(!clientSpentToday ?? !clientSpentForAllTime){
    alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом!');
    location.reload()
} else {
    let discount = 0;

let lastesCount = clientSpentForAllTime + clientSpentToday;

if (lastesCount > 100 && lastesCount < 300) {
  discount = 10;
  clientSpentToday = clientSpentToday - (clientSpentToday * discount) / 100;
  alert(`Ваша скидка составила ${discount}%`);
} else if (lastesCount > 300 && lastesCount < 500) {
  discount = 20;
  clientSpentToday = clientSpentToday - (clientSpentToday * discount) / 100;
  alert(`Ваша скидка составила ${discount}%`);
} else if (lastesCount > 500) {
  discount = 30;
  clientSpentToday = clientSpentToday - (clientSpentToday * discount) / 100;
  alert(`Ваша скидка составила ${discount}%`);
} else {
  alert(
    `Добро пожаловать! Чтобы получить скидку в нашем ресторане, Вам необходимо накопить чеки на сумму не менне 100$`
  );
}

alert(
  `Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${lastesCount}$`
)
}
*/

//let password = '1234G'//prompt('Введите пароль').trim()
/*
if(password.length >= 3 || password.length <= 20){
    for(let i = 0; i < password.length; i++){
        if(password[i].charCodeAt() > 65 && password[i].charCodeAt() < 91 ){
            console.log('ok');
        } 
    }
}
*/

// if(password.length >= 3 && password.length <= 20){
//     for(let i = 0; i < password.length; i++){
//       if((password[i].charCodeAt() >= 48 && (password[i].charCodeAt()<= 57) && (password[i].charCodeAt() <= 91) ) {
//         console.log(password[i]);

//     }
// }
/*
let clientName = "Igor";
let clientSpentForAllTime = 110;
let clientSpentToday = 10;
let discount = 0;

if (clientSpentForAllTime > 100 && clientSpentForAllTime < 300) {
  discount = 10;
} else if (clientSpentForAllTime > 300 && clientSpentForAllTime < 500) {
  discount = 20;
} else if (clientSpentForAllTime > 500) {
  discount = 30;
} else {
  aleert(`Добро пожаловать! Чтобы получить скидку в нашем ресторане, Вам необходимо накопить чеки на сумму не менне 100$`);
}
clientSpentToday -= (clientSpentToday * discount) / 100;

alert(`Ваша скидка составила ${discount}%`);

alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime + clientSpentToday}$`);
*/

/*
let clientName = prompt('Введите имя клиента').trim()
let clientSpentToday = +prompt('Сколько клиент потратил сегодня?').trim()
let clientSpentForAllTime = +prompt('Сколько клиент потратил за все время?').trim()


if(!clientSpentToday || !clientSpentForAllTime){
    alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом!');
    location.reload()
} else {

    let discount = 0;
    if (clientSpentForAllTime > 100 && clientSpentForAllTime < 300) {
      discount = 10;
    } else if (clientSpentForAllTime > 300 && clientSpentForAllTime < 500) {
      discount = 20;
    } else if (clientSpentForAllTime > 500) {
      discount = 30;
    } else {
      aleert(`Добро пожаловать! Чтобы получить скидку в нашем ресторане, Вам необходимо накопить чеки на сумму не менне 100$`);
    }
    clientSpentToday -= (clientSpentToday * discount) / 100;
    
    alert(`Ваша скидка составила ${discount}%`);
    
    alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime + clientSpentToday}$`);

}
*/
/*
let password = prompt('Введите пароль').trim()

let err = `Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз`;

if (password.length < 3 && password.length < 20) {
  alert(err);
} else {
  if (password.match(/[A-Z]/g) && password.match(/[0-9]/g)) {
   alert(`Пароль валидный. Добро пожаловать в аккаунт!`);
  } else {
   alert(err);
  }
}
*/
/*
\d или [0-9] цифры
\D или [^0-9] всё кроме цифр
[a-z] - латиница строчные 
[A-Z] - латиница заглавные
[a-zA-Z] - Вся латиница
\s - пробелы, преносы строк
+,*,? - количество повторений 
*/
/*
let password = prompt('Введите пароль').trim()

let err = `Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз`;


if (password.length < 3 && password.length < 20) {
  alert(err);
} else {
  let patternNum = /[0-9]/g;
  let match = password.match(patternNum);
  alert(match);
  if (match) {
    patternNum = /[A-Z]/g;
    match = password.match(patternNum);
    alert(match);
    if (match) {
      alert(`Пароль валидный. Добро пожаловать в аккаунт!`);
    } else {
      alert(err);
    }
  } else {
    alert(err);
  }
}
*/
