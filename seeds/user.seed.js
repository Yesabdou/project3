const mongoose = require("mongoose");

require("../config/database");

const User = require("../Models/user.model");

const users = [
  {
    pseudo: "À chacun ses vacances",
    finess: "497556851",
    email: "asso1@hotmail.fr",
    adresse: "139 rue des Pyrénées - Bagnères 93 - 75020 Paris ",
    phone: "01 43 70 45 31",
    latitude: "",
    longitude: "",
    password: "azerty",
    picture:
      "https://w7.pngwing.com/pngs/682/603/png-transparent-grant-stairlift-funding-loan-disabled-child-child-loan-cartoon.png",
    bio: "Porter la voix des usagers. Informer, conseiller les usagers, former les représentants des usagers. Porter un plaidoyer sur les droits des patients.",
    wishlit: "",
  },
  {
    pseudo: "ASMF – Association Handisport de Paris",
    finess: "497895852",
    email: "asso2@hotmail.fr",
    adresse: "33, rue de la Roquette - Bat C2 - 75011 Paris ",
    phone: "06 12 73 90 42",
    latitude: "",
    longitude: "",
    password: "azerty",
    picture:
      "https://w7.pngwing.com/pngs/682/603/png-transparent-grant-stairlift-funding-loan-disabled-child-child-loan-cartoon.png",
    bio: "Porter la voix des usagers. Informer, conseiller les usagers, former les représentants des usagers. Porter un plaidoyer sur les droits des patients.",
    wishlit: "",
  },
  {
    pseudo:
      "CATRED -Collectif des Accidentés du Travail, handicapés et Retraités pour l’Égalité des Droits",
    finess: "497895853",
    email: "asso3@hotmail.fr",
    adresse: "20, boulevard Voltaire - 75011 Paris ",
    phone: "01 40 21 38 11",
    latitude: "",
    longitude: "",
    password: "azerty",
    picture:
      "https://w7.pngwing.com/pngs/682/603/png-transparent-grant-stairlift-funding-loan-disabled-child-child-loan-cartoon.png",
    bio: "Porter la voix des usagers. Informer, conseiller les usagers, former les représentants des usagers. Porter un plaidoyer sur les droits des patients.",
    wishlit: "",
  },
  {
    pseudo: "FMH-UD de Paris – Fédération des Malades et Handicapés",
    finess: "497588954",
    email: "asso4@hotmail.fr",
    adresse: "58 rue de Merlin - 75011 Paris ",
    phone: "01 43 55 97 74",
    latitude: "",
    longitude: "",
    password: "azerty",
    picture:
      "https://w7.pngwing.com/pngs/682/603/png-transparent-grant-stairlift-funding-loan-disabled-child-child-loan-cartoon.png",
    bio: "Porter la voix des usagers. Informer, conseiller les usagers, former les représentants des usagers. Porter un plaidoyer sur les droits des patients.",
    wishlit: "",
  },
  {
    pseudo: "Advocacy Paris Île de France",
    finess: "497589855",
    email: "asso5@hotmail.fr",
    adresse: "5 place des Fêtes - 75019 Paris ",
    phone: "01 46 07 18 18",
    latitude: "",
    longitude: "",
    password: "azerty",
    picture:
      "https://w7.pngwing.com/pngs/682/603/png-transparent-grant-stairlift-funding-loan-disabled-child-child-loan-cartoon.png",
    bio: "Porter la voix des usagers. Informer, conseiller les usagers, former les représentants des usagers. Porter un plaidoyer sur les droits des patients.",
    wishlit: "",
  },
  {
    pseudo: "CoActis Santé",
    finess: "497895856",
    email: "asso6@hotmail.fr",
    adresse: "85 boulevard de Port Royal - 75013 Paris ",
    phone: "",
    latitude: "",
    longitude: "",
    password: "azerty",
    picture:
      "https://w7.pngwing.com/pngs/682/603/png-transparent-grant-stairlift-funding-loan-disabled-child-child-loan-cartoon.png",
    bio: "Porter la voix des usagers. Informer, conseiller les usagers, former les représentants des usagers. Porter un plaidoyer sur les droits des patients.",
    wishlit: "",
  },
  {
    pseudo: "CRéDAVIS",
    finess: "497589857",
    email: "asso7@hotmail.fr",
    adresse: "Chemin des Gravilliers - 75016 Paris ",
    phone: "01 42 88 84 06",
    latitude: "",
    longitude: "",
    password: "azerty",
    picture:
      "https://w7.pngwing.com/pngs/682/603/png-transparent-grant-stairlift-funding-loan-disabled-child-child-loan-cartoon.png",
    bio: "Porter la voix des usagers. Informer, conseiller les usagers, former les représentants des usagers. Porter un plaidoyer sur les droits des patients.",
    wishlit: "",
  },
  {
    pseudo: "France Assos Santé Île-de-France",
    finess: "497590850",
    email: "asso8@hotmail.fr",
    adresse: "28 boulevard Pereire - 75017 Paris ",
    phone: "01 43 29 92 38",
    latitude: "",
    longitude: "",
    password: "azerty",
    picture:
      "https://w7.pngwing.com/pngs/682/603/png-transparent-grant-stairlift-funding-loan-disabled-child-child-loan-cartoon.png",
    bio: "Porter la voix des usagers. Informer, conseiller les usagers, former les représentants des usagers. Porter un plaidoyer sur les droits des patients.",
    wishlit: "",
  },
];

User.create(users)
  .then((users) => {
    console.log(`Created ${users.length} users`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while adding users from the DB: ${err}`)
  );
