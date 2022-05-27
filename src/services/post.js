const { BlogPost, User, Category } = require('../database/models');

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

module.exports = {
    getAll,
};