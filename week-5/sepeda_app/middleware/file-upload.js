const multer = require("multer");
const path = require("path");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const catchHandler = require("../utils/catch-handler");
const cloudinary = require("../config/cloudinary");

module.exports = {
  uploadLocal: (fieldName) => {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "./public");
      },
      filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(
          null,
          file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname),
        );
      },
    });

    const upload = multer({ storage }).single(fieldName);
    return (req, res, next) => {
      upload(req, res, (error) => {
        if (error) {
          catchHandler(res, error);
        }
        return next();
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
      upload(req, res, (error) => {
        if (error) {
          catchHandler(res, error);
        }
        return next();
      });
    };
  },
};
