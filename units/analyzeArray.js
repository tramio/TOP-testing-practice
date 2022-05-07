const analyzeArray = (array) => {
  const getAverage = () => {
    const sum = array.reduce((a, b) => a + b, 0);
    const items = array.length;
    const average = sum / items;
    return average;
  }
  const getMin = () => {
    const min = array.reduce((a, b) => a < b ? a : b);
    return min;
  }
  const getMax = () => {
    const max = array.reduce((a, b) => a > b ? a : b);
    return max;
  }
  const analyze = () => {
    const average = getAverage();
    const min = getMin();
    const max = getMax();
    let result = [average, min, max];
    return result;
  }
  const analysis = analyze();
  return analysis;
}

export default analyzeArray;