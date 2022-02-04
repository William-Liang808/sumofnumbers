const _ = require('underscore');

function sumFor(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i];
  }
  return total;
}

function sumWhile(data) {
  let total = 0;
  while (data.length > 0) {
    total += data.pop();
  }
  return total;
}

function sumRecursion(data) {
  if (data.length < 1) {
    return 0;
  }
  return data.pop() + sumRecursion(data);
}

function sumTheSimpleWay(data) {
  return _.reduce(data, function (memo, key) { return memo + key; }, 0);
}

console.log(sumFor([1, 2, 3, 4, 5]));
console.log(sumWhile([1, 2, 3, 4, 5]));
console.log(sumRecursion([1, 2, 3, 4, 5]));
console.log(sumTheSimpleWay([1, 2, 3, 4, 5]));
