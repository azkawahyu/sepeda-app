const Joi = require("joi");
const jwt = require("jsonwebtoken");
const { Admins } = require("../models");
const bcrypt = require("bcrypt");
const catchError = require("../utils/catch-error");

module.exports = {
  register: async (req, res) => {
    const body = req.body;
    try {
      const schema = Joi.object({
        email: Joi.string().email().required(),
        name: Joi.string().required(),
        password: Joi.string().min(5).required(),
      });
      const { error } = schema.validate(body);

      if (error) {
        res.status(400).json({
          status: "Bad Request",
          message: error.message,
          result: {},
        });
      }

      const check = await Admins.findOne({
        where: {
          email: body.email,
        },
      });
      if (check) {
        return res.status(400).json({
          status: "Bad Request",
          message:
            "Email Already Registered, Please Login or Use Another Email",
          result: {},
        });
      }

      const hashPassword = await bcrypt.hash(body.password, 10);
      const admin = await Admins.create({
        name: body.name,
        email: body.email,
        password: hashPassword,
      });

      const token = jwt.sign(
        {
          id: admin.id,
          email: admin.email,
        },
        process.env.SECRET_TOKEN,
        { expiresIn: 60*60*12 }
      );

      res.status(200).json({
        status: "OK",
        message: "Successfuly Create Data",
        result: { token: token },
      });
    } catch (error) {
      catchError(res, error);
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(5).required(),
      });
      const { error } = schema.validate({ ...req.body });
      if (error) {
        return res.status(400).json({
          status: "Bad Request",
          message: error.message,
          result: {},
        });
      }
      const admin = await Admins.findOne({ where: { email } });
      if(!admin){
        return res.status(401).json({
          status: "Not Authorized Account",
          message: "Invalid Email or Password",
          result: {},
        });
      }

      const valid = await bcrypt.compare(password, admin.password);

      if (!valid) {
        return res.status(401).json({
          status: "Not Authorized Account",
          message: "Invalid Email or Password",
          result: {},
        });
      }

      const token = jwt.sign({email:admin.email, id:admin.id}, 
        process.env.SECRET_TOKEN, {expiresIn: 60*60*12})

      res.status(200).json({
        status: "OK",
        message: "Successfuly Logged In",
        result: { token },
      })

    } catch (error) {
      catchError(res, error);
    }
  },
  
};
