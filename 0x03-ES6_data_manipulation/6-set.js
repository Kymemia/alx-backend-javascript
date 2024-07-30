export default function setFromArray(array) {
  const nSet = new Set(array);
  return (`Set { ${[...nSet].join(', ')} }`);
}
