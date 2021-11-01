class CarService {
  static DefaultWorkingHours = {
    from: "9:00",
    till: "20:00",
  };

  constructor(name, workingHours = DefaultWorkingHours) {
    this.name = name;
    this.workingHours = {
      from: workingHours.from,
      till: workingHours.till,
    };
  }

  repairCar(carName) {
    if (!carName) {
      console.error(
        `Вам необходимо указать название машины, чтобы ее отремонтировать`
      );
      return;
    }
    if (+this.workingHours.from.split(":")[0] > 7 && +this.workingHours.till.split(":")[0] < 21) {
      console.log(`Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста`);
    } else {
      console.log("К сожалению, мы сейчас закрыты. Приходите завтра");
    }
  }
}

let x = +"8:00".split(":")[0];
x;

const carService = new CarService("RepairCarNow", {
  from: "8:00",
  till: "20:00",
});
carService;
carService.repairCar("Nissan");
