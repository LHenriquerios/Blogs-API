module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        displayName: DataTypes.STRING,
        email: {type: DataTypes.STRING, unique: true},
        password: DataTypes.STRING,
        image: Data.STRING
    },
    {
        timestamps: 'false',
    });

    Users.associate = (models) => {
        Users.hasMany(models.BlogPosts, {foreignKey: 'id', as: 'blogPosts'})
    };

    return Users;
};