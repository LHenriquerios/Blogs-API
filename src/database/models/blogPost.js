module.exports = (sequelize, DataTypes) => {
    const BlogPosts = sequelize.define('BlogPosts', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: { type: DataTypes.INTEGER, foreignKey: true },
        published: DataTypes.DATE,
        updated: DataTypes.DATE
    });

    BlogPosts.associate = (models) => {
        BlogPosts.belongsTo(models.Users, { foreignKey: 'id', as: 'User' })
    };

    return BlogPosts;
};