//Abstraksi pada JavaScript adalah sebuah teknik untuk menyembunyikan detail tertentu dari sebuah objek dan hanya menampilkan fungsionalitas atau fitur penting dari objek tersebut.
//Encapsulation adalah mengisolisasi source code supaya terbagi dalam blok-blok di mana programmer lain tidak perlu memikirkan detail dari blok-blok source code.
class Sepeda {
    constructor(name, price) {
      if (this.constructor == Sepeda) {
        throw new Error("Cannot initiate abstract class to an object");
      }
      this.name = name;
      this.price = price;
    }
    getSummary() {}
  }
  
  class Lipat extends Sepeda {
    constructor(name, price, color) {
      super(name, price);
      this.color = color;
    }
    getSummary() {
      console.log(
        "Sepeda ini jenisnya",
        this.name,
        "and price ofdengan harga",
        this.price,
        "dengan warna",
        this.color
      );
    }
      print(){
        this.getSummary()
    }
  }
  
  exotic = new Lipat("Exotic", 1500000, "Hijau");
  console.log(exotic.name);
  exotic.getSummary();