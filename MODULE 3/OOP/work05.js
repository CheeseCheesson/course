class Developer {
  constructor(fullName, age, position) {
    this.fullName = fullName;
    this.age = age;
    this.position = position;
    this.technologies = [];
  }
  code() {}
  learnNewTechnology(technology) {
    this.technologies.push(...technology);
  }
}

class JuniorDeveloper extends Developer {
  constructor(fullName, age) {
    super(fullName, age);
    this.technologies = ["HTML", "CSS", "JavaScript"];
    this.position = "Junior";
  }
  code() {
    console.log(`Junior разработчик пишет код...`);
  }
}
class MiddleDeveloper extends Developer {
  constructor(fullName, age) {
    super(fullName, age);
    this.technologies = ["HTML", "CSS", "JavaScript", "React"];
    this.position = "Middle";
  }
  code() {
    console.log(`Middle разработчик пишет код...`);
  }
}
class SeniorDeveloper extends Developer {
  constructor(fullName, age) {
    super(fullName, age);
    this.technologies = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];
    this.position = "Senior";
  }
  code() {
    console.log(`Senior разработчик пишет код...`);
  }
}
const developer = new Developer('Вася', 45)
const juniorDeveloper = new JuniorDeveloper("Анастасия", 20);
const middleDeveloper = new MiddleDeveloper("Игорь", 25);
const seniorDeveloper = new SeniorDeveloper("Максим", 30);

juniorDeveloper.code();
middleDeveloper.code();
seniorDeveloper.code();

console.log(
  juniorDeveloper.fullName,
  juniorDeveloper.age,
  juniorDeveloper.position
);
console.log(
  middleDeveloper.fullName,
  middleDeveloper.age,
  middleDeveloper.position
);
console.log(
  seniorDeveloper.fullName,
  seniorDeveloper.age,
  seniorDeveloper.position
);

juniorDeveloper.learnNewTechnology(['go', 'php'])
