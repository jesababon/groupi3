
const helper = require('../src/helpers/helper')

describe('sum(a,b)', () => {
  test('should return the sum of a and b', () => {
    let three = helper.sum(1,2);
    expect(three).toBe(3)
  })
})

describe('sum(a,b)', () => {
  test('return should be greater than a and b individually', () => {
    let three = helper.sum(1, 2);
    expect(three).toBeGreaterThan(1) && expect(three).toBeGreaterThan(2)
  })
})

describe('getId(url)', () => {
  test('should return an 8 digit number as a string', () => {
    let id = helper.getId("event16653435")
    expect(id.length).toBe(8)
  })
})

describe('getEventId(params)', () => {
  test('should return an 8 digit parameter as NaN', () => {
    let id = helper.getEventId('16653435')
    expect(id).toBe(NaN)
  })
})

describe('clearArray(array)', () => {
  test('should return an empty array', () => {
    let testArray = [1,2]
    let array = helper.clearArray(testArray)
    expect(array.length).toBe(0)
  })
})

