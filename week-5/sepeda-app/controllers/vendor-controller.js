const Joi = require("joi");
const { Vendor, Sepeda } = require("../models");
const catchError = require("../utils/catch-error");

const vendorController = {
  createVendor: async (req, res) => {
    const body = req.body;
    try {
      const schema = Joi.object({
        name: Joi.string().required(),
        year: Joi.number().required(),
        city: Joi.string().required(),
      });

      const { error } = schema.validate(body);
      if (error) {
        return res.status(400).json({
          status: "Bad Request",
          message: error.message,
          result: {},
        });
      }

      const vendor = await Vendor.create(body);

      if (!vendor) {
        return res.status(500).json({
          status: "Internal Server Error",
          message: "Error to create the data",
          result: {},
        });
      }

      res.status(201).json({
        status: "OK",
        message: "Successfuly create data",
        result: vendor,
      });
    } catch (error) {
      catchError(res, error);
    }
  },
  getVendors: async (req, res) => {
    try {
      const vendors = await Vendor.findAll({
        limit: 10,
        order: [["id", "DESC"]],
        include: [
          {
            model: Sepeda,
            as: "sepedas",
            attributes: {exclude: 
              ["updatedAt", "createdAt"]}
            },
        ],
        attributes: {
          exclude: ["updatedAt", "createdAt"],
        },
      });

      if (vendors.length == 0) {
        return res.status(404).json({
          status: "Data Not Found",
          message: "The data is empty",
          result: [],
        });
      }
      return res.status(200).json({
        status: "OK",
        message: "Successfuly retrieve data",
        result: vendors,
      });
    } catch (error) {
      catchError(res, error);
    }
  },
  getVendor: async (req, res) => {
    const { vendorId: id } = req.params;
    try {
      const vendor = await Vendor.findOne({
        where: { id },
        include: [
          {
            model: Sepeda,
            as: "sepedas",
            attributes: {exclude: 
              ["updatedAt", "createdAt"]}
            },
        ],
        attributes: {
          exclude: ["updatedAt", "createdAt"],
        },
      });
      if (!vendor) {
        return res.status(404).json({
          status: "Data Not Found",
          message: "Cannot find a vendor with id of " + id,
          result: {},
        });
      }
      res.status(200).json({
        status: "success",
        message: "Successfuly retrieve vendor",
        result: vendor,
      });
    } catch (error) {
      catchError(res, error);
    }
  },
  updateVendor: async (req, res) => {
    const { vendorId } = req.params;
    const body = req.body;
    try {
      const schema = Joi.object({
        name: Joi.string(),
        year: Joi.number(),
        city: Joi.string(),
      });

      const { error } = schema.validate(body);

      if (error) {
        return res.status(400).json({
          status: "Bad Request",
          message: error.message,
          result: {},
        });
      }

      const checkUpdate = await Vendor.update(body, {
        where: { id: vendorId },
      });

      if (checkUpdate[0] != 1) {
        return res.status(404).json({
          status: "Not Found",
          message: "Failed to update the data / data not found",
          result: {},
        });
      }

      const vendor = await Vendor.findByPk(vendorId);

      res.status(200).json({
        status: "success",
        message: "Successfuly update the data",
        result: vendor,
      });
    } catch (error) {
      catchError(res, error);
    }
  },
  deleteVendor: async (req, res) => {
    const { vendorId } = req.params;
    try {
      const vendor = await Vendor.destroy({
        where: { id: vendorId },
      });
      if (!vendor) {
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

module.exports = vendorController;
