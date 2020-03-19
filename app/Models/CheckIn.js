"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class CheckIn extends Model {
  static get dates() {
    return super.dates.concat(["dob"]);
  }

  static formatDates(field, value) {
    if (field === "dob") {
      return value.format("YYYY-MM-DD");
    }
    return super.formatDates(field, value);
  }
}

module.exports = CheckIn;
