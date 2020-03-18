'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CheckInsSchema extends Schema {
  up () {
    this.create('check_ins', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('check_ins')
  }
}

module.exports = CheckInsSchema
