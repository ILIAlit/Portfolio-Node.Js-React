const ApiError = require('../error/ApiError');
const { Admin } = require('../models/models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const generateJwt = (login, role) => {
  return jwt.sign(
    {login, role},
    process.env.SECRET_KEY,
    {expiresIn: '24h'},
  );
};

class AdminController {
  async login(req, res, next) {
    try {
      const {login, password} = req.body;
      const admin = await Admin.findOne({where: {login}});
      if(!admin) {
        return next(ApiError.internal('Data ERROR!'));
      };
      let comparePassword = bcrypt.compareSync(password, admin.password);
      if(!comparePassword) {
        return next(ApiError.internal('Data ERROR!'));
      };
      const token = generateJwt(admin.login, admin.role);
      return res.json(token);
    } catch(event) {
      next(ApiError.badRequest(event));
    }
  };
}

module.exports = new AdminController();

