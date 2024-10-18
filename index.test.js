import { capitalize, reverseString } from "./index";

function testCapitalize(wordObject) {
  return expect(capitalize(wordObject.test)).toBe(wordObject.result);
}

function testReverseString(wordObject) {
  return expect(reverseString(wordObject.test)).toBe(wordObject.result);
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