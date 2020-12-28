const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Worlds', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    msg: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Worlds',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Worlds_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
