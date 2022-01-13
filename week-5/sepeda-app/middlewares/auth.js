const jwt = require("jsonwebtoken");
const { Admins } = require("../models");
const catchError = require("../utils/catch-error");

module.exports = {
  isLogin: async (req, res, next) => {
    try {
      let token = req.header("Authorization");

      if (!token) {
        return res.status(401).json({
          status: "Unauthorized",
          message: "No Token Detected",
        });
      }

      token = token.replace("Bearer ", "");

      const decoded = jwt.verify(token, process.env.SECRET_TOKEN);

      const admin = await Admins.findByPk(decoded.id);
      if (!admin) {
        return res.status(401).json({
          status: "Unauthorized",
          message: "User not found",
        });
      }
      req.admin = { id: admin.id, email: admin.email, isAdmin: admin.isAdmin };

      next();
    } catch (error) {
      return res.status(401).json({
        status: "Unauthorized Token",
        message: error.message,
      });
    }
  },
  isAdmin: async (req, res, next) => {
    try {
      let token = req.header("Authorization");

      if (!token) {
        return res.status(401).json({
          status: "Unauthorized",
          message: "No Token Detected",
        });
      }

      token = token.replace("Bearer ", "");

      const decoded = jwt.verify(token, process.env.SECRET_TOKEN);

      const admin = await Admins.findByPk(decoded.id);
      if (!admin) {
        return res.status(401).json({
          status: "Unauthorized",
          message: "User not found",
        });
      }
      if (!admin.isAdmin) {
        return res.status(401).json({
          status: "Unauthorized",
          message: "No Right to Access",
          result: {},
        });
      }
      req.admin = { id: admin.id, email: admin.email, isAdmin: admin.isAdmin };

      next();
    } catch (error) {
      return res.status(401).json({
        status: "Unauthorized Token",
        message: error.message,
      });
    }
  },
};
