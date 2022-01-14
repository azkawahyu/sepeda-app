const catchError = require("../utils/catch-error");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

module.exports = {
  uploadLocal: (fieldName) => {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "./image");
      },
      filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + "-" + file.originalname);
      },
    });

    const upload = multer({ storage }).single(fieldName);
    return (req, res, next) => {
      upload(req, res, (err) => {
        if (err) {
          catchError(res, err);
        }
        next();
      });
    };
  },
  uploadCloud: (fieldName) => {
    const storage = new CloudinaryStorage({
      cloudinary: cloudinary,
      params: (req, file) => {
        return {
          folder: fieldName,
          resource_type: "raw",
          public_id: Date.now() + " - " + file.originalname,
        };
      },
    });

    const upload = multer({ storage }).single(fieldName);

    return (req, res, next) => {
      upload(req, res, (err) => {
        if (err) {
          catchError(res, err);
        }
        next();
      });
    };
  },
};
