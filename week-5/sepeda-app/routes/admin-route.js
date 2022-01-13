const express = require("express");
const router = express.Router();
const {
  getAdmins,
  getAdmin,
  updateAdmin,
  deleteAdmin,
} = require("../controllers/admin-controller");
const { isLogin, isAdmin } = require("../middlewares/auth");

router.get("/", isLogin, getAdmins);
router.get("/:adminsId", isLogin, getAdmin);
router.put("/:adminsId", isAdmin, updateAdmin);
router.delete("/:adminsId", isAdmin, deleteAdmin);

module.exports = router;
