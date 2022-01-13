const express = require('express')
const { getVendors, getVendor, createVendor, updateVendor, deleteVendor } = require('../controllers/vendor-controllers')
const router = express.Router()
const {isLoginAdmin} =require('../middlewares/admin')

router.post("/",isLoginAdmin, createVendor)
router.get("/",isLoginAdmin,getVendors)
router.get("/:vendorId",isLoginAdmin,getVendor)
router.put("/:vendorId",isLoginAdmin,updateVendor)
router.delete("/:vendorId",isLoginAdmin,deleteVendor)

module.exports = router