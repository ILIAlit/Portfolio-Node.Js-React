import { makeAutoObservable } from "mobx";

export default class ProjectStore {
  constructor() {
    this._post = [];
    this._postContent = [];
    makeAutoObservable(this);
  };

  setPost(post) {
    this._post = post;
  };
  setPostContent(postContent) {
    this._postContent = postContent;
  };

  get post() {
    return this._post;
  };
  get postContent() {
    return this._postContent;
  };
};