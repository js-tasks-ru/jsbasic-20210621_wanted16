function camelize(str) {
  let arr = str.split('-'), firstElem = arr.shift();
  arr = arr.map((item, i) => item[0].toUpperCase() + item.slice(1));
  arr.unshift(firstElem);
  return arr.join('');
}
