const calculator = ((a, b) => {
  const add = (a, b) => {
    return a + b;
  }
  return {
    add,
  }
})();

const r = calculator.add(2.3, 3.6);
r
export default calculator;