const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "This post opens up a fascinating dialogue about the future of communication in the wizarding world. It invites us to dream and innovate while reminding us of the importance of maintaining a connection to our magical roots. As we move forward, let us do so with an open mind and a respect for both the magic and technology that shape our world.",
        user_id: 1,
        post_id: 1,
    },
    {
        comment_text: "The idea of integrating technology into Hogwarts' curriculum, especially for something as hands-on as Potions class, is definitely intriguing. From my first year at Hogwarts, it was clear how much of a difference hands-on experience makes, especially when dealing with something as delicate and complex as potion-making. The thought of using tablets or augmented reality to simulate potion brewing could offer a lot of benefits, particularly for safety and providing immediate feedback.",
        user_id: 2,
        post_id: 2,
    },
    {
        comment_text: "Integrating technology at Hogwarts, eh? That's a bit of a mind-bender, isn't it? First off, I'd have to get used to the idea of anything electronic working at Hogwarts, given all the magic flying around.",
        user_id: 3,
        post_id: 2,
    },
    {
        comment_text: "That's something I'd never have thought of, but it's brilliant when you think about it. The Invisibility Cloak's been nothing short of a lifesaver for us—sneaking around Hogwarts, dodging teachers, and who can forget all those close calls during... well, you know when.",
        user_id: 3,
        post_id: 3,
    },
    {
        comment_text: "What an interesting comparison! The Marauder's Map indeed serves as a precursor to the Muggle world's GPS and real-time tracking technologies. The comparison is quite apt in showing how magic can mirror, and sometimes even predict, the trajectory of Muggle technological advancements.",
        user_id: 1,
        post_id: 4,
    },
    {
        comment_text: "Blimey, comparing the Marauder's Map to GPS is something I hadn't thought of, but it makes a lot of sense when you think about it. The Map was one of the coolest things we had at Hogwarts—knowing where everyone was without them having a clue? Brilliant!",
        user_id: 3,
        post_id: 4,
    },
    {
        comment_text: "Reading about the parallels between wands and modern technology, particularly touchscreens and smart devices, is quite fascinating. It's a comparison I hadn't considered before, but it makes a lot of sense. My wand has always been more than just a tool; it's a part of who I am as a wizard. The idea that Muggles might feel a similar connection to their devices is intriguing and speaks to the universal desire for objects in our lives that feel personally significant.",
        user_id: 2,
        post_id: 5,

    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;