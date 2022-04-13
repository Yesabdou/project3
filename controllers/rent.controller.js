const RentModel = require("../Models/Rent.model")

module.exports.newRent = async (req, res) => {
   const rent = await RentModel.create();
   res.status(201).json(rent)
}

