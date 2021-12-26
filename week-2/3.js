//KONSEP ABSTAKSI
/* Abstraksi adalah konsep penyederhanaan dari perincian dan implementasi sehingga membuat konsep 
object-oriented lebih sederhana atau lebih abstrak terhadap class atau method. Contoh kasus nyatanya adalah sebuah mobil.
Pengguna mobil tidak perlu mengetahui seberapa rumit komponen dan rangkaian yang menyusun suatu mobil, karena untuk mengendarai
suatu mobil yang dibutuhkan hanya bagaimana cara mengemudikan mobil. Sehingga konsep abstraksi ini bisa diartikan
suatu sistem yang tersusun dari subsistem yang komplek dan rumit bisa dilihat secara lebih sederhana atau abstrak*/

//KONSEP ENKAPSULASI
/* Enkapsulasi adalah metode penyembunyian alur kerja ataupun informasi sebuah class dari luar class dengan tujuan menjaga keamanan.
Struktur dari class yang disembunyikan berupa property dan method, sehingga tidak semua property atau method dapat diakses dari luar class.
Untuk melakukan enkapsulasi terdapat 3 hak akses yaitu : 
1. Public : property atau method dapat diakses dari luar class maupun dalam class, termasuk class turunannya
2. Protected : property atau method tidak dapat diakses dari luar class, tetapi hanya dapat diakses oleh class itu sendiri dan class turunannya
3. Private : property tidak dapat diakses dari luar class maupun turunannya, tetapi hanya dapat diakses dari dalam class itu sendiri*/

//CONTOH ENKAPSULASI
class Car {
    #owner //membuat property bersifat private
    
    constructor(){}//inisialisasi property dari method setter dan getter

    getOwner(){
       console.log(this.#owner)
    }

    setOwner(owner){
        this.#owner = owner
    }

    #turnOnCar(){
        console.log(`${this.#owner} mengidupkan mobil`)
    }

    ownerTurnOnCar(){
        this.#turnOnCar()
    }
}

let mobil = new Car()
mobil.setOwner("Riyad")
//console.log(mobil.#owner) akan menghasilkan error karena property bersifat private
mobil.getOwner()
//mobil.turnOnCar() akan menghasilkan error
mobil.ownerTurnOnCar()


