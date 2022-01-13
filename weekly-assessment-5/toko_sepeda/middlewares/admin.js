
const {Admins} = require ("../models")
const jwt = require("jsonwebtoken")

module.exports ={
  isLoginAdmin : async (req,res,next) => { //next = callback, poindah ke selanjutnya
    try {
      let token = req.header("Authorization") //mengambil token dari user authorization
      if(!token){  //check token ada atau tidak
        return res.status(401).json({
          status : "Tidak diizinkan ",
          message : "Token kosong / belum login",
          result : {}
        })
      }  
      
      token = token.replace("Bearer ","") //menghapus tulisan bearer
      const decoded = jwt.verify(token, process.env.PENANDA)  //mendekripsi token, ( mengambil value email dan passowrd)
      const admin = await Admins.findByPk(decoded.id) //mencari di table Admin berdasarkan token ( decoded.id)
      if(!admin){
        return res.status(401).json({
          status : "Tidak diiznkan masuk",
          message : "User belum terdaftar",
          result : {}
        })
      }
      if(!admin.isAdmin){ //mengecheck apakah bukan admin
        return res.status(401).json({
          status : "Tidak memiliki aksess",
          message : "Kamu bukan admin, tidak bisa mengakses halaman",
          result : {}
        })
      }
      //mengirimkan data admin ke kontroller selanjutnya
      req.admin = {
        id : admin.id,
        email : admin.email,
        isAdmin : admin.isAdmin
      }
      next() //pindah ke kontroller selanjutnya
    } catch (error) {
      return res.status(401).json({
        status : "Internal Server Error pada saat mengakses halaman",
        message : error.message,
        result : {}
      })
    }
  }
 
}