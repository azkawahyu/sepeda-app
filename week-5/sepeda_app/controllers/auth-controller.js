const Joi = require("joi");
const jwt = require("jsonwebtoken");
const { Admins } = require("../models");
const bcrypt = require("bcrypt");
const catchHandler = require("../utils/catch-handler");

module.exports = {
  register: async (req, res) => {
    const body = req.body;
    try {
      // validasi data dari body
      const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).required(),
      });
      const { error } = schema.validate(body);
      if (error) {
        return res.status(400).json({
          status: "Bad request",
          message: error.message,
          result: {},
        });
      }

      // check email apa sudah pernah digunakan untuk register
      const check = await Admins.findOne({
        where: {
          email: body.email,
        },
      });
      if (check) {
        return res.status(400).json({
          status: "Bad request",
          message: "Email has already exist",
          result: {},
        });
      }

      // enkripsi password menggunakan bcrypt
      const hashedPassword = await bcrypt.hash(body.password, 10);
      const user = await Admins.create({
        name: body.name,
        email: body.email,
        password: hashedPassword,
      });

      // generate token
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        process.env.SECRET_TOKEN,
        { expiresIn: 60 * 60 * 12 },
      );

      // return token jika success
      res.status(200).json({
        status: "Success",
        message: "Successfuly to register",
        result: {
          token,
        },
      });
    } catch (error) {
      catchHandler(res, error);
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
      });
      const { error } = schema.validate({ ...req.body });
      if (error) {
        return res.status(400).json({
          status: "Bad request",
          message: error.message,
          result: {},
        });
      }
      const user = await Admins.findOne({
        where: {
          email,
        },
      });
      if (!user) {
        return res.status(401).json({
          status: "Unauthorized",
          message: "Invalid email or password",
          result: {},
        });
      }
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        return res.status(401).json({
          status: "Unauthorized",
          message: "Invalid email or password",
          result: {},
        });
      }
      const token = jwt.sign(
        {
          email: user.email,
          id: user.id,
        },
        process.env.SECRET_TOKEN,
        { expiresIn: "12h" },
      );
      res.status(200).json({
        status: "Success",
        message: "Logged in successfuly",
        result: {
          token,
        },
      });
    } catch (error) {
      catchHandler(res, error);
    }
  },
};
