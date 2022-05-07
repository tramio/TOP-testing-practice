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
  const analyze = () => {
    const average = getAverage();
    const min = getMin();
    let result = [average, min];
    return result;
  }
  const analysis = analyze();
  return analysis;
}

export default analyzeArray;