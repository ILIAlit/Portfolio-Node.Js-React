import { makeAutoObservable } from "mobx";

export default class ProjectStore {
  constructor() {
    this._posts = [
      {
        id: 1, 
        title: 'Проект 1',
        cover: 'https://www.w3schools.com/html/workplace.jpg',
      },
      {
        id: 2, 
        title: 'Проект 2',
        cover: 'https://www.w3schools.com/html/workplace.jpg',
      },
      {
        id: 3, 
        title: 'Проект 3',
        cover: 'https://www.w3schools.com/html/workplace.jpg',
      }
    ];
    this._postContents = [
      {
        id: 1,
        description: 'Описание 1',
        contentImg: 'https://www.w3schools.com/html/workplace.jpg',
        contentVideo: 'https://www.youtube.com/watch?v=bSHcEhZFiso',
        githubLink: '12',

      },
      {
        id: 2,
        description: 'Описание 2',
        contentImg: 'https://www.w3schools.com/html/workplace.jpg',
        contentVideo: '',
        githubLink: '',
      },
      {
        id: 3,
        description: 'Описание 3',
        contentImg: 'https://www.w3schools.com/html/workplace.jpg',
        contentVideo: '',
        githubLink: '',
      },
    ];
    makeAutoObservable(this);
  };

  setPost(posts) {
    this._posts = posts;
  };
  setPostContent(postContents) {
    this._postContents = postContents;
  };

  get posts() {
    return this._posts;
  };
  get postContents() {
    return this._postContents;
  };
};