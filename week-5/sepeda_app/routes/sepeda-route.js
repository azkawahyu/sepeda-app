const express = require("express");
const router = express.Router();
const {
  createSepeda,
  getSepedas,
  getSepeda,
  updateSepeda,
  deleteSepeda,
} = require("../controllers/sepeda-controller");
const { isLogin, isAdmin } = require("../middleware/auth");
const { uploadLocal, uploadCloud } = require("../middleware/file-upload");

router.post("/", isAdmin, uploadCloud("image"), createSepeda);
router.get("/", isLogin, getSepedas);
router.get("/:sepedaId", isLogin, getSepeda);
router.put("/:sepedaId", isAdmin, uploadCloud("image"), updateSepeda);
router.delete("/:sepedaId", isAdmin, deleteSepeda);

module.exports = router;
