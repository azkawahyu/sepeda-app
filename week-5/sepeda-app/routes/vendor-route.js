const express = require("express");
const router = express.Router();
const {
  createVendor,
  getVendors,
  getVendor,
  updateVendor,
  deleteVendor,
} = require("../controllers/vendor-controller");
const { isLogin, isAdmin } = require("../middlewares/auth");

router.post("/", isAdmin, createVendor);
router.get("/", isLogin, getVendors);
router.get("/:vendorId", isLogin, getVendor);
router.put("/:vendorId", isAdmin, updateVendor);
router.delete("/:vendorId", isAdmin, deleteVendor);

module.exports = router;
