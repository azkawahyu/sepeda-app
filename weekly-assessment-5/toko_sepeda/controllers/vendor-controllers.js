const Joi =require('joi') //untuk validasi data
const {Vendor,Sepeda} = require('../models') //mengambil model 


module.exports = {
  getVendors :async (req,res)=>{
    try {
     const vendors = await Vendor.findAll ({
        order : [["createdAt",'DESC']],
        include : [ 
          {
            model : Sepeda,
            as : "sepedas",
            attributes : {
              exclude : ["vendorId","id","createdAt","updatedAt"]  
            }
          }
        ],
        attributes : {
          exclude : ["vendorId","id","createdAt","updatedAt"]  
        }
     })
      
     if(vendors.length ==0){
       return res.status(404).json({
         status : "Tidak ada data yg bisa ditampilkan",
         message : "Data kosong, tidak ada data vendor yg bisa ditampilkan"
       })
     }
     return res.status(200).json({
       status : "Success",
       message : "Berhasil mengambil data vendor dari database",
       result : vendors
     })
    } catch (error) {
      res.status(500).json({
        status : "Koneksi gagal",
        message : error.message,
        result :{}
      })
    }
  },
  getVendor : async (req,res)=>{
    const {vendorId : id} = req.params
    try {
      const vendor = await Vendor.findOne ({
        where : {
          id
        },
        include : [ 
          {
            model : Sepeda,
            as : "sepedas",
            attributes : {
              exclude : ["vendorId","id","createdAt","updatedAt"]  
            }
          }
        ],
        attributes : {
          exclude : ["vendorId","id","createdAt","updatedAt"]  
        }
     })
     
     if (!vendor){
       return res.status(404).json({
         status : "Data tidak ditemukan",
         message : "Data vendor dengan vendorId "+ id+ " tidak ditemukan",
         result:{} 
       })
     }
     return res.status(200).json({
       status : "Berhasil",
       message : "Data berhasil ditemukan",
       result : vendor
     })
    } catch (error) {
      return res.status(500).json({
        status : "Gagal Mengambil Data",
        message : error.message,
        result :{}
      })
    }

  },
  createVendor : async (req,res) =>{
    const body = req.body
    try {
     const schema =  Joi.object({ //mengecheck / validasi input 
       name : Joi.string().required(),
       phone : Joi.string().required(),
       city : Joi.string().required()
    })
    const {error} = schema.validate(body)// yg akan divalidate adalah data dari req.body
    if(error){
      return res.status(400).json({
        status : "Input data salah",
        message  :error.message,
        result : {}
      })
    }
    const vendor = await Vendor.create(body)  //method create sequelize
    if(!vendor) {
      return res.status(500).json({
        status : "Koneksi gagal",
        message : "Gagal membuat vendor ke database",
        result :{}
      })
    }

    return res.status(201).json({
      status : "Berhasil ",
      message : "Berhasil menyimpan data vendor ke database",
      result : vendor
    })  
  } catch (error) {
      return res.status(500).json({
        status : "Internal Server Error pada saat createVendor",
        message : error.message,
        result : {}
      })
    }
  },
  updateVendor : async (req,res)=>{
    const {vendorId } = req.params
    const body = req.body
    try {
      const schema = Joi.object({
        name : Joi.string().required(),
        phone : Joi.string(),
        city  : Joi.string()
      })
      const {error} = schema.validate(body)
      if(error){
        return res.status(500).json({
          status : "Input data salah",
          message :error.message,
          result : {}
        })
      }  
      const checkUpdate = await Vendor.update(body,{
        where : {
          id : vendorId
        }
      })
      if(checkUpdate[0] !=1){
        return res.status(500).json({
          status : "INternal server error pada saat update Vendor dengan vendorId " + vendorId,
          result : {}  
        })
      }
      const vendor = await Vendor.findByPk(vendorId)
      return res.status(200).json({
        status : "Berhasil update data",
        message : "Berhasil mengupdate vendor dengan vendorId "+ vendorId,
        result : checkUpdate
      })
     
    } catch (error) {
      return res.status(500).json({
        status : "Internal Server error pada saat update data vendor dengan vendorID "+ vendorId,
        message : error.message,
        result : {} 
      })
    }
  },
  deleteVendor : async (req,res)=>{
    const {vendorId} = req.params
    try {
      const vendor = await Vendor.destroy({
        where :{
          id :vendorId
        }
      })
      
      if(!vendor) {
        return res.status(404).json({
          status  :"Data gagal dihapus",
          message :"Data vendor dengan vendorId " + vendorId + " tidak ada",
          result:{}

        })
      }
      res.status(200).json({
        status : "success",
        message : "Successfully delete the data where id " + vendorId,
        result : {}
      })
    } catch (error) {
      return res.status(500).json({
        status : "Internal Server Error pada saat mengapus data vendor",
        message : error.message
      })
    }
  }
}