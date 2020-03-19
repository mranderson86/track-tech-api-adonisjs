"use strict";

const technologyModel = use("App/Models/Technology");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with technologies
 */
class TechnologyController {
  /**
   * Show a list of all technologies.
   * GET technologies
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const technologies = await technologyModel.all();

    return technologies;
  }

  /**
   * Create/save a new technology.
   * POST technologies
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.only(["technology"]);
    // cadastra uma nova tecnologias
    const technology = await technologyModel.create(data);

    return technology;
  }

  /**
   * Display a single technology.
   * GET technologies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const technology = await technologyModel.findOrFail(params.id);

    return technology;
  }

  /**
   * Update technology details.
   * PUT or PATCH technologies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a technology with id.
   * DELETE technologies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const technology = await technologyModel.findOrFail(params.id);

    await technology.delete();
  }
}

module.exports = TechnologyController;
