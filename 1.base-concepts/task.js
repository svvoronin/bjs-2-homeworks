"use strict";

function solveEquation(a, b, c) {
  let arr;

  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr = [-b / (2 * a)];
  } else {
    arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }

  // код для задачи №1 писать здесь
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  let arr_string = ["Процентная ставка", "Начальный взнос", "Общая стоимость"];
  let arr_value = [percent, contribution, amount];

  for (let i = 0; i < arr_string.length; i++) {
    let output = checkIfNumber(arr_string[i], arr_value[i]);
    if (typeof output === "string") {
      return output;
    }
    arr_value[i] = output;
  }

  let n = monthDiff(new Date(), date);

  let P = arr_value[0] / 12 / 100;

  let S = arr_value[2] - arr_value[1];

  //totalAmount = S * (P + P / (Math.pow(1 + P, n) - 1)) + arr_value[2];

  totalAmount = ((S * P * (1 + P) ** n) / ((1 + P) ** n - 1)) * n;

  // код для задачи №2 писать здесь

  return Math.round(totalAmount * 100) / 100;
}

function checkIfNumber(param_name, param_value) {
  if (typeof param_value === "number" && isFinite(param_value)) {
    let output = param_value;
    return output;
  } else {
    let output = parseFloat(param_value);
    if (typeof output === "number" && isFinite(output)) {
      return output;
    } else {
      return `Параметр "${param_name}" содержит неправильное значение "${param_value}"`;
    }
  }
}

function monthDiff(d1, d2) {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}
