function getMinMax(str) {
  let min = 0, obj = {};
  str.split(/[\s,]+/).filter(item => {
    console.log(+item)
    if (+item < min) {
      min = +item;
      obj.min = +item;
    } else {
      obj.max = +item;
    }
  });
  return obj;
}
