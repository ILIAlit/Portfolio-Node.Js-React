const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/ApiError');
const {Developer} = require('../models/models');

class DeveloperController {
  async get(req, res) {
    const developer = await Developer.findAll();
    return res.json(developer);
  };

  async create(req, res, next) {
    try {
      const {firstName, lastName, email, telegramLink, githubLink} = req.body;
      const {cover} = req.files;
      let coverName = uuid.v4() + '.jpg';
      cover.mv(path.resolve(__dirname, '..', 'static', coverName));

      const developer = await Developer.create({firstName, lastName, email, cover: coverName, telegramLink, githubLink});
      return res.json(developer);
    } catch(event) {
      next(ApiError.badRequest(event));
    }
  };
};

module.exports = new DeveloperController();