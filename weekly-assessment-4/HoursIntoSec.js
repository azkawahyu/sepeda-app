function howManySeconds(a) {
  return isNaN(a) ? "Hanya angka" : a * 3600;
}

console.log(howManySeconds(2));
console.log(howManySeconds(10));
console.log(howManySeconds(24));
