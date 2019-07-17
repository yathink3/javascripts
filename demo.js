const arr = [ ['a', 'b'],['c', 'd']];
  const convert = (data) =>
    data.reduce((obj, keyValue) => {
      obj[keyValue[0]] = keyValue[1];
      return obj;
    }, {});
  convert(arr);
  console.log(convert(arr));
  