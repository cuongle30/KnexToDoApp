// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql and knex
var mysql = require('mysql')

const Knex = require('knex')(require('../../Unsolved/knexfile'))

// Export connection
module.exports = Knex
