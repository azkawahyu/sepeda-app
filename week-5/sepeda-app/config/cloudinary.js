const cloudinary = require('cloudinary').v2

cloudinary.config({
   cloud_name : "azkacloud",
   api_key : "328474659471329",
   api_secret : "7kt9yd5-9BUjwqiln_MCg4o3xMM"
})

module.exports = cloudinary