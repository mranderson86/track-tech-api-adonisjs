"use strict";

const CheckInModel = use("App/Models/CheckIn");
const User = use("App/Models/User");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with checkins
 */
class CheckInController {
  /**
   * Show a list of all checkins of user in today.
   * GET checkins/today
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async today({ auth, request, response }) {
    console.log("today");

    const user = await User.findOrFail(auth.user.id);
    const userCheckIns = await user.checkIns().fetch();

    //.where("created_at", "2020-03-18")

    return userCheckIns;
  }

  /**
   * Show a list of all checkins.
   * GET checkins
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const checkIns = await CheckInModel.all();

    return checkIns;
  }

  /**
   * Create/save a new checkin.
   * POST checkins
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ auth, request, response }) {
    const technology_id = request.body.technology_id;

    const data = {
      technology_id: technology_id,
      user_id: auth.user.id
    };

    const checkIn = await CheckInModel.create(data);
    return checkIn;
  }

  /**
   * Display a single checkin.
   * GET checkins/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const checkIn = await CheckInModel.findOrFail(params.id);

    return checkIn;
  }

  /**
   * Update checkin details.
   * PUT or PATCH checkins/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a checkin with id.
   * DELETE checkins/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const checkIn = await checkInModel.findOrFail(params.id);

    await checkIn.delete();
  }
}

module.exports = CheckInController;
