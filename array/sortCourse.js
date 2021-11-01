const salariesOfDevelopers = [400, 500, 520, 1000, 890, 3000];
let list = ['Дельта', 'Альфа', 'Чарли', 'Браво'];

/*
    sort сравнивает результат вычислений с 0
    >0
    <0
    ==0
*/
// сортировка чисел по возрастанию
let sortArr = salariesOfDevelopers.sort((a, b) => {
    return a - b
})

sortArr


// сортировка чисел по убыванию
let sortArr2 = salariesOfDevelopers.sort((a, b) => {
    return b - a
})
salariesOfDevelopers
sortArr2


// сортировка строк по возрастанию

let arrStr = list.sort((a, b) => {
    if(a > b) {
        return 1
    }
    if(a < b) {
        return -1
    }
    return 0
})
list
arrStr

// сортировка строк по убыванию

let arrStr2 = list.sort((a, b) => {
    if(a < b) {
        return 1
    }
    if(a > b) {
        return -1
    }
    return 0
})
list
arrStr2