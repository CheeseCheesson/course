const hero = {
  name: "Batman",
  health: 100,
};

const enemy = {
  name: "Joker",
  health: 100,
};

function startGame(heroPlayer, enemyPlayer) {
    enemy
  heroPlayer.heatEnemy = function (enemyPlayer) {
    return enemyPlayer.health -= 10;
  };
  enemyPlayer.heatHero = function (heroPlayer) {
    return heroPlayer.health -= 10;
  };
  function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  console.log(heroPlayer.heatEnemy(enemyPlayer))

  while(heroPlayer.health >= 0) {
    if (getRandomNumberInRange(0, 2)) {

      if(enemyPlayer.heatHero(heroPlayer) <= 0){
        return `${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`
      }
    } else {
      heroPlayer.heatEnemy(enemyPlayer);

      if(heroPlayer.heatEnemy(enemyPlayer) <= 0){
        return `${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`
      }
    }
  }

}
console.log(startGame(hero, enemy));  
