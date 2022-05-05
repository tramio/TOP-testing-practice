const calculator = ((a, b) => {
  const add = (a, b) => {
    return a + b;
  }
  const substract = (a, b) => {
    return a - b;
  }
  return {
    add,
    substract,
  }
})();
export default calculator;