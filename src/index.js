exports.min = function min (array) {
  if (!array || array === []) return 0;
  
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
  if (!array || array === []) return 0;
  
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  if (!array || array === []) return 0;
  
  let sum = 0;
  array.forEach(el => sum += el);
  
  return sum / array.length;
}
