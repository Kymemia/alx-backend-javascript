export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  return [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.substring(startString.length))
    .join('-');
}
