const person = {
    firstName: "Imran",
    lastName: "Parthib",
    jobStatus: "SelfEmployed",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
};

console.log(person.fullName());

const date = new Date("Mar 25 2015");
console.log(date);

const biography = `🚀 Enthusiastic Web Developer and programmer 🌐 Crafting seamless digital experiences with passion and precision. Proudly representing the vibrant spirit of Bangladesh! 🇧🇩💻 #CodeCreator

💡 I love transforming ideas into reality through code. My journey in the world of programming is an ever-evolving exploration, and I thrive on challenges that push me to learn and grow.

🌱 Currently learning and exploring new technologies to stay ahead in the dynamic field of web development. Excited about the potential of AI, blockchain, and their intersection with web technologies.

📫 Connect with me! Let's discuss ideas, collaborate on projects, or just chat about the latest tech trends. Open to exciting opportunities and collaborations.`;

console.log(biography);