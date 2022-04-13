const mongoose = require('mongoose')

require("../config/database");

const User = require('../Models/user.model')


const users = [
    {
      pseudo: "jojo22",
      finess: "1234",
      nomAssociation: "SOS Espoir",
      adresse: "57 bd Charonne, 75011 Paris",
      téléphone: "0145252210",
      email: "example@gmail.com",
      password: "ht$vcD\"3u?L>;#j[",
      picture: "http://placehold.it/32x32",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo sed egestas egestas fringilla phasellus faucibus."
    },
    {
      pseudo: "jeanot33",
      finess: "1111",
      nomAssociation: "SOS Futures Mères",
      adresse: "23 r Rocroy, 75010 Paris",
      téléphone: "0145252211",
      email: "example1@gmail.com",
      password: "<PuU\\Uj\"r38&/Z;W",
      picture: "http://placehold.it/32x32",
      bio: "Vivamus arcu felis bibendum ut. Lacus vestibulum sed arcu non odio euismod lacinia. Amet nisl purus in mollis nunc sed id. "
    },
    {
      pseudo: "xvdmrpk",
      finess: "2222",
      nomAssociation: "Fédération des Aveugles et Amblyopes de France",
      adresse: "6 r Gager Gabillot, 75015 Paris",
      téléphone: "0145252212",
      email: "example2@gmail.com",
      password: "4hEuBSWEw7Eevt8t",
      picture: "http://placehold.it/32x32",
      bio: "Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Semper eget duis at tellus at urna condimentum mattis pellentesque."
    },
    {
      pseudo: "abdou99",
      finess: "3333",
      nomAssociation: "Médecins Sans Frontières",
      adresse: "34 av Jean Jaurès, 75019 Paris ",
      téléphone: "0145252213",
      email: "example3@gmail.com",
      password: "fKntZsSDMn3sBaJN",
      picture: "http://placehold.it/32x32",
      bio: "Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus."
    },
    {
      pseudo: "marco99",
      finess: "4444",
      nomAssociation: "Forum réfugiés-Cosi",
      adresse: "3 bd Richard Lenoir, 75011 Paris",
      téléphone: "0145252214",
      email: "example4@gmail.com",
      password: "RQDC7XyuUvMsp9V2",
      picture: "http://placehold.it/32x32",
      bio: "Arcu non sodales neque sodales ut etiam sit. Nisl tincidunt eget nullam non nisi est sit."
    },
    {
      pseudo: "joshua12",
      finess: "5555",
      nomAssociation: "Fondation Brigitte Bardot",
      adresse: "28 r Vineuse, 75116 Paris ",
      téléphone: "0145252215",
      email: "example5@gmail.com",
      password: "M8qb8DshguU62Lz3",
      picture: "http://placehold.it/32x32",
      bio: "Semper eget duis at tellus at urna condimentum mattis pellentesque. Netus et malesuada fames ac."
    },
    {
      pseudo: "yoyoyo43",
      finess: "6666",
      nomAssociation: "Fondation Française de l'Ordre de Malte",
      adresse: "42 r Volontaires, 75015 Paris",
      téléphone: "0145252216",
      email: "example6@gmail.com",
      password: "37xWQkgj8thwHyxj",
      picture: "http://placehold.it/32x32",
      bio: "Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus."
    },
    {
      pseudo: "mr55MM",
      finess: "7777",
      nomAssociation: "Secours Catholique",
      adresse: "106 r Bac, 75007 Paris ",
      téléphone: "0145252217",
      email: "example7@gmail.com",
      password: "G3wU8j7r3MC32yxE",
      picture: "http://placehold.it/32x32",
      bio: "Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Semper eget duis at tellus at urna condimentum mattis pellentesque."
    },
    {
      pseudo: "elisa88",
      finess: "8888",
      nomAssociation: "Apprentis D'Auteuil Fondation d'Auteuil",
      adresse: "40 r Jean de la Fontaine, 75016 Paris",
      téléphone: "0145252218",
      email: "example8@gmail.com",
      password: "6aKDCqW62K7p33fg",
      picture: "http://placehold.it/32x32",
      bio: "Arcu non sodales neque sodales ut etiam sit. Nisl tincidunt eget nullam non nisi est sit."
    },
    {
      pseudo: "projet11",
      finess: "9999",
      nomAssociation: "Fondation De France",
      adresse: "40 av Hoche, 75008 Paris",
      téléphone: "0145252219",
      email: "example9@gmail.com",
      password: "6dDv2VZV2BpLJEHM",
      picture: "http://placehold.it/32x32",
      bio: "Semper eget duis at tellus at urna condimentum mattis pellentesque. Netus et malesuada fames ac."
    }
  ];

User.create(users)
  .then(users => {
    console.log(`Created ${users.length} users`);
 
    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while adding users from the DB: ${err}`));