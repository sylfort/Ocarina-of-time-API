const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;

app.use(cors());

const bosses = {
  gohma: {
    name: "Gohma",
    subtitle: "Parasitic Armored Arachnid",
    location: "Inside the Deku Tree",
  },
  "king dodongo": {
    name: "King Dodongo",
    subtitle: "Infernal Dinosaur",
    location: "Dodongo's Cavern",
  },
  barinade: {
    name: "Barinade",
    subtitle: "Bio-Electric Anemone",
    location: "Inside Jabu-Jabu's Belly",
  },
  "phantom ganon": {
    name: "Phantom Ganon",
    subtitle: "Evil Spirit from Beyond",
    location: "Forest Temple",
  },
  volvagia: {
    name: "Volvagia",
    subtitle: "Subterranean Lava Dragon",
    location: "Fire Temple",
  },
  morpha: {
    name: "Morpha",
    subtitle: "Giant Aquatic Amoeba",
    location: "Water Temple",
  },
  "bongo bongo": {
    name: "Bongo Bongo",
    subtitle: "Phantom Shadow Beast",
    location: "Shadow Temple",
  },
  Twinrova: {
    name: "Twinrova",
    subtitle: "Sorceress Sisters",
    location: "Spirit Temple",
  },
  ganondorf: {
    name: "Ganondorf",
    subtitle: "Great King of Evil",
    location: "Ganon's Castle",
  },
  ganon: {
    name: "Ganon",
    subtitle: "Great King of Evil",
    location: "Ganon's Castle",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:bossName", (req, res) => {
  const bossName = req.params.bossName.toLowerCase();

  bosses[bossName] ? res.json(bosses[bossName]) : res.json(bosses[link]);
});

app.listen(process.env.PORT || PORT, () => {
  console.log("listening on port 5000");
});
