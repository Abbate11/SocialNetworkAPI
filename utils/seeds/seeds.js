const mongoose = require('mongoose');
const { User, Thought} = require('../../models');

mongoose.connect('mongodb://127.0.0.1:27017/SocialNetworkDB') 
.then( () => {
    console.log('Mongo Connection Open');
}).catch((err) => {
    console.log(err)
});

const seedThoughts = [
    {
        thoughtText: "I am having a wonderful day!",
        username: "Abbate11"
    },
    {
        thoughtText: "Where is my mind?? Where?? Is my mind?",
        username: "ThatBoy"
    },
    {
        thoughtText: "Is Santa real??? My classmates are telling me he is actually my parents but I do not believe them.",
        username: "Benny"
    },
    {
        thoughtText: "I can not wait for Memorial Day!",
        username: "CherylAbbate"
    }
]

const seedUsers = [
    {
        username: "Abbate11",
        email: "Christian@myabbate.com"
    },
    {
        username: "Cody",
        email: "Dad@bootcamp.com"
    },
    {
        username: "ThatBoy",
        email: "Thatboii@gmail.com"
    },
    {
        username: "Benny",
        email: "Benny@jets.com"
    },
    {
        username: "CherylAbbate",
        email: "Cheryl@myabbate.com"
    }
]

const seedDB = async () => {
    await User.deleteMany({});
    await User.insertMany(seedUsers);
    console.log('Users Seeded');
    await Thought.deleteMany({});
    await Thought.insertMany(seedThoughts);
    console.log('Thoughts Seeded');
};

seedDB().then(() => {
    mongoose.connection.close()
})