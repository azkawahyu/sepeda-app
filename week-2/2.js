class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
    getSummary() {
        console.log("Produk : "+ this.name+
        ", Brand : "+ this.brand+ 
        ", Type : "+ this.type+
        ", Warna : "+ this.colour+
        ", Harga : "+ this.price+
        ", Sisa Stock : "+ this.stock)
      }
    isAvailable(sum) { 
      if (sum <= this.stock){
        return true;
      } else {
        return false;
      }   
    }
    getTotalPrice() {
      return (this.stock * this.price);
    }
  }
  
  class Mouse extends Product {
    constructor(name, brand, type, colour, price, stock) {
      super(name, price);
      this.brand = brand;
      this.type = type;
      this.colour = colour;
      this.stock = stock;
    }
    Checkout(sum) {
        if (this.isAvailable(sum) === true){ 
            return `Anda akan membeli ${this.name} ${this.brand} ${this.type}, sejumlah ${sum}, 
            dengan harga total ${this.getTotalPrice()}.`;
        } else{
            return false
        }
    }
  }

  class Keyboard extends Product {
    constructor(name, brand, type, colour, price, stock) {
      super(name, price);
      this.brand = brand;
      this.type = type;
      this.colour = colour;
      this.stock = stock;
    }
    Checkout(sum) {
        if (this.isAvailable(sum) === true){ 
            return `Anda akan membeli ${this.name} ${this.brand} ${this.type}, sejumlah ${sum}, 
            dengan harga total ${this.getTotalPrice()}.`;
        } else{
            return false
        }
    }
  }

const x = new Keyboard(`Keyboard`, `Logitech`, `X20`, `Hitam`, 500000, 3);
const y = new Mouse(`Mouse`, `Logitech`, `G15`, `Hitam`, 300000, 10);

x.getSummary();
console.log(x.Checkout(4));

y.getSummary();
console.log(y.Checkout(2));
  