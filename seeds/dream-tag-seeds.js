const { DreamTags } = require('../models');

const dreamTagData = [
    {
        dream_id: 1,
        tag_id: 3
    },
    
];

const seedDreamTags = () => DreamTags.bulkCreate(dreamTagData);

module.exports = seedDreamTags;
