const multer = require('multer')

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './uploads/');
        }
    }), fileFilter: (req, file, cb) => {
        if (file.mimetype == 'video/mp4' || file.mimetype == 'audio/mpeg') {
            cb(null, true)
        } else {
            cb(null, false)
        }
    }
})

module.exports = upload