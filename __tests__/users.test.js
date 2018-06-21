
const sum = function (a,b) {
  return a+b;
}

describe('sum(a,b)', () => {
  test(`should return the sum of two numbers`, () => {
    let sumNums = sum(1,2)
    expect(sumNums).toBe(3);
  });
});
