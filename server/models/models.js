const sequelize = require('../data/db');
const {DataTypes} = require('sequelize');

const Developer = sequelize.define('developer', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  role: {type: DataTypes.STRING, unique:true, defaultValue: 'admin'},
  firstName: {type: DataTypes.STRING},
  lastName: {type: DataTypes.STRING},
  email: {type: DataTypes.STRING},
  cover: {type: DataTypes.STRING},
  telegramLink: {type: DataTypes.STRING},
  githubLink: {type: DataTypes.STRING},
});

const Post = sequelize.define('post', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING, unique: true},
  cover: {type: DataTypes.STRING},
});

const PostContent = sequelize.define('postContent', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  description: {type: DataTypes.STRING, unique: true},
  contentImg: {type: DataTypes.STRING},
  contentVideo: {type: DataTypes.STRING},
  githubLink: {type: DataTypes.STRING},
});

Post.hasOne(PostContent, {onDelete: 'cascade'});
PostContent.belongsTo(Post);

module.exports = {
  Developer,
  Post,
  PostContent,
}