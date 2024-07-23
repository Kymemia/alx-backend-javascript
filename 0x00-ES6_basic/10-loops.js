export default function appendToEachArrayValue(array, appendString) {
  const result = array.map((value) => appendString + value);
  return result;
}
