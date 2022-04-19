const RentModel = require("../Models/Rent.model")

module.exports.saveNewRent = async (req, res) => {
   try {
     const {
       materialId,
       ownerId,
       startDate,
       endDate,
       status,
       rentedTo,
       adresse,
     } = req.body;
     const rent = await RentModel.create({
      materialId,
      ownerId,
      startDate,
      endDate,
      status,
      rentedTo,
      adresse,
     });
     res.status(201).json({ rent: rent._id });
   } catch (error) {
     console.log(error);
   }
 };

module.exports.seeAllRentsForOneUser = async (req, res) => {
   const rents = await RentModel.find({ownerId: req.params.userid});
   res.json(rents)
}

module.exports.seeAllRentsForOneMaterial = async (req, res) => {
   const rents = await RentModel.find({materialId: req.params.materialid});
   res.json(rents)
}

module.exports.seeOneRent = async (req, res) => {
   const rent = await RentModel.findById(req.params.rentid);
   res.json(rent)
}

module.exports.updateOneRent = async (req, res) => {
   try {
        const updatedRent = await RentModel.findByIdAndUpdate(
            req.params.rentid,
            req.body,
            { new: true},
            );
            res.json(updatedRent)
            
   } catch (error) {
      console.log(error);
   } 
}