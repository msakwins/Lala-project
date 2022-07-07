import sortData from '../utils/sort';

test('verify sorting basic', () => {
  expect(sortData([], 'name', 'ASC')).toStrictEqual([]);
});

test('verify sorting basic1', () => {
  expect(sortData([{customer_name: 'aa'}, {customer_name: 'cc'}, {customer_name: 'bb'}], 'name', 'ASC')).toStrictEqual([{customer_name: 'aa'}, {customer_name: 'bb'}, {customer_name: 'cc'}]);
});