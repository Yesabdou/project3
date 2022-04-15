const mongoose = require('mongoose')

require("../config/database");

const Rent = require('../Models/Rent.model')


const rents = [
  {
    materialId: "6257ea90678fc4726c1d75d6",
    ownerId: "6257e7055c29ba09c8369b4d",
    startDate: "11/02/2021",
    endDate: "11/07/2021",
    status: "En cours",
    rentedTo: "ergfezg",
    address: "ezvgezg"
  },
  {
    materialId: "6257ea90678fc4726c1d75d7",
    ownerId: "6257e7b130d4d97cdcf89091",
    startDate: "11/03/2021",
    endDate: "11/08/2021",
    status: "Rendu",
    rentedTo: "ergfezg",
    address: "ezvgezg"
  },
  {
    materialId: "6257ea90678fc4726c1d75d8",
    ownerId: "6257e7b130d4d97cdcf8908d",
    startDate: "11/04/2021",
    endDate: "11/09/2021",
    status: "Rendu",
    rentedTo: "ergfezg",
    address: "ezvgezg"
  },
  {
    materialId: "6257ea90678fc4726c1d75d9",
    ownerId: "6257e7b130d4d97cdcf89092",
    startDate: "11/05/2021",
    endDate: "11/10/2021",
    status: "En cours",
    rentedTo: "ergfezg",
    address: "ezvgezg"
  },
  {
    materialId: "6257ea90678fc4726c1d75da",
    ownerId: "6257e7b130d4d97cdcf89093",
    startDate: "11/06/2021",
    endDate: "11/11/2021",
    status: "Rendu",
    rentedTo: "ergfezg",
    address: "ezvgezg"
  },
  {
    materialId: "6257ea90678fc4726c1d75db",
    ownerId: "6257e7b130d4d97cdcf89094",
    startDate: "11/07/2021",
    endDate: "11/12/2021",
    status: "Rendu",
    rentedTo: "ergfezg",
    address: "ezvgezg"
  },
  {
    materialId: "6257ea90678fc4726c1d75dc",
    ownerId: "6257e7b130d4d97cdcf8908e",
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