const { Dream } = require('../models');

const dreamData = [
    {
        title: "Basketball",
        description: "I played basketball with Shaq. I lost.",
        user_id: 1,
        tagIds: [3],
    },
    {
        title: "Park",
        description: "I went to the park. The trip was nice, until I hit the ground.",
        user_id: 1,
        tagIds: [2],
    },
    {
        title: "Fall",
        description: "I was raking leaves with my father outside my childhood home.",
        user_id: 2,
        tagIds: [1],
    },
    {
        title: "Butter",
        description: "I was at the state fair. I had a heart attack after eating a deep fried stick of butter... worth it.",
        user_id: 2,
        tagIds: [1],
    },
    {
        title: "Can",
        description: "I was a bin man and a was chased by a racoon.",
        user_id: 3,
        tagIds: [3],
    },
    {
        title: "Beach",
        description: "I went to the beach and there was a giant crab. He was pretty chill though.",
        user_id: 3,
        tagIds: [1],
    },
    {
        title: "Bridge",
        description: "I was trying to climb one of those rope bridges that you see at the fair, and I got stuck and was too scared to let go. The operator told me it wasn't a long fall but I didn't believe him, what did he know? He wanted me to fail, I could see it in his eyes, hear it in his words, I wouldn't give him the satisfaction, NO! I must win this game. So with all my might, I clung to the rope. My hands were burning, and my arms shaking, but I would not be beat. I climbed one rung, and then another. Two more went by as I saw his face turn from smug disdain to dumbfounded. I knew I could win. Anyways, I woke up before I won but I know in my heart that I had.",
        user_id: 4,
        tagIds: [2],
    },
    
    {
        title: "Tax",
        description: "I did my taxes.",
        user_id: 4,
        tagIds: [3],
    },
    
];

const seedDreams = () => Dream.bulkCreate(dreamData);

module.exports = seedDreams;

