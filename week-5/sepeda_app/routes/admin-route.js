const express = require("express");
const router = express.Router();
const {
  getAdmins,
  getAdmin,
  updateAdmin,
  deleteAdmin,
} = require("../controllers/admin-controller");
const { isLogin, isAdmin } = require("../middleware/auth");
const { uploadLocal, uploadCloud } = require("../middleware/file-upload");

router.get("/", isAdmin, getAdmins);
router.get("/:adminId", isAdmin, getAdmin);
router.put("/:adminId", isLogin, updateAdmin);
router.delete("/:adminId", isLogin, deleteAdmin);

module.exports = router;
