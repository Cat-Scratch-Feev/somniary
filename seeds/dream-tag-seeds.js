const { DreamTags } = require('../models');

const dreamTagData = [
    {
        dream_id: 1,
        tag_id: 3
    },
    {
        dream_id: 2,
        tag_id: 2
    },
    {
        dream_id: 3,
        tag_id: 1
    },
    {
        dream_id: 4,
        tag_id: 1
    },
    {
        dream_id: 5,
        tag_id: 3
    },
    {
        dream_id: 6,
        tag_id: 1
    },
    {
        dream_id: 7,
        tag_id: 2
    },
    {
        dream_id: 8,
        tag_id: 3
    },
    {
        dream_id: 9,
        tag_id: 3
    },
    {
        dream_id: 10,
        tag_id: 2
    },
    {
        dream_id: 11,
        tag_id: 3
    },
    {
        dream_id: 12,
        tag_id: 1
    },
    {
        dream_id: 13,
        tag_id: 1
    },
    {
        dream_id: 14,
        tag_id: 2
    },
    {
        dream_id: 15,
        tag_id: 1
    },
    {
        dream_id: 16,
        tag_id: 3
    },
    {
        dream_id: 17,
        tag_id: 3
    },
    {
        dream_id: 18,
        tag_id: 3
    },
    {
        dream_id: 19,
        tag_id: 3
    },
    {
        dream_id: 20,
        tag_id: 3
    },
    
];

const seedDreamTags = () => DreamTags.bulkCreate(dreamTagData);

module.exports = seedDreamTags;
