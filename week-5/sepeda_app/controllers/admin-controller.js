const Joi = require("joi");
const { Admins } = require("../models");
const catchHandler = require("../utils/catch-handler");

module.exports = {
  getAdmins: async (req, res) => {
    try {
      const admins = await Admins.findAll({
        limit: 10,
        order: [["createdAt", "desc"]],
        attributes: ["id", "name", "email", "isAdmin"],
      });
      if (!admins) {
        return res.status(404).json({
          status: "Not found",
          message: "The data is empty",
          result: [],
        });
      }
      res.status(200).json({
        status: "Success",
        message: "Successfuly retrieve Admins/Users",
        result: admins,
      });
    } catch (error) {
      catchHandler(res, error);
    }
  },
  getAdmin: async (req, res) => {
    const { adminId: id } = req.params;
    try {
      const admin = await Admins.findOne({
        where: {
          id,
        },
        attributes: ["id", "name", "email", "isAdmin"],
      });
      if (!admin) {
        return res.status(404).json({
          status: "Data not found",
          message: `Cannot find a data with id ${id}`,
          result: {},
        });
      }
      res.status(200).json({
        status: "Success",
        message: "Successfuly retrieve the data",
        result: admin,
      });
    } catch (error) {
      catchHandler(res, error);
    }
  },
  updateAdmin: async (req, res) => {
    const { adminId: id } = req.params;
    const body = req.body;
    try {
      const schema = Joi.object({
        name: Joi.string(),
        isAdmin: Joi.boolean(),
        email: Joi.string(),
        password: Joi.string(),
      });
      const { error } = schema.validate(body);
      if (error) {
        return res.status(400).json({
          status: "Bad request",
          message: error.message,
          result: {},
        });
      }
      if (id != req.user.id) {
        return res.status(400).json({
          status: "Unauthorized",
          message: "You have no right to update this id",
        });
      }
      const update = await Admins.update(body, {
        where: {
          id,
        },
      });
      if (update[0] != 1) {
        return res.status(500).json({
          status: "Internal server error",
          message: "Failed update the data / data not found",
          result: {},
        });
      }
      const admin = await Admins.findOne({
        where: {
          id,
        },
      });
      res.status(200).json({
        status: "Success",
        message: "Successfuly update the data",
        result: admin,
      });
    } catch (error) {
      catchHandler(res, error);
    }
  },
  deleteAdmin: async (req, res) => {
    const { adminId: id } = req.params;
    try {
      if (id != req.user.id && req.user.isAdmin != 1) {
        return res.status(400).json({
          status: "Unauthorized",
          message: "You have no right to update this id",
        });
      }
      const admin = await Admins.destroy({
        where: {
          id,
        },
      });
      if (!admin) {
        return res.status(404).json({
          status: "Data not found",
          message: "The data is not exist",
          result: {},
        });
      }
      res.status(200).json({
        status: "Success",
        message: "Successfuly delete the data",
        result: {},
      });
    } catch (error) {
      catchHandler(res, error);
    }
  },
};
