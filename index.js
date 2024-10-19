import CaesarCipher from "@dunkelhaiser/caesar-cipher";

export function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  return Array.from(string).reverse().join('');
}

export class calculator {
  constructor() {}
  static add(num1, num2) {
    return num1 + num2;
  }
  static subtract(num1, num2) {
    return num1 - num2;
  }
  static multiply(num1, num2) {
    return num1 * num2;
  }
  static divide(num1, num2) {
    return num1 / num2;
  }
}

export function caesarCipher(string) {
  return CaesarCipher.encrypt(string, 3);
}

function findAverage(numbers) {
  // Calculate the sum of all numbers in the array
  let sum = numbers.reduce((acc, num) => acc + num, 0);
  // Divide the sum by the number of elements to get the average
  return sum / numbers.length;
}

function findMinValue(arr) {
  return arr.reduce((min, current) => (current < min ? current : min), arr[0]);
}

function findMaxValue(arr) {
  return arr.reduce((max, current) => (current > max ? current : max), arr[0]);
}

export function analyzeArray(array) {
  return {
    average: findAverage(array),
    min: findMinValue(array),
    max: findMaxValue(array),
    length: array.length,
  };
}
