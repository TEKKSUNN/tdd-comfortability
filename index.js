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

export function analyzeArray(array) {}
