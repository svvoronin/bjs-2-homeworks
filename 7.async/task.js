class AlarmClock {
  constructor(alarmCollection = [], timerId = null) {
    this.alarmCollection = alarmCollection;
    this.timerId = timerId;
  }

  addClock(time, callback, id) {
    if (id == undefined) {
      throw new Error(
        "Невозможно идентифицировать будильник. Параметр id не передан."
      );
    }
    if (this.timerId == null) {
      this.timerId = [id];
      this.alarmCollection.push({ id: id, time: time, callback: callback });
    } else if (this.timerId.indexOf(id) == -1) {
      this.timerId.push(id);
      this.alarmCollection.push({ id: id, time: time, callback: callback });
    } else {
      console.error("Будильник с таким id уже существует.");
    }
  }

  removeClock(id) {
    let original_length = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter((el) => el.id != id);
    if (original_length > this.alarmCollection.length) {
      console.log("(Звонок с id", id, "удален)");
    } else {
      "Звонка с id", id, "нет в первоначальном массиве";
    }
  }

  getCurrentFormattedTime() {
    const currentDate = new Date();
    const hours =
      currentDate.getHours() < 10
        ? `0${currentDate.getHours()}`
        : `${currentDate.getHours()}`;
    const minutes =
      currentDate.getMinutes() < 10
        ? `0${currentDate.getMinutes()}`
        : `${currentDate.getMinutes()}`;
    let time = `${hours}:${minutes}`;
    return time;
  }

  start() {
    this.intervalID = setInterval(() => {
      let currentTime = this.getCurrentFormattedTime();
      for (let i = 0; i < this.alarmCollection.length; i++) {
        checkClock(this.alarmCollection[i], currentTime);
      }
    }, 1000);

    function checkClock(alarmData, currentTime) {
      if (alarmData.time == currentTime) {
        setTimeout(alarmData.callback);
      }
    }
  }

  stop() {
    clearInterval(this.intervalID);
    this.timerId = null;
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
  printAlarms() {
    console.log(
      "Печать всех будильников в количестве:",
      this.alarmCollection.length
    );
    this.alarmCollection.forEach(func);

    function func(item) {
      console.log("Будильник №", item.id, "заведен на", item.time);
    }
  }
}

function testCase() {
  let clock;
  clock = new AlarmClock();
  clock.addClock("22:10", () => console.log("Пора вставать"), 1);
  clock.addClock(
    "22:11",
    () => {
      console.log("Давай,вставай уже!");
      clock.removeClock(2);
    },
    2
  );
  clock.addClock(
    "22:12",
    () => {
      console.log("Вставай,а то проспишь!");
      clock.clearAlarms();
      clock.printAlarms();
    },
    3
  );

  clock.printAlarms();
  clock.start();
}

testCase();
