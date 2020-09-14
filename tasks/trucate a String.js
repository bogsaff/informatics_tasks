function truncateString(str, num) {
  var str1 = str.slice(0, num);
  if(str.length > num){
    return str1 + "...";
  }else {
    return str;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
