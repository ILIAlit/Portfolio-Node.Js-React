import {makeAutoObservable} from 'mobx';

export default class DeveloperStore {
  constructor() {
    this._isAuth = false;
    this._developer = {};
    makeAutoObservable(this);
  };

  setIsAuth(bool) {
    this._isAuth = bool;
  };
  setDeveloper(developer) {
    this._developer = developer;
  };

  get isAuth() {
    return this._isAuth;
  };
  get developer() {
    return this._developer;
  };
};