const RentModel = require("../Models/Rent.model")

module.exports.addNewRent = async (req, res) => {
   const rent = await RentModel.create();
   res.status(201).json(rent)
}

module.exports.seeAllRents = async (req, res) => {
   const rents = await RentModel.find({ownerId: req.params.id});
   res.json(rents)
}

module.exports.seeOneRent = async (req, res) => {
   const rent = await RentModel.findById(req.params.id);
   res.json(rent)
}

module.exports.updateOneRent = async (req, res) => {
   try {
      await RentModel.findByIdAndUpdate(
         { _id: req.params.id },
         { new: true, upsert: true, setDefaultsOnInsert: true },
         (err, docs) => {
           return res.send(docs);
         });
      
   } catch (error) {
      console.log(error);
   } 
}