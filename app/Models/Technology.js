"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Technology extends Model {
  // Uma tecnologia pode ter muitos usuários
  users() {
    return this.hasMany("App/Models/Technology");
  }

  // Uma tecnologia pode ter muitos check-ins
  checkIns() {
    return this.hasMany("App/Models/CheckIn");
  }
}

module.exports = Technology;
