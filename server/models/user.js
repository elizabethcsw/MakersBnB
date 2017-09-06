module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Users.associate = (models) => {
    Users.hasMany(models.accomodations, {
      foreignKey: 'UsersId',
      as: 'acommodations',
    });
  };

  return Users;
};
