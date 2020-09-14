function booWho(bool) {
  if (typeof bool === "boolean") {
    return true;
  }else {
    return false;
  }
}

function booWho2(bool) {
  return typeof bool === "boolean"
}

booWho(null);

console.log(booWho(true),booWho(true));
console.log(booWho2(true),booWho2(true));
//map = карта = словарь = dictionary
let a = true//не типизированный язык

console.log(typeof a);

//map = карта = словарь = dictionary

//ключ - значение
