
const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10,
 }


const attacker = {
  archer: 30,
  footSoldier: 55,
  cavalry: 10,
  artillery: 3,
  ourArmyChances: 0,
  maximumChances: Object.keys(defender).length,
  winningInPercent: 0,
  checkChancesToWin(defenderObject) {
    console.log(this.archer > defenderObject.archer);
    if (this.archer > defenderObject.archer) {
      this.ourArmyChances += 1;
    }
    console.log(this.footSoldier > defenderObject.footSoldier);
    if (this.footSoldier > defenderObject.footSoldier) {
      this.ourArmyChances += 1;
    }
    console.log(this.cavalry > defenderObject.cavalry);
    if (this.cavalry > defenderObject.cavalry) {
      this.ourArmyChances += 1;
    }
    console.log(this.artillery > defenderObject.artillery);
    if (this.artillery > defenderObject.artillery) {
      this.ourArmyChances += 1;
    }
    console.log( this.ourArmyChances);
    console.log(  this.maximumChances);
    this.winningInPercent = this.ourArmyChances / this.maximumChances * 100



    return this.winningInPercent;

  },
  improveArmy() {
    this.archer += 5
    this.footSoldier += 5
    this.cavalry += 5
    this.artillery += 5
  },
  attack(defender) {

   if(+this.checkChancesToWin(defender) < 70){
       
       console.log(`Наши шансы равны ${this.ourArmyChances}/${this.maximumChances}. Необходимо укрепление!`);
     
       this.improveArmy()
       this.ourArmyChances = 0
   } else if(+this.checkChancesToWin(defender) > 70){
       console.log(`Мы усилились! Мы несомненно победим! Наши шансы высоки!`);
   }
  },
};

attacker.attack(defender)
attacker.attack(defender)
attacker.attack(defender)

console.log(attacker.winningInPercent);

console.log(attacker.ourArmyChances);