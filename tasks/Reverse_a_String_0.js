function reverseString(str) {
  var number = str.length - 1;
  var str1 = "";
  let k = str.length - 1
  for(k; k => -1; k--){
    //str1.push(str[i])
    console.log(k);
    str1 += str[k];
  }
  return str1;
}
console.log("reverse string = "+reverseString("hello"))
