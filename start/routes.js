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

// Autenticação de usuários
Route.post("/sessions", "SessionController.create");

// Cria todas as rotas de CRUD (create , read, update , delete)
// para Tecnlogias
// Route.resource("/technologies", "TechnologyController")
//  .apiOnly()
//  .middleware("auth");

// Cria todas as rotas de CRUD para Check-Ins
//Route.resource("/checkins", "CheckInController")
//  .apiOnly()
//  .middleware("auth");

Route.group(() => {
  // consulta usuários
  Route.get("/users", "UserController.index");

  // consulta perfil do usuário
  Route.get("/users/profile", "UserController.show");

  // consulta tecnologias por usuário
  Route.get("/users/technologies", "UserController.technologies");

  // Cadastro de Tecnologias
  Route.post("/technologies", "TechnologyController.store");

  // Consulta todas as tecnologias
  Route.get("/technologies", "TechnologyController.index");

  // Consulta tecnologia disponível para o usuário
  Route.get("/technologies/available", "TechnologyController.available");

  // Consulta Check-Ins por tecnologia
  Route.get("/technologies/users", "TechnologyController.users");

  // Cadastro de check-ins
  Route.post("/checkins", "CheckInController.store");
}).middleware("auth");
