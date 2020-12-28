const helloGateway = require("./helloGateway");
const initModels = require("./init-models");
const db = require("./db");
const models = initModels(db);

function greet() {
  const helloResponse = helloGateway.getData();
  const worldResponse = models.Worlds.findOne({ where: { id: 1 } });
  return Promise.all([helloResponse, worldResponse])
    .then((values) => {
      const helloText = values[0].message;
      const worldText = values[1].dataValues.msg;
      return helloText + " " + worldText;
    })
    .catch((err) => err);
}

module.exports = { greet };
