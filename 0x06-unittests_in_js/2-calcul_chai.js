module.exports = function calculateNumber (type, a, b) {
  const roundedI = Math.round(a);
  const roundedII = Math.round(b);

  if (type === 'SUM') {
    return roundedI + roundedII;
  } else if (type === 'SUBTRACT') {
    return roundedI - roundedII;
  } else if (type === 'DIVIDE') {
    if (roundedII === 0) {
      return 'Error';
    }
    return roundedI / roundedII;
  } else {
    throw new Error('Invalid type');
  }
};
