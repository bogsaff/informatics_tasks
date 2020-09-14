function repeatStringNumTimes(str, num) {
  var string = "";
  var i = 1;
  while (i <= num) {
    string += str;
    i++;
  }
  return string;
}

console.log(repeatStringNumTimes("abc", 3));
