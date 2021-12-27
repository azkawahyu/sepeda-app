// 1. Abstraction adalah sebuah teknik untuk menyembunyikan detail tertentu dari sebuah objek dan hanya menampilkan fungsionalitas atau fitur penting dari objek tersebut.
// Method dan property dari abstract class dapat diakses melalui child class nya
// Poin penting dari abstraction adalah :
// a. Tidak bisa membuat instansiasi dari abstract class
// b. mengurangi duplikasi code

// 2. Encapsulation adalah konsep menggabungkan property dan method dalam satu unit data dan bersifat information hiding system yang artinya membatasi akses ke beberapa property dan method dari sebuah objek
// Ada 3 jenis akses :
// a. public => jika sebuah method atau property menggunakan public, maka method atau property tersebut dapat diakses dari dalam atau dari luar class, termasuk class turunannya juga bisa akses
// b. private => jika sebuah method atau property menggunakan private, maka method atau property tersebut hanya bisa diakses dari dalam class saja, class turunan dan class lain tidak bisa akses
// c. protected => jika sebuah method atau property menggunakan protected, maka method atau property tersebut hanya bisa diakses dari dalam class dan class turunanya saja, class lain tidak bisa akses

class Ongkir {
  #pajak; // syntax membuat private property
  constructor(berat) {
    this.berat = berat;
    this.#pajak = 500;
  }
  biaya() {
    return this.berat * 1000;
  }
  totalBiaya() {
    return this.biaya() * this.#pajak;
  }
}

class Tiki extends Ongkir {
  ubahPajak() {
    return this.#pajak * 10;
  }
  ubahBiaya() {
    return this.biaya() * 2;
  }
}

const laptop = new Ongkir(4);
laptop.berat = 9; // tidak akan error jika property di assign nilai baru, karena property tersebut bersifat public
laptop.#pajak = 10; // akan error karena user mencoba assign property pajak yang sudah di set private
console.log(laptop.totalBiaya());

const motor = new Tiki(10);
console.log(motor.ubahPajak()); // akan error karena chils class tidak bisa akses private property #pajak
console.log(motor.ubahBiaya()); // tidak akan error karena method ubahBiaya() bersifat public
