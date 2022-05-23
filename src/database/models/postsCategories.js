module.exports = (sequelize, DataTypes) => {
    const PostsCategories = sequelize.define('postCategories', {}, {timestamps: false});

    PostsCategories.associate = (models) => {
        models.BlogPost.belongsToMany(models.Categories, {
            as: 'blogPosts',
            through: PostsCategories,
            foreignKey: 'id',
            otherKey: 'id',
        });

        models.Category.belongsToMany(models.BlogPosts, {
            as: 'categories',
            through: PostsCategories,
            foreignKey: 'id',
            otherKey: 'id',
        });
    };

    return PostsCategories;
};