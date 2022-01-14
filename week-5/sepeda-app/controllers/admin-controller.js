const Joi = require("joi");
const { Admins } = require("../models");
const catchError = require("../utils/catch-error");

const adminController = {
  getAdmins: async (req, res) => {
    try {
      const admins = await Admins.findAll({
        limit: 10,
        order: [["id", "DESC"]],
        attributes: {
          exclude: ["updatedAt", "createdAt"],
        },
      });
      if (admins.length == 0) {
        return res.status(404).json({
          status: "Data Not Found",
          message: "The data is empty",
          result: [],
        });
      }
      return res.status(200).json({
        status: "OK",
        message: "Successfuly retrieve data",
        result: admins,
      });
    } catch (error) {
      catchError(res, error);
    }
  },
  getAdmin: async (req, res) => {
    const { adminsId: id } = req.params;
    try {
      const admin = await Admins.findOne({
        where: { id },
        attributes: {
          exclude: ["updatedAt", "createdAt"],
        },
      });
      if (!admin) {
        return res.status(404).json({
          status: "Data Not Found",
          message: "Cannot find a vendor with id of " + id,
          result: {},
        });
      }
      res.status(200).json({
        status: "success",
        message: "Successfuly retrieve vendor",
        result: admin,
      });
    } catch (error) {
      catchError(res, error);
    }
  },
  updateAdmin: async (req, res) => {
    const { adminsId } = req.params;
    const body = req.body;
    try {
      const schema = Joi.object({
        name: Joi.string(),
        isAdmin: Joi.number(),
        password: Joi.string(),
        email: Joi.string().email(),
      });
      const { error } = schema.validate(body);

      if (error) {
        return res.status(400).json({
          status: "Bad Request",
          message: error.message,
          result: {},
        });
      }
      const checkUpdate = await Admins.update(body, {
        where: { id: adminsId },
      });
      if (checkUpdate[0] != 1) {
        return res.status(404).json({
          status: "Not Found",
          message: "Failed to update the data / data not found",
          result: {},
        });
      }
      const admin = await Admins.findByPk(adminsId);
      res.status(200).json({
        status: "success",
        message: "Successfuly update the data",
        result: admin,
      });
    } catch (error) {
      catchError(res, error);
    }
  },
  deleteAdmin: async (req, res) => {
      const { adminsId } = req.params
      try {
          const admin = await Admins.destroy({
            where: { id: adminsId },
          })
          if (!admin) {
            return res.status(404).json({
              status: "Data Not Found",
              message: "The data that you want to delete is not exist",
              result: {},
            });
          }
          res.status(200).json({
            status: "success",
            message: "Successfuly delete data",
            result: {},
          });
      } catch (error) {
          catchError(res, error);
      }
  },
};

module.exports = adminController;
