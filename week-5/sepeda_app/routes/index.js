const express = require("express");
const router = express.Router();
const vendorRoute = require("./vendor-route");
const sepedaRoute = require("./sepeda-route");
const authRoute = require("./auth-route");
const adminRoute = require("./admin-route");

router.use("/vendor", vendorRoute);
router.use("/sepeda", sepedaRoute);
router.use("/auth", authRoute);
router.use("/admin", adminRoute);

module.exports = router;
