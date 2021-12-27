/* 3. Jelaskan mengenai konsep Abstraction dan Encapsulation, dan berikan contoh Encapsulation! (15)

a. Abstraction
Abstraction adalah sebuah teknik untuk menyembunyikan detail tertentu dari sebuah objek dan hanya menampilkan fungsionalitas 
atau fitur penting dari objek tersebut.
Seperti namanya, abstract class adalah class-class yang memiliki informasi abstrak dan metode-metode dari sekumpulan data. Abstract
Class tidak bisa diubah dan berlaku juga sebagai kerangka dalam penciptaan subclass-subclassnya (berperan seperti Superclass yang
dibahas di konsep Inheritance).
Sebuah Abstract Classs memiliki informasi dan metode yang dapat
diturunkan ke subclassnya, dan seluruh subclass akan mengikuti apa
saja metode yang akan diturunkan oleh Abstract Class
contoh :
*/

        class Barang {
        constructor(name,merk){
            if (this.constructor == Barang) {
                  throw new Error ("Tidak bisa meng-initiate abstract class ke  object")
            }
            this.name = name 
            this.merk = merk
          }
          }

        // const fortuner = new Barang ("Mobil","Honda") // akan terjadi throw new Error
        // console.log(fortuner)

/*
b.Encapsulation
Encapsulation atau pengkapsulan adalah konsep tentang pengikatan data atau metode yang berbeda yang disatukan atau “dikapsulkan” 
menjadi satu unit data. Encapsulation dapat mempermudah dalam pembacaan code karena informasi yang disajikan tidak perlu dibaca 
secara rinci dan sudah merupakan satu kesatuan. Secara sederhananya Encapsulation adalah cara untuk membatasi akses langsung
ke properti atau method dari sebuah objek.
dibagi menjadi 3 cara 
     1. public = property atau method yg bisa di akses dalam /luar kelas ( termasuk kelas turunan)
     2. private => property atau method yg bnisa di akses dalam kelas saja.
     3. protected => property atau method yg bisa di akses dalam kelas tersebut atau kelas turunan saja.

Sedangkan untuk di javascript sendiri hanya ada 2 cara, yaitu Public dan Private. Contoh :
*/

  class Harga {
    #ppn // membuat Private Property 
    constructor(harga) {
      this.harga = harga; //membuat Private Public
      this.#ppn = 0.1;
    }

    getPPn(){ //getter method ( untuk mengambil nilai Private Property)
      return this.#ppn
    }
    setPPn(ppn){ //setter method( untuk mengubah nilai Private Property)
        this.#ppn = ppn
    }

    totalBiaya() { //membuat Public Method 
      return this.harga - (this.harga*this.getPPn())
    }
    
  }
  
const harga1 = new Harga(2000)
// console.log(harga1.#ppn)  //  akan menghasilkan error , karena mencoba mengakses Private Property
console.log(harga1.harga)   //tidak error , karena mengakses Public Property 
harga1.setPPn(0.2)    // tidak error, karena menggunakan metode Setter didalam clas
console.log(harga1.getPPn()) //tidak error karena menggunakan metode Getter didalam class
console.log(harga1.totalBiaya())  

  class Mobil extends Harga {
   ubahPPn (){
     this.#ppn = 0.3   // error , karena mencoba mengakes private property milik Paretn Class
   }
  }
