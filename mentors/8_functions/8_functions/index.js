const makeAnimalSound = function(animalName, animalSound) {
  return `${animalName} произносит '${animalSound}'`;
};

function getFullName(name, surname) {
  return `${name} ${surname}`;
}

const multiplyNumbers = (number1, number2) => number1 * number2;

console.log('makeAnimalSound', makeAnimalSound('Собака', 'Гав-Гав'));
console.log('makeAnimalSound', getFullName('Maksim', 'Filanovich'));
console.log('makeAnimalSound', multiplyNumbers(5, 10));
