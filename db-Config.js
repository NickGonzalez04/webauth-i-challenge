const knex = require('knex');


const KnexConfig = require('./knexfile.js');


module.exports = knex(KnexConfig.development);