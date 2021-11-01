const footballer = {
  fullName: "Cristiano Ronaldo",
  attack() {
    console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
  },
  scoreGoal(sound) {
    console.log(`${this.fullName} забил гол! Вот это да!`);
    this.celebrate(sound);
  },
  celebrate(sound) {
    console.log(sound);
  },
  goToSubstitution: function (newPlayer) {
    console.log(
      `${this.fullName} уходит на замену. На поле выходит ${newPlayer}`
    );
  },  
};


 const attack = footballer.attack;
 attack.bind(footballer)()

 const score = footballer.scoreGoal;
 score.call(footballer, 'Сиииии')
 
 const substitute = footballer.goToSubstitution;
 substitute.apply(footballer, ['Paulo Dibala'])


 const car = {
    name: 'Audi',
    drive: () => {
       console.log(this);
    }
 }

 console.log(car.drive())