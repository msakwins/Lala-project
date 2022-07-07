import sort from '../utils/sort';

const goodLetter = [{customer_name: 'aa a'}, {customer_name: 'ba ab'}, {customer_name: 'aa bb'}];
const badLetter = [{customer_name: 'aa bb'}, {customer_name: 'aa a'}, {customer_name: 'ba ab'}];

const goodFontaine = [{customer_name: 'Jean de Fontaine'}, {customer_name: 'Jean de La Fontaine'}, {customer_name: 'Jean-Marie de La Fontaine Salut'}];
const badFontaine = [{customer_name: 'Jean-Marie de La Fontaine Salut'}, {customer_name: 'Jean de La Fontaine'}, {customer_name: 'Jean de Fontaine'}];

test('verify sorting basic', () => {
  expect(sort([], 'name', 'ASC')).toStrictEqual([]);
});

test('verify sorting basic1', () => {
  expect(sort(badLetter, 'name', 'ASC')).toStrictEqual(goodLetter);
});

test('verify sorting basic1', () => {
  expect(sort(badFontaine, 'name', 'ASC')).toStrictEqual(goodFontaine);
});