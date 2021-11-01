function getDaysBeforeBirthday(nextBirthdayDate) {
  let nextBirthdayMS = nextBirthdayDate.getTime();
  let toDayMS = Date.now();
  return convertMsToDays(nextBirthdayMS, toDayMS)
}

function convertMsToDays(nextBirth, toDay) {
  let difference = nextBirth - toDay;
  let day = difference / (1000 * 60 * 60 * 24);
  return Math.floor(day)
}

let myBirthday = new Date("2022, 09, 07");


console.log(getDaysBeforeBirthday(myBirthday));







/*
let ms = myBirthday.getTime()

ms

1662498000000

let msNow = Date.now()

ms

1634638600000

let x = ms - msNow

let  y = x / (1000 * 60 *60 *24)
y

*/
