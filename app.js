const axios = require("axios");
const mongoose = require("mongoose");
const express = require("express");     
const app = express();
const Hero = require("./models/hero");                  
const port = 5000;  

mongoose.connect("mongodb+srv://admin-hridoy:lhdAnelow007@cluster0.vccwk.mongodb.net/heroDB" , {useNewUrlParser: true, useUnifiedTopology: true});

app.get("/", async (req,res) => {
    try {
        for(let i = 120; i <= 731; i++) {
            let url = `https://superheroapi.com/api/5594445417296537/${i}`; 

            let response = await axios.get(url);
            let allData = response.data;
            //console.log(allData);

            let serial = allData.id;
            let theName = allData.name;
            let stats = allData.powerstats;  //access the powerstats object

            //console.log(theName);

            let heroPic = allData.image.url;

            let heroBio = allData.biography;
            let fullName = heroBio['full-name'];
            let Publisher = heroBio.publisher;

            let pob = heroBio['place-of-birth'];
            let first = heroBio['first-appearance'];
            let align = heroBio.alignment;

            let structure = allData.appearance;
            let Sex = structure.gender;
            let Height = structure.height[0];
            let Weight = structure.weight[0];

            let Groups = allData.connections['group-affiliation'];
            let Job = allData.work.occupation;

            let Intelligence = (stats.intelligence === "null") ? 0 : Number(stats.intelligence);
            let Strength = (stats.strength === "null") ? 0 :  Number(stats.strength);
            let Speed = (stats.speed === "null") ? 0 :  Number(stats.speed);
            let Durability = (stats.durability === "null") ? 0 :  Number(stats.durability);
            let Power = (stats.power === "null") ? 0 :  Number(stats.power);
            let Combat = (stats.combat === "null") ? 0 :  Number(stats.combat);

            let baseStat = (Intelligence + Strength + Speed + Durability + Power + Combat);

            //--------adding hero----------//
         const character = new Hero ({
            index: serial-1,
            name: theName,
            intelligence: Intelligence,
            strength: Strength,
            speed: Speed,
            durability: Durability,
            power: Power,
            combat: Combat,
            basestats: baseStat,
            image: heroPic,
            realname: fullName,
            publisher: Publisher,
            place_of_birth: pob,
            first_appearance: first,
            side: align,
            sex: Sex,
            height: Height,
            weight: Weight,
            groups: Groups,
            job: Job
        });

        //character.save();

        // try {
        //     Hero.insertMany(character , {unique: true});
        // } catch(e) {
        //     console.log(e);
        // }
        }

    } catch(err) {
        console.log(err);
    }
})

app.get("/dexlist", async (req, res) => {           //read all documents
    try {
        display = await Hero.find();
        res.json(display);
    } catch(error) {
        console.log(error);
    }
})

app.get("/dexlist/:index", async (req, res) => {        //read the exact document
    try {
        let formattedName = req.params.index;
        let formatted2 = formattedName.replace('|','/');

        //.replace('%20', ' ');

        const data = await Hero.find({index: formatted2});
        //res.setHeader('Access-Control-Allow-Origins')
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
    
})

app.listen(port, () => console.log(`server running on port ${port}`));