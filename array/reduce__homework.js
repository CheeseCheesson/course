const numbers = [10, 4, 100, -5, 54, 2];

//-----------------------for
let cubicDegreeFor = [];
let sumFor = 0;
for (let i = 0; i < numbers.length; i++) {
  cubicDegreeFor;
  cubicDegreeFor.push(numbers[i] ** 3);

  sumFor += cubicDegreeFor[i];
  sumFor;
}
sumFor;
//-----------------------for of
let cubicDegreeForOf = [];
let sumForOf = 0;

for (let i of numbers) {
  cubicDegreeForOf.push(i ** 3);
}
for (let j of cubicDegreeForOf) {
  sumForOf += j;
}
sumForOf;

//-----------------------forEach
let cubicDegreeForEach = [];
let sumForEach = 0;

numbers.forEach((item) => cubicDegreeForEach.push(item ** 3));
cubicDegreeForEach.forEach((i) => (sumForEach += i));
console.log(sumForEach);

//-----------------------reduce
const sumReduce = numbers.reduce((acc, item, indx) => {
  return acc + item ** 3;
}, 0);
sumReduce