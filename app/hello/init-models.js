var DataTypes = require("sequelize").DataTypes;
var _Worlds = require("./Worlds");

function initModels(sequelize) {
  var Worlds = _Worlds(sequelize, DataTypes);


  return {
    Worlds,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
