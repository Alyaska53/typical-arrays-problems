exports.min = function min (array) {
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  let sum = 0;
  array.forEach(el => sum += el);
  return sum / array.length;
}
