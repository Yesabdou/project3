const mongoose = require('mongoose')

require("../config/database");

const Rent = require('../Models/Rent.model')


const rents = [
  {
    materialId: "sczv",
    ownerId: "rehnteh",
    startDate: "11/02/2021",
    endDate: "11/07/2021",
    status: "En cours",
    rentedTo: "ergfezg",
    address: "ezvgezg"
  },
  {
    materialId: "ezvfez",
    ownerId: "dsvrb",
    startDate: "11/03/2021",
    endDate: "11/08/2021",
    status: "Rendu",
    rentedTo: "ergfezg",
    address: "ezvgezg"
  },
  {
    materialId: "zegezg",
    ownerId: "regb",
    startDate: "11/04/2021",
    endDate: "11/09/2021",
    status: "Rendu",
    rentedTo: "ergfezg",
    address: "ezvgezg"
  },
  {
    materialId: "vezv",
    ownerId: "ervreb",
    startDate: "11/05/2021",
    endDate: "11/10/2021",
    status: "En cours",
    rentedTo: "ergfezg",
    address: "ezvgezg"
  },
  {
    materialId: "vevzef",
    ownerId: "brb",
    startDate: "11/06/2021",
    endDate: "11/11/2021",
    status: "Rendu",
    rentedTo: "ergfezg",
    address: "ezvgezg"
  },
  {
    materialId: "qsfqg",
    ownerId: "breb",
    startDate: "11/07/2021",
    endDate: "11/12/2021",
    status: "Rendu",
    rentedTo: "ergfezg",
    address: "ezvgezg"
  },
  {
    materialId: "sdgg",
    ownerId: "cbdfbdfb",
    startDate: "11/08/2021",
    endDate: "11/13/2021",
    status: "En cours",
    rentedTo: "ergfezg",
    address: "ezvgezg"
  },
  {
    materialId: "gsdgh",
    ownerId: "sebgrb",
    startDate: "11/09/2021",
    endDate: "11/14/2021",
    status: "Rendu",
    rentedTo: "ergfezg",
    address: "ezvgezg"
  },
  {
    materialId: "btnbtn",
    ownerId: "zegzrghzegh",
    startDate: "11/10/2021",
    endDate: "11/15/2021",
    status: "En cours",
    rentedTo: "ergfezg",
    address: "ezvgezg"
  }
];

Rent.create(rents)
  .then(rents => {
    console.log(`Created ${rents.length} rents`);
 
    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while adding rents from the DB: ${err}`));