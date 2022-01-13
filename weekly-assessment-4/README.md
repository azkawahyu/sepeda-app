# Weekly Assesment 4

# GIT Answer

## How the workflow for git until it's updated to repository ?

  - Pertama kita harus install GIT dari : https://git-scm.com/downloads
  - Login ke GITLAB ( yang digunakan di Glints Academy )
  - Pilih Project ➞ Create Project ➞ Create Blank Project (isi judul Project Name) ➞ Create Project
  - Pilih Clone ➞ Clone With HTTPS (copy URL)
  - Selanjut pilih folder yang akan di jadikan repository Local ➞ Klik kanan ( Git Bash Here )
  - Akan muncul command promp GIT ➞ Ketik "git clone <paste url dari gitlab>"
  - Kemudian masuk ke folder yg sudah di clone ➞ Klik open with code (VISUAL CODE )
  - Setelah melakukan perubahan di repo local , untuk update ke GITLAB ,masuk ke TERMINAL di visual code
  - Perintah2 dasar GIT di terminal ( bisa diseraching untuk command2 lainnya)
  - `git status` untuk melihat adakah perubahan yg dilakukan
  - `git add <nama file / . untuk semua file>` untuk menyimpan perubahan file/folder untuk selanjutnya di commit
  - `git commit -m "<perubahan yg dilakukan>"` untuk menyimpan checkpoint  berserta pesan perubahan
  - `git checkout -b feature_branch` untuk membuat cabang lain selain cabang main di repository local
  - `git push` setelah melakukan commit, untuk menyimpan perubahan di remote server /GITLAB
   
## Whats git? What's git use for?

  Git adalah version control system yang digunakan para developer untuk mengembangkan software secara bersama-bersama. Semua orang yang terlibat dalam pengkodean proyek akan menyimpan database Git, sehingga akan memudahkan dalam mengelola proyek baik online maupun offline

  Fungsi Git adalah untuk mengatur versi dari source code program dengan memberikan tanda baris dan kode mana yang ditambah atau diganti

## How to track git progress ?


  Di gitlab (online):

  ➞ Pilih Project -> Pilih HISTORY

  ➞ Pilih Project -> Pilih Project Information -> Activity

  Di repository local :

  ➞ Ketik "git log" di terminal git
