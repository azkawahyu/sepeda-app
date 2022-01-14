const Joi = require("joi");
const { Sepeda, Vendor } = require("../models");
const catchError = require("../utils/catch-error");

module.exports = {
  createSepeda: async (req, res) => {
    const body = req.body;
    const file = req.file;
    try {
      const schema = Joi.object({
        vendorId: Joi.number().required(),
        name: Joi.string().required(),
        price: Joi.number().required(),
        image: Joi.string().required(),
        stock: Joi.number().required(),
      });
      const { error } = schema.validate({ ...body, image: file.path });
      if (error) {
        return res.status(400).json({
          status: "Bad Request",
          message: error.message,
          result: {},
        });
      }
      const sepeda = await Sepeda.create({ ...body, image: file.path });
      if (!sepeda) {
        return res.status(500).json({
          status: "Internal Server Error",
          message: "Error to create the data",
          result: {},
        });
      }

      res.status(201).json({
        status: "OK",
        message: "Successfuly create data",
        result: sepeda,
      });
    } catch (error) {
      catchError(res, error);
    }
  },
  getSepedas: async (req, res) => {
    try {
      const sepedas = await Sepeda.findAll({
        limit: 10,
        order: [["id", "DESC"]],
        include: [
          {
            model: Vendor,
            as: "vendor",
            attributes: {
              exclude: ["updatedAt", "createdAt"],
            },
          },
        ],
        attributes: {
          exclude: ["vendorId", "updatedAt", "createdAt"],
        },
      });
      if (sepedas.length == 0) {
        return res.status(404).json({
          status: "Data Not Found",
          message: "The data is empty",
          result: [],
        });
      }
      return res.status(200).json({
        status: "OK",
        message: "Successfuly retrieve data",
        result: sepedas,
      });
    } catch (error) {
      catchError(res, error);
    }
  },
  getSepeda: async (req, res) => {
    const { sepedaId: id } = req.params;
    try {
      const sepeda = await Sepeda.findOne({
        where: { id },
        order: [["id", "DESC"]],
        include: [
          {
            model: Vendor,
            as: "vendor",
            attributes: {
              exclude: ["updatedAt", "createdAt"],
            },
          },
        ],
        attributes: {
          exclude: ["vendorId", "updatedAt", "createdAt"],
        },
      });
      if (!sepeda) {
        return res.status(404).json({
          status: "Data Not Found",
          message: "Cannot find a sepeda with id of " + id,
          result: {},
        });
      }
      res.status(200).json({
        status: "success",
        message: "Successfuly retrieve sepeda",
        result: sepeda,
      });
    } catch (error) {
      catchError(res, error);
    }
  },
  updateSepeda: async (req, res) => {
    const { sepedaId } = req.params;
    const body = req.body;
    try {
      const schema = Joi.object({
        vendorId: Joi.number(),
        name: Joi.string(),
        price: Joi.number(),
        image: Joi.string(),
        stock: Joi.number(),
      });
      const { error } = schema.validate(body);

      if (error) {
        return res.status(400).json({
          status: "Bad Request",
          message: error.message,
          result: {},
        });
      }

      const checkUpdate = await Sepeda.update(body, {
        where: { id : sepedaId},
      });

      if (checkUpdate[0] != 1) {
        return res.status(404).json({
          status: "Not Found",
          message: "Failed to update the data / data not found",
          result: {},
        });
      }

      const sepeda = await Sepeda.findByPk(sepedaId);
      res.status(200).json({
        status: "success",
        message: "Successfuly update the data",
        result: sepeda,
      });
    } catch (error) {
      catchError(res, error);
    }
  },
  deleteSepeda: async (req,res) => {
    const { sepedaId } = req.params
    try {
      const sepeda = await Sepeda.destroy({
        where : { id:sepedaId }
      })
      if (!sepeda) {
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
  }
};
