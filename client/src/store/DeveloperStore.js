import {makeAutoObservable} from 'mobx';

export default class DeveloperStore {
  constructor() {
    this._developer = {
      firstName: 'Илья',
      lastName: 'Литвиненко',
      email: 'lila96611@gmail.com',
      cover: 'https://www.w3schools.com/html/workplace.jpg',
      telegramLink: 'telegram1234',
      githubLink: 'githum1234'
    };
    makeAutoObservable(this);
  };

  setDeveloper(developer) {
    this._developer = developer;
  };

  get developer() {
    return this._developer;
  };
};