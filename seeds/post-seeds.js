const { Post } = require('../models');

const postData = [
    {
        title: "The Magic of Modern Communication: Owls vs. Emails",
        content: "In our magical world, owls are the primary means of communication across vast distances. This blog post explores the charm and challenges of using owls for sending messages compared to modern email technology. We delve into the efficiency, speed, and reliability of emails while acknowledging the unique charm and personal touch that comes with a letter delivered by an owl. The post concludes with a whimsical thought: what if emails could be enchanted to arrive in a puff of smoke, combining the best of both worlds?",
        user_id: 3
    },
    {
        title: "Potions Class Goes Digital: The Future of Magical Education",
        content: "Imagine a world where Hogwarts adopts technology in its curriculum, especially in Potions class. This blog post proposes a futuristic approach where students use tablets or smart devices to access recipes, conduct virtual simulations of potion brewing, and even use augmented reality to practice the craft. It highlights the benefits of incorporating technology into magical education, such as personalized learning, immediate feedback, and the safety of virtual trials for dangerous potions, all while maintaining the enchanting atmosphere of the traditional classroom.",
        user_id: 1
    },
    {
        title: "Invisibility Cloaks and Stealth Technology: Blending Magic with Muggle Innovation",
        content: "The Invisibility Cloak is one of the most fascinating magical items. This post explores the parallels between the cloak and current advancements in stealth technology and camouflage in the non-magical world. It discusses how scientists and engineers are inspired by concepts like the invisibility cloak to develop materials that can bend light or mimic surroundings, potentially revolutionizing military tactics, personal privacy, and even entertainment.",
        user_id: 2

    },
    {
        title: "The Marauder's Map: The Precursor to Real-Time GPS Tracking",
        content: "The Marauder's Map is a magical document that reveals all of Hogwarts, showing every person's location within the castle. This blog post draws a comparison between the map and modern GPS technology, including real-time tracking apps and devices. It considers the implications of such technology in terms of privacy, security, and the balance between convenience and surveillance, all while marvelling at the magical world's early adoption of such a sophisticated concept.",
        user_id: 2
    },
    {
        title: "Wandlore and the Science of Touchscreens",
        content: "Wands are central to the magic of our universe, each with its unique properties and connection to its owner. This post draws an intriguing parallel between wands and the technology behind touchscreens and smart devices. It discusses how the personalization of wands mirrors the customization of technology to fit individual needs and preferences. The piece concludes by imagining a world where our devices are as unique and attuned to us as wands are to witches and wizards, offering a blend of magic and technology that enhances our daily lives.",
        user_id: 1
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;