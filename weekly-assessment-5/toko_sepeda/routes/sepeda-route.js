const express = require('express')
const { getSepeda, createSepeda, getSepedaById,deleteSepeda } = require('../controllers/sepeda-controllers')
const router = express.Router()
const {isLoginAdmin} = require('../middlewares/admin')
const {uploadGambarLocal} = require('../middlewares/gambarUpload')

router.get("/",isLoginAdmin, getSepeda)
router.get("/:sepedaId",isLoginAdmin, getSepedaById)
router.post("/",isLoginAdmin,uploadGambarLocal("gambar"),createSepeda)
router.delete("/:sepedaId",isLoginAdmin,deleteSepeda)


module.exports = router 