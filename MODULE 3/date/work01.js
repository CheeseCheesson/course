function getDateFormat(date, separator = ".") {
  let day = date.getDate();
  day
  if (day < 10) {
    day = `0${day}`;
  }

  let month = date.getMonth() + 1;
  month
  if (month < 10) {
    month = `0${month}`;
  }

  let year = date.getFullYear() % 100;
  year
  if (year < 10) {
    year = `0${year}`;
  }

  return day + separator + month + separator + year;
}

let date = new Date(2031, 4, 5);

console.log(getDateFormat(date, "-"));
