const { BlogPost, User, Category, PostCategory } = require('../database/models');
const { BAD_REQUEST, NOT_FOUND } = require('../statusCode');

const getAll = async () => BlogPost.findAll({
    include: [{
        model: User,
         as: 'user',
        attributes: { exclude: ['password'] },
    },
    {
        model: Category, as: 'categories', through: { attributes: [] },
    }],
});

const getById = async (id) => {
    const post = await BlogPost.findByPk(id, {
        include: [{
            model: User,
            as: 'user',
            attributes: { exclude: ['password'] },
        },
    {
        model: Category, as: 'categories', through: { attributes: [] },
    }],
    });

    if (!post) {
        const error = { status: NOT_FOUND, message: 'Post does not exist' };
        throw error;
    }

    return post;
};

const createPost = async ({ userId, title, content, categoryIds }) => {
    const category = await Promise.all(categoryIds.map((id) => Category.findOne({
        where: { id },
    })));
    const isnull = category.every((e) => e === null);
    if (isnull) {
        const error = { status: BAD_REQUEST, message: '"categoryIds" not found' };
        throw error;
    }

    const arrayFilter = category.filter((e) => e !== null);
    const newPost = await BlogPost.create({ title, content, userId });
    
    const postCategories = arrayFilter.map((e) => ({
        categoryId: e.dataValues.id, postId: newPost.dataValues.id,
    }));

    await PostCategory.bulkCreate(postCategories);

    return newPost;
};

module.exports = {
    getAll,
    getById,
    createPost,
};