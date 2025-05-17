import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");  // files will be saved in the 'uploads' folder relative to your project root
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);  // customize the filename
  }
});

export const upload = multer({ storage});