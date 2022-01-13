const express = require("express");
const router = express.Router();
const vendorRoute = require("./vendor-route");
const authRoute = require("./auth-route")
const sepedaRoute = require("./sepeda-route")
const adminRoute = require("./admin-route")

router.use("/vendor", vendorRoute);
router.use("/auth", authRoute)
router.use("/sepeda", sepedaRoute)
router.use("/admin", adminRoute)
module.exports = router;