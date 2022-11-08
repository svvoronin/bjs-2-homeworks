function parseCount(GivenNumber) {
  const parsedNumber = Number.parseInt(GivenNumber, 10);
  if (Number.isNaN(parsedNumber)) {
    throw new Error("Невалидное значение");
  }
  return parsedNumber;
}

function validateCount(GivenNumber) {
  try {
    return parseCount(GivenNumber);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (a + b < c || a + c < b || b + c < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    const semiPeriod = 0.5 * (this.a + this.b + this.c);

    return parseFloat(
      Math.sqrt(
        semiPeriod *
          (semiPeriod - this.a) *
          (semiPeriod - this.b) *
          (semiPeriod - this.c)
      ).toFixed(3)
    );
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    let triangle = {
      getPerimeter() {
        return "Ошибка! Треугольник не существует";
      },
      getArea() {
        return "Ошибка! Треугольник не существует";
      },
    };
    return triangle;
  }
}
