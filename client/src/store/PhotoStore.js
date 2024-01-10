import { makeAutoObservable } from "mobx";

export default class PhotoStore {
  constructor() {
    this._photoes = [
      {
        id: 1,
        title: 'Photo1',
        img: 'https://www.w3schools.com/html/workplace.jpg'
      },
      {
        id: 2,
        title: 'Photo2',
        img: 'https://www.w3schools.com/html/workplace.jpg'
      },
      {
        id: 3,
        title: 'Photo3',
        img: 'https://www.w3schools.com/html/workplace.jpg'
      },
    ];
    makeAutoObservable(this);
  };

  set(photoes) {
    this._photoes = photoes;
  };

  get photoes() {
    return this._photoes;
  };
}