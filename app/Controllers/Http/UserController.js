"use strict";

const User = use("App/Models/User");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class UserController {
  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const users = await User.all();

    return users;
  }

  /**
   * Display a single user.
   * GET users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ auth, request, response, view }) {
    const user = await User.findOrFail(auth.user.id);
    // const userCheckin = user.checkIns().fetch();
    return user;
  }

  /**
   * Display all check-in by user.
   * GET users/today
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async today({ auth, request, response, view }) {
    const user = await User.findOrFail(auth.user.id);
    //const userCheckin = user.checkIns().fetch();
    const userCheckin = user
      .checkIns()
      .where("created_at", "2020-03-18")
      .fetch();
    return userCheckin;
  }

  async create({ request }) {
    const data = request.only(["username", "email", "password"]);
    // cadastra um novo usuário
    const user = await User.create(data);

    return user;
  }
}

module.exports = UserController;
