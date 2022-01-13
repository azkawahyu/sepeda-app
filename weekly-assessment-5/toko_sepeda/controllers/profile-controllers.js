const Joi =require('joi').extend(require('@joi/date')) //untuk validasi data
const {Profile,Admins} = require('../models') //mengambil model 


module.exports = {
  createProfile  :async (req,res)=>{
    const body = req.body
    const {adminId} = req.params
     
    try {
      const schema = Joi.object({  //schema mengisi validasi object sbb
        firstName : Joi.string().required(),
        lastName : Joi.string().required(),
        phone : Joi.string().required(),
        address : Joi.string().required(),
        dateOfBirth : Joi.date().format("YYYY-MM-DD")
        
      })
      const {error} = schema.validate({...body}) //menvaldiasi body
      if (error){
        return res.status(400).json({
          status : "Data yang diinput salah",
          message : error.message
        })
      }
      const check = await Profile.findOne({
        where : {
          adminId : adminId
        }
      })
 
      if (check){
        return res.status(400).json({
          status : "Permintaan di tolak",
          message : "Sudah ada profile"
        })
      }
      const profile = await Profile.create({ 
        ...body,//spread operator 
      adminId : adminId
    })     
      
      if (!profile){
        return res.status(500).json({
          status : "Error pada saat create data ke profile", 
          message : "Failed to created data profile",
          result : {}
        })
      }
      return res.status(201).json({
        status : "Success",
        message : "Successfully created data profile",
        result : profile
      })
    } catch (error) {
      return res.status(500).json({
        status : "Internal server error pada saat membuat data profile",
        message : error.message,
        result : {}
      })
    }
  },
  getAllProfile :async (req,res)=>{
    try {
      
     const profile = await Profile.findAll ({
        order : [["createdAt",'DESC']],
        include : [
          {
            model : Admins,
            as : "admin",
            attributes : {
              exclude : ["password","id","createdAt","updatedAt"]  
            }
          }
        ],
       attributes : {
          exclude : ["brandId","id","createdAt","updatedAt"]  
        }
     })
      
     if(profile.length ==0){
       return res.status(404).json({
         status : "Tidak ada data yg bisa ditampilkan",
         message : "Data kosong, tidak ada data sepeda yg bisa ditampilkan"
       })
     }
     return res.status(200).json({
       status : "Success",
       message : "Berhasil mengambil data vendor dari database",
       result : profile
     })
    } catch (error) {
      res.status(500).json({
        status : "Internal server errro pada saat get Profile",
        message : error.message,
        result :{}
      })
    }
  } 
}