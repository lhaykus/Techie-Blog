const { Comment } = require('../models');

const commentsData = [
    {
        user_id: 1,
        post_id: 1,
        comment_text: 'That is so cool!',
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: 'Sounds fun',
    },
    {
        user_id: 3,
        post_id: 3,
        comment_text: 'Thats a really good point!',
    },
    {
        user_id: 3,
        post_id: 1,
        comment_text: 'Handlebars makes it so much easier to make webpages in my opinion!'
    }, 
    {
        user_id: 1,
        post_id: 2,
        comment_text: 'I would totally use an app like that!'
    },
    {
        user_id: 2,
        post_id: 2,
        comment_text: 'Thanks guys!'
    }

];

const seedComments = () => Comment.bulkCreate(commentsData);

module.exports = seedComments;