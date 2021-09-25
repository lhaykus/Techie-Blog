const { Post } = require('../models');

const postData = [
    {
        title: 'Learned New Technology',
        post_content: 'Today in class I learned about handlebars and how to use them to create the layout of the webpages',
        user_id: 1,
    },
    {
        title: 'New App',
        post_content: 'I got this idea to make an alien/Bigfoot tracker as an app where people can post their sightings on an interactive map and interact with others.',
        user_id: 2,
    },
    {
        title: 'Why syntax is so important',
        post_content: 'The way you write code can make or break youre entire app! Make sure to use correct syntax all the time',
        user_id: 3,
    },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;

