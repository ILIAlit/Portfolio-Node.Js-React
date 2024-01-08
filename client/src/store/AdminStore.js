import { makeAutoObservable } from "mobx";

export default class AdminStore {
  constructor() {
    this._isAdmin = true;
    this._admin = {};
    makeAutoObservable(this);
  };

  setIsAdmin(bool) {
    this._isAdmin = bool;
  };
  setAdmin(admin) {
    this._admin = admin;
  };

  get isAdmin() {
    return this._isAdmin;
  };
  get Admin() {
    return this._admin;
  };
};