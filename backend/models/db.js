const pgp = require('pg-promise')();
const db = pgp('postgres://postgres:dhapu@localhost:5432/help_center');

module.exports = db;
