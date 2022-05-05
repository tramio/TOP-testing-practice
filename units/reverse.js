const reverse = string => {
  const myString = string.toString();
  return myString.split("").reverse().join("");
}

export default reverse;