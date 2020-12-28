var DataTypes = require("sequelize").DataTypes;
var _world_dbs = require("./world_dbs");

function initModels(sequelize) {
  var world_dbs = _world_dbs(sequelize, DataTypes);


  return {
    world_dbs,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
