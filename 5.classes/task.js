class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = state;
    this.type = type;
  }

  fix() {
    this._state *= 1.5;
  }

  set state(NewState) {
    this._state = NewState;
  }
  get state() {
    if (this._state > 100) {
      this._state = 100;
    } else if (this._state < 0) {
      this.state = 0;
    }

    return this._state;
  }
}

const sherlock = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
);
sherlock.fix();
console.log(sherlock.state);

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] == value) {
        return this.books[i];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name == bookName) {
        let bookToGive = this.books[i];
        this.books.splice(i, 1);
        return bookToGive;
      }
    }
    return null;
  }
}

const library = new Library("Библиотека имени Ленина");
library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);

library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

  addMark(grade, subject) {
    if (grade < 1 || grade > 5) {
      return console.log("Ошибка, оценка должна быть числом от 1 до 5");
    }

    if (this.marks === undefined) {
      this.marks = [];
      this.marks[subject] = [grade];
    } else if (this.marks[subject] === undefined) {
      this.marks[subject] = [grade];
    } else {
      this.marks[subject].push(grade);
    }
  }

  getAverageBySubject(subject) {
    if (this.marks === undefined || this.marks[subject] === undefined) {
      return "Несуществующий предмет";
    } else {
      return (
        this.marks[subject].reduce((a, b) => a + b, 0) /
        this.marks[subject].length
      );
    }
  }
  getAverage() {
    if (this.marks === undefined) {
      return null;
    } else {
      let keys = Object.keys(student.marks);
      let all_grades = [];
      for (let i = 0; i < keys.length; i++) {
        all_grades.push(...this.marks[keys[i]]);
      }
      return all_grades.reduce((a, b) => a + b, 0) / all_grades.length;
    }
  }

  exclude(reason) {
    if (this.marks !== undefined) {
      delete this.marks;
      this.excluded = reason;
    }
  }
}
