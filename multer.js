const multer = require('multer');

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images') // Points to storage path
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '--' + file.originalname) // Adds date to file name
  },
});

const upload = multer({ storage: fileStorageEngine });

module.exports.upload = upload;
