module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        categoryId: {type: DataTypes.INTEGER, primaryKey: true}
    }, {timestamps: false});

    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
            as: 'blogPost',
            through: PostCategory,
            foreignKey: 'id',
            otherKey: 'id',
        });

        models.Category.belongsToMany(models.BlogPost, {
            as: 'category',
            through: PostCategory,
            foreignKey: 'id',
            otherKey: 'id',
        });
    };

    return PostCategory;
};