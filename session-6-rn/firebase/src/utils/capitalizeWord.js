/**
 *
 * @param {String} str
 */
function capitalizeWord(str) {
  const firstLetter = str.slice(0, 1);
  const restWord = str.slice(1);
  return firstLetter + restWord;
}

export default capitalizeWord;
