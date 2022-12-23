function array_diff(a, b) {
  return a.filter(elem => !b.includes(elem));
}

console.log(array_diff([1, 2, 3, 4, 5], [3, 4, 5]));