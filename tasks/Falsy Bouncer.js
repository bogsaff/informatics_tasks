function bouncer(arr) {
  var array = [];
  for (var i = 0; i < arr.length; i++) {
    if(arr[i]) array.push(arr[i]);
  }
  return array;
}

console.log(bouncer([7, "ate", "", false, 9]));


if (undefined) {
  console.log("true");
} else {
  console.log("false");
}
