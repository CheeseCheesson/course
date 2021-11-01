const myName = 'Kristina'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'V. Minin'
const reasonText = 'Мне нравится создавать что-то полезное'
const numberOfMonth = 3
const myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен(а), что пройду данный курс до конца!`
console.log(myInfoText.replaceAll('JavaScript', programmingLanguage.toUpperCase()));
console.log(myInfoText.length, myInfoText[0],  myInfoText[myInfoText.length-1]);

let userName = prompt('Как Вас зовут', 'Вася').trim().toLocaleLowerCase()
let userAge = +prompt('Сколько Вам лет', '18').trim()
alert(`Вас зовут ${userAge}`)
alert(`Вам ${userAge} лет`)




let userString = prompt('Введите текст для обрезки', 'lorem').trim()
let startSliceIndex = +prompt('Введите индекс, с которого нужно начать обрезку строки').trim()
let endSliceIndex = +prompt('Введите индекс, которым нужно закончить обрезку строки').trim()

let finalStr = userString.slice(startSliceIndex, endSliceIndex)
alert(`Результат: ${finalStr}`)








let userText = prompt('Введите текст', 'lorem').trim()
let wordFromText = prompt('Введите слово из текста').trim()

let indexOfWord = userText.indexOf(wordFromText)
alert(`Результат: ${userText.slice(0, indexOfWord)}`)

let javaScriptDescription = `JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.`;


let formatStr = javaScriptDescription
                .slice(0, Math.floor(javaScriptDescription.length / 2))
                .replaceAll("а", "А")
                .repeat(3);

console.log(javaScriptDescription[javaScriptDescription.length / 2]);
console.log(formatStr);
