// linear time
function linear(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
}
linear(5);

// quadratic time
hasil = "";
for (let i = 0; i < 10; i++) {
  for (let j = 0; j <= i; j++) {
    hasil += "*";
  }
  hasil += "\n";
}
console.log(hasil);

//constant time
function constant(input) {
  console.log(input[1]);
}
constant(`hello world!`);
