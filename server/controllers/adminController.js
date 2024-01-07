const ApiError = require('../error/ApiError');
const { Admin } = require('../models/models');


class AdminController {
  async login(res, req, next) {
    const {login, password} = req.body;
    const admin = await Admin.findOne({where: {login}});
    if(!admin) {
      next(ApiError.internal('Data ERROR!'));
    };
    let comparePassword = password === admin.password;
    if(!comparePassword) {
      next(ApiError.internal('Data ERROR!'));
    };
    return res.json(admin);
  };
}

module.exports = new AdminController();