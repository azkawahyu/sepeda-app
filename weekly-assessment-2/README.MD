# Weekly Assesment 2



## Explain How The Internet Works

Internet adalah jaringan komputer yang semuanya saling terhubung antara yang satu dengan yang lainnya dengan menggunakan sebuah sistem TCP/IP atau Transmission Control Protocol atau Internet Protocol. Internet diberikan oleh Internet Service Protocol atau ISP. ISP sendiri merupakan sebuah perusahaan penyedia layanan yang tugasnya menyediakan jasa koneki internet dan juga jasa lain yang masih ada keterkaitannya. Kebanyakan para perusahaan telepon merupakan ISP. Mereka bertugas menyediakan layanan,mulai dari pendaftaran domain, hosting, hubungan internet, dan lain sebagainya. konfigurasi lainnya sesuai dengan kebutuhan.  Beberapa konfigurasi yang bisa dilakukan adalah pembatasan sinyal, pembatasan kecepatan, daftar blokir, dan lain-lain
 



Cara kerja internet (secara kompleks)
Komputer atau laptop yang kita gunakan sudah memiliki IP Address yang diberikan oleh ISP. Kemudian mereka akan melakukan pengaturan pada router agar supaya perangkat tersebut bisa terkonseksi ke ISP.
Kita bisa membuka www.facebook.com atau www.google.com karena terdapat DNS. DNS atau Domain Name System yang memungkinkan para pengguna bisa mengakses berbagai macam domain yang tersedia.
Pada dasarna alamat domain tersebut tidak lebih dari sekedar angka seperti misalnya untuk www.google.com yang sebenarya 74.125.68.105. Jadi, mau diketikkan www.google.com atau 74.125.68.105 akan sama-sama muncul jendela website
Server ISP bertugas menerima permintaan sinyal dari berbagai macam browser yang digunakan. Dengan begitu, pengguna bisa membuka halaman, mengakses email, dan berbagai kebutuhan lainnya. Pada saat server tidak bisa menampung seluruh informasi atau permintaan yang tersedia, maka sinyal tersebut akan dialihkan ke server yang lain yang mana ia dinamakan sebagai host server.
Dengan perkembangan terknologi yang semakin maju, internet tidak hanya bisa terkoneksi melalui kabel namun juga bisa melalui gelombang radio atau yang biasanya lebih kita kenal dengan istilah WiFi.
To make it easy for you to get started with GitLab, here's a list of recommended next steps.

## What's the meaning of communication protocol

Pengertian protokol komunikasi adalah satu set aturan yang dibuat untuk mengontrol pertukaran data antar node (misalkan komputer), termasuk proses inisialisasi,   verifikasi, cara berkomunikasi, dan cara memutuskan komunikasi. jaringan komunikasi ini memungkinkan adanya komunikasi antarpengguna komputer, baik melalui   email,chating voice, atau video.

## -	Mention HTTP Status Code

Kode Status HTTP (HTTP Status Codes) adalah suatu standarisasi stasus kode web server ketika memberikan informasi mengenai keadaan halaman pada website anda.
Daftar Lengkap dan Arti dari HTTP Status Code
HTTP Status Code 100-an
Kode-kode di kategori ini memberitahukan informasi bahwa permintaan dari browser masih diproses karena suatu hal.
-	100 – Continue Maksudnya adalah server sudah menerima permintaan “header” dari browser Anda dan sekarang sudah siap untuk menerima permintaan “body.” Ini membuat proses menjadi lebih efisien karena mencegah browser agar tidak mengirimkan permintaan “body” karena “header” ditolak. 
-	101 – Switching Protocols Browser Anda meminta server untuk mengganti/berpindah protokol dan server telah memenuhi permintaan tersebut. 
-	103 – Early Hints HTTP code yang satu ini berarti server mengirimkan “header” terlebih dahulu ke browser sebelum data dari server sepenuhnya terbuka.
HTTP Status Code 200-an
Kode yang berarti bahwa permintaan browser telah berhasil diterima, dipahami, dan diproses oleh server. Dengan kata lain, semua berjalan dengan lancar.
-	200 – Everything is OK Kode ini muncul saat halaman website atau data bekerja sebagaimana mestinya.
-	201 – Created Server telah memenuhi permintaan browser Anda. Hasilnya, server membuat data baru.
-	202 – Accepted Server sudah menerima permintaan browser Anda, tapi masih diproses.
-	203 – Non-Authoritative Information HTTP code yang satu ini muncul saat penggunaan proxy berhasil dideteksi. Jadi, server proxy menerima kode 200 dari server asli, tapi hasilnya dimodifikasi oleh proxy tersebut sebelum dikirimkan ke browser Anda.
-	204 – No Content Maksudnya adalah server sudah berhasil memproses permintaan, tapi tidak menghasilkan konten apapun.
-	205 – Reset Content Hampir mirip dengan kode 204. HTTP code 205 ini berarti server telah memproses permintaan, tapi tidak menghasilkan konten apapun. Server juga meminta browser Anda untuk mereset document view.
-	206 – Partial Content Kode ini muncul saat browser Anda menggunakan “range header.” Sehingga menyebabkan server hanya mengirim sebagian dari data yang diminta.

HTTP Status Code 300-an
Kode-kode ini adalah kode redirect. Redirect sendiri adalah saat data lama telah dipindahkan ke tempat yang baru. Sehingga saat permintaan terjadi, data baru tersebut yang diberikan kepada browser daripada data yang sebenarnya diminta.
-	300 – Multiple Choices Kadang, ada beberapa kemungkinan resource yang bisa server kirimkan untuk memenuhi permintaan browser Anda. Nah, HTTP code 300 ini mengharuskan browser Anda untuk memilih salah satu di antara resource tersebut. Kode ini biasanya muncul karena ada beberapa versi ekstensi file di server atau saat server menerima permintaan yang ambigu dari browser.
-	301 – The requested resource has been moved permanently Kode ini muncul saat halaman website atau data telah diganti secara permanen dengan data yang baru. Dengan kata lain, HTTP code ini digunakan untuk Redirect 301.
-	302 – The requested resource has moved, but was found HTTP code yang satu ini terjadi saat data yang diminta itu ditemukan, tapi tidak berada di lokasi yang dikira.
-	303 – See Other Untuk memahami kode 303 ini, Anda haruslah paham mengenai perbedaan antara empat metode permintaan HTTP. Intinya, kode ini memberitahu browser Anda bahwa data yang diminta melalui POST, PUT, atau DELETE telah ditemukan. Namun, untuk mendapatkannya melalui GET, Anda harus meminta dengan URL yang berbeda dari sebelumnya.
-	304 – The requested resource has not been modified since the last time you accessed it Kode ini memberitahu browser bahwa data yang disimpan di cache itu tidak berubah. Sehingga halaman website bisa lebih cepat dibuka.
-	307 – Temporary Redirect Muncul saat data telah dipindah sementara di URL yang berbeda. Namun, metode HTTP masihlah sama. 
-	308 – Permanent Redirect Berarti data yang diminta telah dipindah secara permanen di URL baru. Namun, metode HTTP juga masih sama.


HTTP Status Code 400-an
Nah, di kategori inilah HTTP response code mulai menjadi masalah. Kode di kategori ini menunjukan adanya error dari sisi web browser. Entah dari web browser-nya sendiri atau dari permintaan browser.
-	400 – Bad Request Server tak bisa memenuhi permintaan karena adanya error dari browser Anda. 
-	401 – Unauthorized Error ini muncul karena browser tak bisa memberikan bukti kewenangan yang sah saat diminta server.
-	402 – Payment Required Banyak platform yang memunculkan HTTP status code ini saat pengguna tidak memenuhi jumlah pembayaran yang dibutuhkan. Contohnya: melewati batas penggunaan harian Google Developers API, belum membayar biaya Shopify, dan pembayaran melalui Stripe yang gagal diproses.
-	403 – Access to that resource is forbidden Kode ini muncul saat pengguna berusaha mengakses sesuatu yang tak diizinkan. Misalnya, mengakses konten yang dikunci tanpa login terlebih dahulu. 
-	404 – The requested resource was not found Inilah kode error tiga digit paling terkenal di jagat maya. Error ini menunjukkan bahwa data yang diminta browser itu tidak ada di server. 
-	405 – Method not allowed Kode ini menunjukkan bahwa server hosting telah menerima dan mengenali permintaan dari browser. Namun, ia menolak metode HTTP yang digunakan. Sehingga browser tak bisa menampilkan halaman yang diminta.
-	406 – Not acceptable response HTTP status code yang satu ini berarti browser mengirim permintaan “accept header” dan server tak bisa memenuhinya.
-	407 – Proxy Authentication Required Menunjukkan bahwa proxy server sedang digunakan dan server meminta browser Anda untuk memberikan kewenangan terlebih dahulu sebelum melanjutkan.
-	408 – The server timed out waiting for the rest of the request from the browser Muncul saat server kehabisan waktu (time out) karena menunggu browser menyelesaikan permintaannya. Dengan kata lain, server tidak menerima seluruh permintaan yang dikirim browser. Mungkin saja karena koneksi pengguna sehingga komunikasi dengan server terputus.
-	409 – Conflict Seperti namanya, HTTP response code ini muncul saat terjadi konflik antara data yang diminta dan data yang tersedia. Biasanya karena data tersebut sering diubah-ubah.
-	410 – The requested resource is gone and won’t be coming back Hampir mirip dengan error 404. Bedanya, 410 itu data memang tidak ada dan tak pernah ada.
-	411 – Length Required Server membutuhkan browser untuk menyebutkan “length” tertentu dan gagal untuk memenuhinya.
-	412 – Precondition Failed Muncul saat browser Anda memasukkan beberapa syarat khusus dalam permintaannya dan server tak bisa memenuhinya.
-	413 – Request Entity Too Large Permintaan browser Anda terlalu besar untuk diproses server. 
-	414 – URL Too Long Seperti namanya, error 414 URL Too Long terjadi saat URL yang dikirim oleh browser terlalu panjang untuk bisa diproses server.
-	415 – Unsupported Media Type HTTP status code 415 muncul saat browser Anda meminta jenis media yang tak didukung oleh server.
-	416 – Range Not Satisfiable HTTP status ini muncul saat server tak bisa memenuhi permintaan “range” dari browser Anda. 
-	417 – Expectation Failed Server tak bisa memenuhi syarat khusus yang ada di dalam “header” permintaan browser Anda. 
-	418 – I’m a teapot Kode ini hanyalah prank atau guyonan April Mop dari tahun 1988.
-	422 – Unprocessable Entity Terjadi karena terdapat kesalahan bahasa di dalam permintaan browser Anda, sehingga server tidak bisa memprosesnya.
-	425 – Too Early Server tak mau memproses permintaan Anda karena mungkin permintaan tersebut diulang.
-	426 – Upgrade Required Server menolak permintaan browser dan mengharuskan Anda untuk meningkatkan (upgrade) ke protokol yang berbeda.
-	428 – Precondition Required HTTP status code yang satu ini terjadi karena server membutuhkan beberapa syarat untuk dipenuhi oleh browser terlebih dahulu.
-	429 – Too many requests Muncul karena browser mengirim terlalu banyak permintaan di rentang waktu tertentu. Ini kadang terjadi karena bot atau script yang berusaha membajak website tersebut.
-	431 – Request Header Fields Too Large Seperti namanya, error ini muncul karena header field yang terlalu besar sehingga tak bisa diproses oleh server.
-	451 – Unavailable for Legal Reasons Muncul saat data yang ingin Anda akses/minta itu tak tersedia karena masalah hukum.
-	499 – Client closed request Terjadi saat browser tiba-tiba menghentikan permintaan padahal sedang diproses oleh NGINX.

HTTP Status Code 500-an
Jika kategori 400-an adalah error di sisi web browser, kategori 500-an ini menunjukkan adanya error dari server. Sehingga error HTTP response code kategori ini lebih sulit untuk
diperbaiki karena masalah di server.

-	500 – There was an error on the server and the request could not be completed Ini adalah kode generik yang muncul karena adanya kesalahan di server atau “internal server error”. 
-	501 – Not Implemented Error ini muncul karena fungsi server tidak mendukung permintaan dari browser. Error ini hampir selalu karena kesalahan server dan harus diperbaiki oleh penyedia hosting.
-	502 – Bad Gateway Umumnya, HTTP status code ini muncul karena salah satu server menerima respons yang tak beres dari server lainnya. Misalnya, saat penggunaan proxy server. Kami sudah membahas error ini di → 10 Cara Mengatasi Error 502 Bad Gateway di Website
-	503 – The server is unavailable to handle this request right now Kode HTTP status ini terjadi karena server tak bisa memenuhi permintaan Anda saat ini. Mungkin karena server kepenuhan atau yang lainnya.
-	504 – The server, acting as a gateway, timed out waiting for another server to respond Error 504 ini biasanya muncul saat server tidak bisa terkoneksi dengan server pusat untuk menyelesaikan permintaan. 
-	505 – HTTP Version Not Supported Seperti namanya, error ini muncul karena server tidak mendukung versi HTTP yang dipakai browser saat membuat permintaan.
-	511 – Network Authentication Required HTTP response code ini muncul saat jaringan yang Anda pakai membutuhkan otentikasi sebelum bisa mengirimkan permintaan ke server. Misalnya, Anda baru bisa menggunakan wifi publik gratisan saat sudah menyetujui syarat dan ketentuannya terlebih dahulu. 
-	521 – Web server is down Erron ini akan muncul saat browser Anda berhasil nyambung ke Cloudflare, tapi Cloudflare tak bisa menyambungkannya lagi ke server pusat. Dengan kata lain, error ini hanya khusus untuk Cloudflare saja


## Make Analogy Regarding how Front end and Backend communicate each other


[Analog- -  ILUSTRASI GAMBAR](https://ibb.co/jDsk6py)

Seperti ilustrasi diatas, 
BACK END = DAPUR dan FRONT END = AREA 
BACK END : Menyiapkan makanan (SERVER)
FRONT END : Menyiapkan menu, meja makan ,dll ( USER INTERFACE )
Keduanya terhubung melalui waiters (User Request) , jadi setelah makanan dipesan, akan disampaikan ke dapur, kemudian dibawa Kembali oleh waiters dengan pesanan yang sesuai, lalu ditampilkan kembali / disajikan dimeja makan ( User Interface )


## -	Mention What method in HTTP protocol

GET	  : Request bersifat mengambil data dari back end

POST	: Request yang bersifat menyimpan data ke back end

PUT	  : Request yang bersifat mengupdate data ke backend secara keseluruhan

PATCH	: Reuest yang bersifat mengupdate data ke back end secara parsial

DELETE 	: Request yang bersifat mengahpus data ke back end
