/* - Buatlah sebuah class Product.
- Kelas tersebut memiliki property name, price, stock.
- Kelas tersebut method : getSummary(), isAvailable(sum) mereturn true / false tergantung jumlah yang diminta 
  ( misal stok ada 3, dan yang diminta 4, maka akan return false ), getTotalPrice() (stok x price)
- Buatlah minimal 2 child class, contoh : Clothes, Watches, Gadget, etc.
- Child class harus memiliki setidaknya satu property yang berbeda dengan parents nya, contoh : color, size, etc.
- Child class harus memiliki method bernama Checkout(sum) yang akan mengembalikan rincian pembelian produk, 
  contoh : Anda akan membeli mouse Logitech G15, sejumlah 2, dengan harga total 600.000.
*/

class Product {
  constructor(name, price, stock) {
    (this.name = name), (this.pricce = price), (this.stock = stock);
  }
  getSummary() {}
  isAvailable(sum) {}
}

class Clothes extends Product {
  constructor(color) {
    super(), this.color;
  }
  Checkout(sum) {}
}

class Gadget extends Product {
  constructor() {}
  Checkout(sum) {}
}

const baju = new Clothes(1);
console.log(baju);
