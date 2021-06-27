const multer = require("multer");

// @todo add error message
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
	  var filetype = '';
      if(file.mimetype === 'image/gif') {
        filetype = 'gif';
      }
      if(file.mimetype === 'image/png') {
        filetype = 'png';
      }
      if(file.mimetype === 'image/jpeg') {
        filetype = 'jpg';
      }
    cb(null, 'image-' + Date.now()+ '.' + filetype);
  }
});

exports.adsUpload = multer({ storage }).fields([{
  name: 'image', maxCount: 1
}, {
  name: 'image', maxCount: 1
}]);
