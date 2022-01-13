const Joi = require("joi");
const { Sepeda, Vendor } = require("../models");
const catchHandler = require("../utils/catch-handler");

module.exports = {
  createSepeda: async (req, res) => {
    const body = req.body;
    const file = req.file;
    try {
      const schema = Joi.object({
        vendorId: Joi.number().required(),
        name: Joi.string().required(),
        stock: Joi.number().required(),
        price: Joi.number().required(),
        image: Joi.string().required(),
      });
      const { error } = schema.validate({
        ...body,
        image: file.path,
      });
      if (error) {
        return res.status(400).json({
          status: "Bad request",
          message: error.message,
          result: {},
        });
      }
      const sepeda = await Sepeda.create({
        ...body,
        image: file.path,
      });
      if (!sepeda) {
        return res.status(500).json({
          status: "Internal server error",
          message: "Failed to create the data",
          result: {},
        });
      }
      res.status(201).json({
        status: "Success",
        message: "Successfuly created sepeda",
        result: sepeda,
      });
    } catch (error) {
      catchHandler(res, error);
    }
  },
  getSepedas: async (req, res) => {
    try {
      const sepedas = await Sepeda.findAll({
        limit: 10,
        order: [["createdAt", "desc"]],
        include: [
          {
            model: Vendor,
            as: "vendor",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
        attributes: {
          exclude: ["vendorId", "createdAt", "updatedAt"],
        },
      });
      if (!sepedas) {
        return res.status(404).json({
          status: "Not found",
          message: "The data is empty",
          result: [],
        });
      }
      res.status(200).json({
        status: "Success",
        message: "Successfuly retrieve sepedas",
        result: sepedas,
      });
    } catch (error) {
      catchHandler(res, error);
    }
  },
  getSepeda: async (req, res) => {
    const { sepedaId: id } = req.params;
    try {
      const sepeda = await Sepeda.findOne({
        where: {
          id,
        },
      });

      if (!sepeda) {
        return res.status(404).json({
          status: "Data not found",
          message: `Cannot find a data with id of ${id}`,
          result: {},
        });
      }
      res.status(200).json({
        status: "Success",
        message: "Successfuly retrieve the data",
        result: sepeda,
      });
    } catch (error) {
      catchHandler(res, error);
    }
  },
  updateSepeda: async (req, res) => {
    const { sepedaId } = req.params;
    const body = req.body;
    const file = req.file;
    try {
      const schema = Joi.object({
        vendorId: Joi.number(),
        name: Joi.string(),
        stock: Joi.number(),
        price: Joi.number(),
        image: Joi.string(),
      });
      const { error } = schema.validate({
        ...body,
        image: file.path,
      });
      if (error) {
        return res.status(400).json({
          status: "Bad request",
          message: error.message,
          result: {},
        });
      }

      const update = await Sepeda.update(
        { ...body, image: file.path },
        {
          where: {
            id: sepedaId,
          },
        },
      );
      if (update[0] != 1) {
        return res.status(500).json({
          status: "Internal server error",
          message: "Failed update the data / data not found",
          result: {},
        });
      }

      const sepeda = await Sepeda.findOne({
        where: {
          id: sepedaId,
        },
      });

      res.status(200).json({
        status: "Success",
        message: "successfuly update the data",
        result: sepeda,
      });
    } catch (error) {
      catchHandler(res, error);
    }
  },
  deleteSepeda: async (req, res) => {
    const { sepedaId } = req.params;
    try {
      const sepeda = await Sepeda.destroy({
        where: {
          id: sepedaId,
        },
      });
      if (!sepeda) {
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
