const salariesOfDevelopers = [400, 500, 520, 1000, 890, 3000]

salariesOfDevelopers.map((item, index, array) => {
    console.log('item', item);
    console.log('index', index);
    console.log('array', array);
})


// map не изменяет массив, а возвращает новый

const bigSalaries = salariesOfDevelopers.map((salary)=>{
    return salary ** 2
})

bigSalaries


// filter не изменяет массив, а возвращает новый

let salariesFilter = salariesOfDevelopers.filter((salary, index, array)=> {
    // return salary > 700
    console.log(index);
    return index % 2 === 0
})
salariesFilter


//find ищеь элемент в массиве по условию, если не находит, то возвращает undefined
// не изменяет массив, а возвращает новый

const salaryFind = salariesOfDevelopers.find((salary, index, array)=> {
    // return salary === 1000
    return salary > 1000
})
salaryFind


//findIndex ищеь индкус в массиве по условию, если не находит, то возвращает -1
// не изменяет массив, а возвращает новый

const salaryFindIndex = salariesOfDevelopers.findIndex((salary, index, array)=> {
    // return salary === 1000
    return salary > 1000
})

salaryFindIndex

// some - возвращает булево значение

const salarySome = salariesOfDevelopers.some((salary, index, array)=> {
    // return salary === 1000
    return salary < 300
})

salarySome

// every - возвращает булево значени, если ВСЕ эдементы в массиве удовлетворяют значению

const salaryAllelementsEvery = salariesOfDevelopers.every((salary, index, array)=> {
    // return salary === 1000
    return salary > 300
})
salaryAllelementsEvery