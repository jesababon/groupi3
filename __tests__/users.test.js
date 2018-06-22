
const helper = require('../src/helpers/helper')

const sum = function (a,b) {
  return a+b;
}

describe('sum(a,b)', () => {
  test(`should return the sum of two numbers`, () => {
    let sumNums = sum(1,2)
    expect(sumNums).toBe(3);
  });
});

describe('getId(url)', () => {
  test('should return an 8 digit number as a string', () => {
    let id = helper.getId("event16653435")
    expect(id.length).toBe(8)
  })
})

describe('getEventId(params', () => {
  test('should return an 8 digit parameter as NaN', () => {
    let id = helper.getEventId('16653435')
    expect(id).toBe(NaN)
  })
})
