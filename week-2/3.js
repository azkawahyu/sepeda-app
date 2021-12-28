/* 

1. Abstraction

Abstraction merupakan metode yang berfungsi untuk menampilkan akses terhadap fungsi atau fitur yang dimiliki dan menyembunyikan detail dari objek tersebut.
Setiap objek tentu memiliki detail khusus yang mencakup properti dan method dari objek tersebut. Namun, pada saat mengoperasikan/mengakses objek, pengguna tidak perlu mengetahui bagaimana suatu fungsi dapat bekerja melainkan cukup mengetahui cara pemakaian fungsionalitasnya saja. Sebagai contoh, ketika pengguna mengoperasikan sebuah komputer, pengguna tidak perlu tahu bagaimana cara sebuah sebuah mesin komputer dapat bekerja, atau bagaimana komputer dapat menyala ketika ditekan tombol Power On. Yang perlu diketahui pengguna sekedar bagaiamana cara mengoperasikan komputer dan cara menggunakan fitur-fitur yang ditawarkan laptop tersebut.

2. Encapsulation

Encapsulation atau enkapsulasi merupakan salah satu pilar dari OOP yang dilakukan untuk membatasi akses langsung terhadap properti dan method dari sebuah objek. Enkapsulasi perlu dilakukan karena detail dari suatu objek tidak boleh langsung terekspos kepada pengguna.

3. Contoh Encapsulation

Contoh kasus dari enkapsulasi misalnya sebagai berikut.

Seorang pengguna dari suatu marketplace ingin menghitung ongkos kirim dari barang yang ia beli. Di dalam objek, metode untuk menghitung ongkos kirim tersebut memiliki rumus: konstanta harga ongkos kirim/kg (yang merupakan harga tetap) dikalikan dengan jumlah berat barang yang ingin dibeli oleh pengguna. 

Apabila pengguna mendapat akses ke metode penghitungan ongkos kirim, maka pengguna dapat mengubah sesuka hati konstanta yang diperlukan untuk perhitungan ongkos kirim tersebut. Apabila konstanta diubah, maka hasil perhitungan ongkos kirim pun dapat berubah-ubah. Oleh karena itulah, Encapsulation diperlukan untuk mencegah pengguna mengotak-atik detail dari suatu objek.

*/
