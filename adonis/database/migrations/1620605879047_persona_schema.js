'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonaSchema extends Schema {
  up () {
    this.create('personas', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('personas')
  }
}

module.exports = PersonaSchema
