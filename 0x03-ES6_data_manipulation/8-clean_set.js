export default function cleanSet(set, startString) {
  if (!set || !startString || typeof startString !== 'string' || !startString.length || set.size === 0) {
    return '';
  }
  return Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}
