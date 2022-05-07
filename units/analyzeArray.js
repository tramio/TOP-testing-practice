const analyzeArray = (array) => {
  const getAverage = () => {
    const sum = array.reduce((a, b) => a + b, 0);
    const items = array.length;
    const average = sum / items;
    return average;
  }
  const analyze = () => {
    let average = getAverage();
    let result = [average];
    return result;
  }
  const average = getAverage();
  const result = analyze();

  return average;
}

export default analyzeArray;