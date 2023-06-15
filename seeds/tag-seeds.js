const { Tags } = require('../models');

const tagData = [
    {
        name: "Dream"
    },
    {
        name: "In-Between"
    },
    {
        name: "Nightmare"
    }
];

const seedTags = () => Tags.bulkCreate(tagData);

module.exports = seedTags;
