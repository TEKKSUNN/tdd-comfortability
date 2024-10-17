import { capitalize } from "./index";

function testCapitalize(wordObject) {
  return expect(capitalize(wordObject.test)).toBe(wordObject.result);
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