import {makeAutoObservable} from 'mobx';

export default class DeveloperStore {
  constructor() {
    this._developer = {};
    makeAutoObservable(this);
  };

  setDeveloper(developer) {
    this._developer = developer;
  };

  get developer() {
    return this._developer;
  };
};