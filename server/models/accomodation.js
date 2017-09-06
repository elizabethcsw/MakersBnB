module.exports = (sequelize, DataTypes) => {
  const accomodations = sequelize.define('accomodations', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rooms: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  accomodations.associate = (models) => {
    accomodations.belongsTo(models.Users, {
      foreignKey: 'accomodationsId',
      onDelete: 'CASCADE',
    });
  };

  return accomodations;
};
