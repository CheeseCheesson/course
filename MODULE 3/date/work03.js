let sumDay = new Date();

function addDays(date, days = 1) {
  let countDay = 1;
  for (let i = 0; i < days; i++) {
    countDay += 86400000;
  }

  date = new Date(Date.now() + countDay);

  let day = date.getDate();

  if (day < 10) {
    day = `0${day}`;
  }

  let month = date.getMonth() + 1;

  if (month < 10) {
    month = `0${month}`;
  }

  let year = date.getFullYear() % 100;

  if (year < 10) {
    year = `0${year}`;
  }

  return `${day}.${month}.${year}`;
}

console.log(addDays(sumDay, 100));

//86 400 000
