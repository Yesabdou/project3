const UserModel = require("../Models/user.model");
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);

module.exports.uploadLogo = async (req, res) => {
  //1 installer multer    npm i multer

  const fileName = req.body.name + ".jpg";
  await pipeline(
    req.file.stream,
    fs.createWriteStream(
      `${__dirname}/../client/public/uploads/logo/${fileName}`
    )
  );
};
