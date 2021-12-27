/* - Buatlah sebuah class Product.
- Kelas tersebut memiliki property name, price, stock.
- Kelas tersebut method : getSummary(), isAvailable(sum) mereturn true / false tergantung jumlah yang diminta 
  ( misal stok ada 3, dan yang diminta 4, maka akan return false ), getTotalPrice() (stok x price)
- Buatlah minimal 2 child class, contoh : Clothes, Watches, Gadget, etc.
- Child class harus memiliki setidaknya satu property yang berbeda dengan parents nya, contoh : color, size, etc.
- Child class harus memiliki method bernama Checkout(sum) yang akan mengembalikan rincian pembelian produk, 
  contoh : Anda akan membeli mouse Logitech G15, sejumlah 2, dengan harga total 600.000.
*/

// -----------------------------Parent Class
class Product {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price,
    this.stock = stock;
   
  }

  getSummary() {
 
    console.log(
       this.name + 
        " warna " +
        this.warna +
        " dengan harga Rp " +
        (this.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') +
        "/kg memiliki stok sejumlah " +
        this.stock
    );
    
  }

  isAvailable(sum) {
    return sum > this.stock ? false : true;
  }

  getTotalPrice() {
    return this.price * this.stock
  }
}

// -----------------------------Child Class
class buah extends Product {
  constructor(name, price=15000, stock, warna) {
    super(name, price, stock);
    this.warna = warna;
  }

  Checkout(sum) {
         if (this.isAvailable(sum) == true)  
      { console.log("Anda membeli "+ sum  +"kg "+ this.name + " warna " + this.warna +" seharga Rp "+ this.getTotalPrice().toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))
         this.stock = this.stock-sum} 
      else
       console.log("Pembelian "+ sum+" kg ditolak, karena stock yang tersedia saat ini adalah " + this.stock+" kg") 
    }
}

class Anggur extends Product {
  constructor(name, price, stock, warna, jenis) {
    super(name, price, stock);
    this.warna = warna;
    this.jenis = jenis;
  }

  Checkout(sum) {
    if (this.isAvailable(sum) == true)  
    { console.log("Anda membeli "+ sum  +"kg "+ this.name + " warna " + this.warna +" seharga Rp "+ this.getTotalPrice().toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))
       this.stock = this.stock-sum} 
    else
     console.log("Pembelian "+ sum+" kg ditolak, karena stock yang tersedia saat ini adalah " + this.stock+" kg") 
  }
  
}

let apel = new buah("Apel Fuji", 15000, 20, "Hijau");
apel.getSummary();
apel.Checkout(3);
apel.Checkout(282);
console.log("\n----------------------------------------------------------------------\n")


let anggur = new Anggur("Anggur", 18900, 40, "Hitam");
anggur.getSummary();
anggur.Checkout(20);
anggur.Checkout(30);

