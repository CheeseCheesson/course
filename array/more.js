const goals = [8, 1, 1, 3, 2, -1, 5];

const cloneGoals = [...goals];
let numberOfGoals = cloneGoals.sort((a, b) => {
  return b - a;
});


let loseGame = [];
let autoLose = []

cloneGoals.forEach((item) => {
  if (item > 0) {
    loseGame.push(item);
  } else{
    autoLose.push(item);
  }
});

loseGame.sort((a, b) => {
  return a - b;
});


let winSum = 0
loseGame.forEach(i => {
    winSum += i
})


alert(`Самый результативный матч был под номером ${goals.indexOf(numberOfGoals[0]) + 1}. В нем было забито ${numberOfGoals[0]} гол(ов).`);
alert(`Самые нерезультативные матчи были под номерами ${goals.indexOf(loseGame[0]) + 1} и ${goals.indexOf(loseGame[1]) + 2}. В каждом из них было забито по  ${loseGame[0]} и  ${loseGame[0]}  гол(ов).`);
alert(`Общее количество голов за сезон равно ${winSum}`);
alert(`Среднее количество голов за матч равно по ${Math.floor(winSum / goals.length)} гола за матч`);

if(!autoLose.length){
    alert(`Были автоматические поражения: нет`);
}else{
    alert(`Были автоматические поражения: да`);
}



numberOfGoals.reverse().forEach(i => {
    alert(`Релультат: ${i}`);
})