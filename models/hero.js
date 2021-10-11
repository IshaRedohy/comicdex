const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({
    index: Number,
    name: String,
    intelligence: Number,
    strength: Number,
    speed: Number,
    durability: Number,
    power: Number,
    combat: Number,
    basestats: Number,
    image: String,
    realname: String,
    publisher: String,
    place_of_birth: String,
    first_appearance: String,
    side: String,
    sex: String,
    height: String,
    weight: String,
    groups: String,
    job: String
});

const Hero = mongoose.model("Hero", heroSchema);

module.exports = Hero;