// ------------------ Parent Class ------------------
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  isAvailable(sum) {
    this.sum = sum;
    if (this.sum <= this.stock) return true;
    else return false;
  }
  getTotalPrice() {
    return (this.sum * this.price).toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }
  getSummary() {
    return `Anda akan membeli ${this.name} ${this.brand}, warna ${
      this.color
    }, sejumlah ${this.sum} unit, dengan harga total ${this.getTotalPrice()}.`;
  }
}

// ------------------ Child Class ------------------
class Monitor extends Product {
  stock = 10;
  constructor(name, brand, price, color) {
    super(name, price);
    this.color = color;
    this.brand = brand;
  }
  Checkout(sum) {
    if (this.isAvailable(sum) === true) return this.getSummary();
    else
      return `Jumlah order anda melebihi stock! (tersedia ${this.stock} unit)`;
  }
}

class Keyboard extends Product {
  stock = 15;
  constructor(name, brand, price, color) {
    super(name, price);
    this.color = color;
    this.brand = brand;
  }
  Checkout(sum) {
    if (this.isAvailable(sum) === true) return this.getSummary();
    else
      return `Jumlah order anda melebihi stock! (tersedia ${this.stock} unit)`;
  }
}

const samsung = new Monitor(`monitor`, `Samsung`, 2000000, `hitam`);
console.log(samsung.Checkout(11)); // stock = 10 unit

const logitech = new Keyboard(`Keyboard`, `Logitech`, 600000, `putih`);
console.log(logitech.Checkout(9)); // stock = 15 unit
