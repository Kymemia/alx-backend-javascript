export default function cleanSet(set, startString) {
  const finalProd = [];
  Array.from(set).forEach((value) => {
    if (value.startsWith(startString)) {
      finalProd.push(value.slice(startString.length));
    }
  });
  return finalProd.join('-');
}
