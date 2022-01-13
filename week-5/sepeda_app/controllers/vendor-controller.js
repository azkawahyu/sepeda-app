const Joi = require("joi");
const { Vendor, Sepeda } = require("../models");
const catchHandler = require("../utils/catch-handler");

module.exports = {
  createVendor: async (req, res) => {
    const body = req.body;
    try {
      const schema = Joi.object({
        name: Joi.string().required(),
        city: Joi.string().required(),
        establishYear: Joi.number().required(),
      });
      const { error } = schema.validate(body);
      if (error) {
        return res.status(400).json({
          status: "Bad request",
          message: error.message,
          result: {},
        });
      }

      const vendor = await Vendor.create(body);
      if (!vendor) {
        return res.status(500).json({
          status: "Internal server error",
          message: "Failed to save the data to database",
          result: {},
        });
      }
      res.status(201).json({
        status: "Success",
        message: "Successfuly save the data to database",
        result: vendor,
      });
    } catch (error) {
      rcatchHandler(res, error);
    }
  },
  getVendors: async (req, res) => {
    try {
      const vendors = await Vendor.findAll({
        limit: 10,
        order: [["createdAt", "desc"]],
        include: [
          {
            model: Sepeda,
            as: "sepedas",
            attributes: {
              exclude: ["createdAt", "updatedAt", "vendorId"],
            },
          },
        ],
        attributes: {
          exclude: ["updatedAt"],
        },
      });
      if (!vendors) {
        return res.status(404).json({
          status: "Not found",
          message: "The data is empty",
          result: [],
        });
      }
      res.status(200).json({
        status: "Success",
        message: "Successfuly retrieve the data",
        result: vendors,
      });
    } catch (error) {
      catchHandler(res, error);
    }
  },
  getVendor: async (req, res) => {
    const { vendorId: id } = req.params;
    try {
      const vendor = await Vendor.findOne({
        where: {
          id,
        },
      });

      if (!vendor) {
        return res.status(404).json({
          status: "Data not found",
          message: `Cannot find a data with id of ${id}`,
          result: {},
        });
      }
      res.status(200).json({
        status: "Success",
        message: "Successfuly retrieve the data",
        result: vendor,
      });
    } catch (error) {
      catchHandler(res, error);
    }
  },
  updateVendor: async (req, res) => {
    const { vendorId } = req.params;
    const body = req.body;
    try {
      const schema = Joi.object({
        name: Joi.string(),
        city: Joi.string(),
        establishYear: Joi.number(),
      });
      const { error } = schema.validate(body);
      if (error) {
        return res.status(400).json({
          status: "Bad request",
          message: error.message,
          result: {},
        });
      }

      const update = await Vendor.update(body, {
        where: {
          id: vendorId,
        },
      });
      if (update[0] != 1) {
        return res.status(500).json({
          status: "Internal server error",
          message: "Failed update the data / data not found",
          result: {},
        });
      }

      const vendor = await Vendor.findOne({
        where: {
          id: vendorId,
        },
      });

      res.status(200).json({
        status: "Success",
        message: "successfuly update the data",
        result: vendor,
      });
    } catch (error) {
      catchHandler(res, error);
    }
  },
  deleteVendor: async (req, res) => {
    const { vendorId } = req.params;
    try {
      const vendor = await Vendor.destroy({
        where: {
          id: vendorId,
        },
      });
      if (!vendor) {
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
