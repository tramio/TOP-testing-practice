function capitalize(string) {
  let capitalizedString
  if (!/^[a-z]+$/i.test(string)) {
    const firstLetterIndex = string.search(/[a-z]/i);
    const firstLetter = string.charAt(firstLetterIndex);
    const capitalizedFirstLetter = firstLetter.toUpperCase();
    capitalizedString = string.slice(0, firstLetterIndex) + capitalizedFirstLetter + string.slice(firstLetterIndex +1);
  } else {
    const firstLetter = string.charAt(0);
    const capitalizedFirstLetter = firstLetter.toUpperCase();
    const otherLetters = string.slice(1);
    capitalizedString = capitalizedFirstLetter + otherLetters; 
  }
  return capitalizedString;
}

export default capitalize;