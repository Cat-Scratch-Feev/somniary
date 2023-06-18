const { Dream } = require('../models');

const dreamData = [
    {
        title: "Basketball",
        description: "I played basketball with Shaq. I lost.",
        user_id: 1,
        is_shared: false
    },
    {
        title: "Park",
        description: "I went to the park. The trip was nice, until I hit the ground.",
        user_id: 1,
        is_shared: true
    },
    {
        title: "Fall",
        description: "I was raking leaves with my father outside my childhood home.",
        user_id: 2,
        is_shared: false
    },
    {
        title: "Butter",
        description: "I was at the state fair. I had a heart attack after eating a deep fried stick of butter... worth it.",
        user_id: 2,
        is_shared: true
    },
    {
        title: "Can",
        description: "I was a bin man and a was chased by a racoon.",
        user_id: 3,
        is_shared: true
    },
    {
        title: "Beach",
        description: "I went to the beach and there was a giant crab. He was pretty chill though.",
        user_id: 3,
        is_shared: true
    },
    {
        title: "Bridge",
        description: "I was trying to climb one of those rope bridges that you see at the fair, and I got stuck and was too scared to let go. The operator told me it wasn't a long fall but I didn't believe him, what did he know? He wanted me to fail, I could see it in his eyes, hear it in his words, I wouldn't give him the satisfaction, NO! I must win this game. So with all my might, I clung to the rope. My hands were burning, and my arms shaking, but I would not be beat. I climbed one rung, and then another. Two more went by as I saw his face turn from smug disdain to dumbfounded. I knew I could win. Anyways, I woke up before I won but I know in my heart that I had.",
        user_id: 4,
        is_shared: true
    },
    {
        title: "Tax",
        description: "I did my taxes.",
        user_id: 4,
        is_shared: true
    },
    {
        title: "The Pop",
        description: "I was making biscuits, ya know, like I do every Wednesday at 4:35 in the afternoon, and as I went to open the biscuits, I felt something was different this time. And boy was I right, as the normal pop I was used to was replaced with a loud BANG as before my eyes appeared the Pillsberry Dough Man, no... not the boy, a 7ft tall Dough Man.",
        user_id: 5,
        is_shared: true
    },
    {
        title: "Couch",
        description: "I had been sitting on my couch for a few hours and slowly turned into a bowl of pasta.",
        user_id: 5,
        is_shared: true
    },
    {
        title: "The Cat",
        description: 'I was on this weird website and found a page talking about some kind of... cat revolution? And as I went to close the site, my own cat turned to me, standing on two feet and said, "run".',
        user_id: 6,
        is_shared: true
    },
    {
        title: "The Cat is back",
        description: "This one started with my cat standing over me. With a bowl in one paw and a laser pointer in the other. He spoke no words but placed the bowl on the floor at my level. I looked inside to see a perfectly cooked steak.",
        user_id: 6,
        is_shared: true
    },
    {
        title: "Jelly",
        description: "I was adrift in a sea of jelly. It was strawberry",
        user_id: 7,
        is_shared: false
    },
    {
        title: "A Gift",
        description: `I delivered a pizza to a house, and as a tip, I was gifted the whole pizza minus one slice, which they ate. When I asked why, they said "you wouldn't understand.`,
        user_id: 7,
        is_shared: true
    },
    {
        title: "Fridge",
        description: "I discovered a secret portal inside my refrigerator that led to a magical world filled with talking vegetables who were all aspiring comedians.",
        user_id: 8, 
        is_shared: true
    },
    {
        title: "Clips",
        description: "I found myself stuck inside a never-ending PowerPoint presentation about the thrilling world of paperclips.",
        user_id: 8,
        is_shared: false
    },
    {
        title: "Nacho",
        description: "Crunch triangles, they were called Crunch Triangles.",
        user_id: 9,
        is_shared: true
    },
    {
        title: "Swap",
        description: "Someone swapped my whole set of colored pencils for shades of yellow-green.",
        user_id: 9,
        is_shared: false
    },
    {
        title: "Failed",
        description: "I failed to log in... Even worse, they used an alert to show the error.",
        user_id: 10,
        is_shared: true
    },
    {
        title: "The Underscore",
        description: "These students had me around class past midnight, all for an underscore...",
        user_id: 10,
        is_shared: true
    },
    
];

const seedDreams = () => Dream.bulkCreate(dreamData);

module.exports = seedDreams;

