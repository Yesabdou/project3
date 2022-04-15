const mongoose = require("mongoose");

require("../config/database");

const Material = require("../Models/material.model");

const materials = [
  {
    name: "fauteuil",
    ref: "1234",
    owner: "6257e7055c29ba09c8369b4d",
    category: "Fauteuil roulant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo sed egestas egestas fringilla phasellus faucibus.",
    picture: "http://placehold.it/32x32",
    condition: "Etat neuf",
    ageMin: "3",
    ageMax: "5",
  },
  {
    name: "chaise jeune enfant",
    ref: "2345",
    owner: "6257e7b130d4d97cdcf89091",
    category: "Chaise adaptée",
    description:
      "Vivamus arcu felis bibendum ut. Lacus vestibulum sed arcu non odio euismod lacinia. Amet nisl purus in mollis nunc sed id. ",
    picture: "http://placehold.it/32x32",
    condition: "Bon état",
    ageMin: "4",
    ageMax: "6",
  },
  {
    name: "jeux",
    ref: "3456",
    owner: "6257e7b130d4d97cdcf8908d",
    category: "Matériel ludique",
    description:
      "Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Semper eget duis at tellus at urna condimentum mattis pellentesque.",
    picture: "http://placehold.it/32x32",
    condition: "Très bon état",
    ageMin: "6",
    ageMax: "9",
  },
  {
    name: "chaise enfant",
    ref: "4567",
    owner: "6257e7b130d4d97cdcf89092",
    category: "Chaise adaptée",
    description:
      "Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus.",
    picture: "http://placehold.it/32x32",
    condition: "Très bon état",
    ageMin: "8",
    ageMax: "10",
  },
  {
    name: "fauteuil roulant",
    ref: "5678",
    owner: "6257e7b130d4d97cdcf89093",
    category: "Fauteuil roulant",
    description:
      "Arcu non sodales neque sodales ut etiam sit. Nisl tincidunt eget nullam non nisi est sit.",
    picture: "http://placehold.it/32x32",
    condition: "Etat neuf",
    ageMin: "12",
    ageMax: "15",
  },
  {
    name: "jeux enfant",
    ref: "6789",
    owner: "6257e7b130d4d97cdcf89094",
    category: "Matériel ludique",
    description:
      "Semper eget duis at tellus at urna condimentum mattis pellentesque. Netus et malesuada fames ac.",
    picture: "http://placehold.it/32x32",
    condition: "Etat satisfaisant",
    ageMin: "10",
    ageMax: "13",
  },
  {
    name: "chaises",
    ref: "2647",
    owner: "6257e7b130d4d97cdcf8908e",
    category: "Chaise adaptée",
    description:
      "Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus.",
    picture: "http://placehold.it/32x32",
    condition: "Très bon état",
    ageMin: "9",
    ageMax: "11",
  },
  {
    name: "materiel ludique",
    ref: "7658",
    owner: "Secours Catholique",
    category: "Matériel ludique",
    description:
      "Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Semper eget duis at tellus at urna condimentum mattis pellentesque.",
    picture: "http://placehold.it/32x32",
    condition: "Etat neuf",
    ageMin: "7",
    ageMax: "10",
  },
  {
    name: "chaise roulante enfant",
    ref: "6655",
    owner: "Apprentis D'Auteuil Fondation d'Auteuil",
    category: "Fauteuil roulant",
    description:
      "Arcu non sodales neque sodales ut etiam sit. Nisl tincidunt eget nullam non nisi est sit.",
    picture: "http://placehold.it/32x32",
    condition: "Etat satisfaisant",
    ageMin: "6",
    ageMax: "9",
  },
  {
    name: "fauteuil roulant enfant",
    ref: "2365",
    owner: "Fondation De France",
    category: "Fauteuil roulant",
    description:
      "Semper eget duis at tellus at urna condimentum mattis pellentesque. Netus et malesuada fames ac.",
    picture: "http://placehold.it/32x32",
    condition: "Bon état",
    ageMin: "8",
    ageMax: "11",
  },
];

Material.create(materials)
  .then((materials) => {
    console.log(`Created ${materials.length} materials`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while adding materials from the DB: ${err}`)
  );
