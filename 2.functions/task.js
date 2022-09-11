"use strict";

// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg, el;

  max = -Infinity;
  min = Infinity;
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    el = arr[i];
    if (el < min) {
      min = el;
    }
    if (el > max) {
      max = el;
    }
    sum += el;
  }

  avg = sum / arr.length;
  avg = parseFloat(avg.toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum, el;
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    el = arr[i];
    sum += el;
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max, sum_arr;
  max = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    sum_arr = func(arrOfArr[i]);
    if (sum_arr > max) {
      max = sum_arr;
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  let min, max, el, diff;

  max = -Infinity;
  min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    el = arr[i];
    if (el < min) {
      min = el;
    }
    if (el > max) {
      max = el;
    }
  }

  diff = Math.abs(max - min);

  return diff;
}
