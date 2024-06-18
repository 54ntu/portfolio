const multer = require("multer")
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/public/temp");
  },
  filename: function (req, file, cb) {
    const fileName = Date() + file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });
module.exports = {upload}