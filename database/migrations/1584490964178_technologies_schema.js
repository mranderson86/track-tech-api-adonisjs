'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TechnologiesSchema extends Schema {
  up () {
    this.create('technologies', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('technologies')
  }
}

module.exports = TechnologiesSchema
