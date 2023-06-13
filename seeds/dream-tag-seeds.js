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
    
];

const seedDreamTags = () => DreamTags.bulkCreate(dreamTagData);

module.exports = seedDreamTags;
