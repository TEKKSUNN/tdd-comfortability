import { analyzeArray, caesarCipher, calculator, capitalize, reverseString } from "./index";

function testCallback(wordObject, callbackfn) {
  expect(callbackfn(wordObject.test)).toBe(wordObject.result);
}

function testCallbackStrict(wordObject, callbackfn) {
  expect(callbackfn(wordObject.test)).toStrictEqual(wordObject.result);
}

function testCapitalize(wordObject) {
  testCallback(wordObject, capitalize);
}

function testReverseString(wordObject) {
  testCallback(wordObject, reverseString);
}

function testNumCallback(callbackfn, numObject) {
  expect(callbackfn(...numObject.test)).toBe(numObject.result);
}

function testCalcAdd(numObject) {
  testNumCallback(calculator.add, numObject);
}

function testCalcSubtract(numObject) {
  testNumCallback(calculator.subtract, numObject);
}

function testCalcMultiply(numObject) {
  testNumCallback(calculator.multiply, numObject);
}

function testCalcDivide(numObject) {
  testNumCallback(calculator.divide, numObject);
}

function testCaesarCipher(wordObject) {
  testCallback(wordObject, caesarCipher);
}

function testAnalyzeArray(arrayTestCase) {
  testCallbackStrict(arrayTestCase, analyzeArray);
}

it('Capitalize works on lowercased words', () => {
  const testCases = [
    {'test': 'abc', 'result': 'Abc'},
    {'test': 'good', 'result': 'Good'},
    {'test': 'global', 'result': 'Global'},
  ];
  testCases.forEach(testCapitalize);
});

it('Capitalize works on camel cased words', () => {
  const testCases = [
    {'test': 'camelCase', 'result': 'CamelCase'},
    {'test': 'doNot', 'result': 'DoNot'},
    {'test': 'niceGame', 'result': 'NiceGame'},
  ];
  testCases.forEach(testCapitalize);
});

it('Capitalize leaves already capitalized words alone', () => {
  const testCases = [
    {'test': 'Donut', 'result': 'Donut'},
    {'test': 'Hamburger', 'result': 'Hamburger'},
    {'test': 'Pizza', 'result': 'Pizza'},
  ];
  testCases.forEach(testCapitalize);
});

it('reverseString works on lowercased words', () => {
  const testCases = [
    {'test': 'abc', 'result': 'cba'},
    {'test': 'good', 'result': 'doog'},
    {'test': 'global', 'result': 'labolg'},
  ];
  testCases.forEach(testReverseString);
});

it('reverseString works on camel cased words', () => {
  const testCases = [
    {'test': 'camelCase', 'result': 'esaClemac'},
    {'test': 'doNot', 'result': 'toNod'},
    {'test': 'niceGame', 'result': 'emaGecin'},
  ];
  testCases.forEach(testReverseString);
});

it('reverseString works on reversed words', () => {
  const testCases = [
    {'test': 'tunoD', 'result': 'Donut'},
    {'test': 'regrubmaH', 'result': 'Hamburger'},
    {'test': 'azziP', 'result': 'Pizza'},
  ];
  testCases.forEach(testReverseString);
});

it('calculator.add works normally', () => {
  const testCases = [
    {'test': [1, 2], 'result': 3},
    {'test': [100, 312], 'result': 412},
    {'test': [1208, 129], 'result': 1337},
  ];
  testCases.forEach(testCalcAdd);
});

it('calculator.subtract works normally', () => {
  const testCases = [
    {'test': [1, 2], 'result': -1},
    {'test': [100, 312], 'result': -212},
    {'test': [1208, 129], 'result': 1079},
  ];
  testCases.forEach(testCalcSubtract);
});

it('calculator.divide works normally', () => {
  const testCases = [
    {'test': [10, 2], 'result': 5},
    {'test': [64, 8], 'result': 8},
    {'test': [144, 12], 'result': 12},
  ];
  testCases.forEach(testCalcDivide);
});

it('calculator.multiply works normally', () => {
  const testCases = [
    {'test': [10, 2], 'result': 20},
    {'test': [64, 8], 'result': 512},
    {'test': [144, 12], 'result': 1728},
  ];
  testCases.forEach(testCalcMultiply);
});

it('caesarCipher works as intended', () => {
  const testCases = [
    {'test': 'Hello, World!', 'result': 'Khoor, Zruog!'},
    {'test': 'Nein', 'result': 'Qhlq'},
    {'test': 'Shut Up!', 'result': 'Vkxw Xs!'},
  ]
  testCases.forEach(testCaesarCipher);
});

it('analyzeArray gives correct objects', () => {
  const testCases = [
    {
      'test': [1,8,3,4,2,6],
      'result': {
        average: 4,
        min: 1,
        max: 8,
        length: 6
      }
    },
    {
      'test': [10, 20, 30, 40, 50, 60],
      'result': {
        average: 35,
        min: 10,
        max: 60,
        length: 6
      }
    },
    {
      'test': [5, 10, 15, 20, 25, 30, 35],
      'result': {
        average: 20,
        min: 5,
        max: 35,
        length: 7
      }
    },
  ]
  testCases.forEach(testAnalyzeArray);
});
