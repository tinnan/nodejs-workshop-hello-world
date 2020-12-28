const Seqeulize = require("sequelize");

const db = new Seqeulize("postgres", "postgres", "pass", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = db;
