const Seqeulize = require("sequelize");

const db = new Seqeulize("Worlds", "postgres", "pass", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = db;
