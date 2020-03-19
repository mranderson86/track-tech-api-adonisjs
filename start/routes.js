"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { Message: "Tracking Service Is Running" };
});

// Cadastro de usuários
Route.post("/users", "UserController.create");

Route.get("/users", "UserController.index").middleware("auth");

Route.get("/users/profile", "UserController.show").middleware("auth");

Route.get("/users/today", "UserController.today").middleware("auth");

// Autenticação de usuários
Route.post("/sessions", "SessionController.create");

// Cria todas as rotas de CRUD (create , read, update , delete)
// para Tecnlogias
Route.resource("/technologies", "TechnologyController")
  .apiOnly()
  .middleware("auth");

// Cria todas as rotas de CRUD para Check-Ins
Route.resource("/checkins", "CheckInController")
  .apiOnly()
  .middleware("auth");

// Route.get("/checkins/today", "CheckInController.today").middleware("auth");
