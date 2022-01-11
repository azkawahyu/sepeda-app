// Konsep Abstraction
// adalah sebuah konsep untuk menyembunyikan detail tertentu dari sebuah objek dan
// hanya menampilkan function atau fitur penting dari objek tersebut 

// Konsep Encapsulation
// adalah sebuah konsep untuk membatasi akses langsung ke properti
// atau method dari sebuah objek

// contoh Encapsulation

class Baju {
    #diskon=10000
    constructor (warna, harga){
        this.warna = warna
        this.harga = harga
    }
    getTotal(){
        return ("harga baju warna " + this.warna + " adalah " +
        this.harga + " di potong diskon " + this.#diskon + " jadi total harganya " +
        (this.harga-this.#diskon)        
        )    
    }
}
const produk = new Baju("merah", 50000, 30000)
console.log(produk.getTotal())
// tidak terpengaruh oleh input yang berbeda untuk bagian diskon
// karena diskon sudah dijadikan private dan hanya bisa diakses dari dalam class