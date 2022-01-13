const jwt = require("jsonwebtoken");
const catchHandler = require("../utils/catch-handler");
const { Admins } = require("../models");

module.exports = {
  isLogin: async (req, res, next) => {
    try {
      let token = req.header("Authorization");
      if (!token) {
        return res.status(401).json({
          status: "Unauthorized",
          message: "No token detected",
          result: {},
        });
      }
      token = token.replace("Bearer ", "");
      const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
      const user = await Admins.findOne({
        where: {
          id: decoded.id,
        },
      });
      if (!user) {
        return res.status(401).json({
          status: "Unauthorized",
          message: "User not found",
        });
      }
      req.user = {
        id: user.id,
        email: user.email,
        isAdmin: user.isAdmin,
      };
      next();
    } catch (error) {
      return res.status(401).json({
        status: "Unauthorized",
        message: error.message,
        result: {},
      });
    }
  },
  isAdmin: async (req, res, next) => {
    try {
      let token = req.header("Authorization");
      if (!token) {
        return res.status(401).json({
          status: "Unauthorized",
          message: "No token detected",
          result: {},
        });
      }
      token = token.replace("Bearer ", "");
      const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
      const user = await Admins.findOne({
        where: {
          id: decoded.id,
        },
      });
      if (!user) {
        return res.status(401).json({
          status: "Unauthorized",
          message: "User not found",
        });
      }
      if (!user.isAdmin) {
        return res.status(401).json({
          status: "Unauthorized",
          message: "You have no right to access this end point",
          result: {},
        });
      }
      req.user = {
        id: user.id,
        email: user.email,
        isAdmin: user.isAdmin,
      };
      next();
    } catch (error) {
      return res.status(401).json({
        status: "Unauthorized",
        message: error.message,
        result: {},
      });
    }
  },
};
