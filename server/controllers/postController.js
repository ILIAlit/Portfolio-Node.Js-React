const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/ApiError');
const {Post, PostContent} = require('../models/models');

class PostController {
  async getAll(req, res) {
    const posts = await Post.findAll();
    return res.json(posts);
  };

  async getOne(req, res) {
    const {id} = req.params;
    const post = await Post.findOne(
      {
        where: {id},
        include: [{model: PostContent}], 
      })
    return res.json(postContent);
  };

  async create(req, res, next) {
    try {
      const {title, description} = req.body;
      const {cover} = req.files;
      const {contentImg} = req.files;

      let coverName = uuid.v4() + '.jpg';
      let contentImgName = uuid.v4() + '.jpg';

      cover.mv(path.resolve(__dirname, '..', 'static', coverName));
      contentImg.mv(path.resolve(__dirname, '..', 'static', contentImgName));

      const post = await Post.create({title, cover: coverName});
      PostContent.create({
        description,
        contentImg: contentImgName,
        postId: post.id,
      });
      return res.json(post);
    } catch (event) {
      next(ApiError.badRequest(event));
    }
  };
};

module.exports = new PostController();