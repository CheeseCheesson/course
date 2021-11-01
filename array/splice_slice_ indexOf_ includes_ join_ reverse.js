// splice
// удалить элементы из массива и заменить их
// возвращает удалённые элементы
// изменяет текущий массив

const cars = ['BMW', 'Honda', 'Nissan', 'Opel']
cars.splice(0, 1) // 0 - индекс с которого удаляем включая этот индекс, 1 - инд, которым заканчиваем, не включая этот индекс
cars
cars.splice(0, 1, 'Shcoda') // на место удалённого элемента можно вставить другой элемент,  например Shcoda
cars


// slice
// не изменяет текущий массив
// возвращает обрензаные элементы
const any = ['BMW', 'Honda', 'Nissan', 'Opel']
const any2 = any.slice(0, 1) 
any2


// indexOf
const favoriteFood = ['Мороженное', 'Торт', 'Кофе', 'Стейк']
const indexOfFood = favoriteFood.indexOf('Кофе')
indexOfFood

// includes
const technologies = ['JavaScript', 'HTML', 'CSS']
const isTechnologyExist = technologies.includes('CSS')
isTechnologyExist

// split join
const listOfOrders = 'Майка, шорты, кросовки, рюкзак'
const listOfOrdersArray = listOfOrders.split(', ')
const ordersStr = listOfOrdersArray.join('; ')
ordersStr

// reverse
// изменяет текущий массив
const reverseTech = technologies.reverse()
technologies
reverseTech

// concat
const currentDeveloper = ['Kristina', 'Kira', 'Eva']
const newDeveloper = ['Kristina', 'Kira', 'Eva']
const allDev = currentDeveloper.concat(newDeveloper)
allDev

// ... spread

const allDevelopers = [
    ...favoriteFood,
    ...newDeveloper,
    'hello world',
    ...technologies
]
allDevelopers
