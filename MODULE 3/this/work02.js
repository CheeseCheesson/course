const dog = {
  name: "Чарли",
  type: "Собака",
  makeSound() {
    return "Гав-Гав";
  },
};

const bird = {
  name: "Петя",
  type: "Воробей",
  makeSound() {
    return "Чик-чирик";
  },
};

function makeDomestic(isDomestic) {
  console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
  this.isDomestic = isDomestic;
  console.log(this);
  return this;
}

makeDomestic.bind(dog, true)();
console.log(dog)

makeDomestic.call(bird, false);
console.log(bird);

makeDomestic.apply(bird, [false]);
console.log(bird);
