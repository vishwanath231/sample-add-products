import multer from "multer";
import path from 'path';

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'frontend/public/images/')
    },
    filename(req, file, cb){
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})

function checkFileType(file, cb) {

    const fileType = /jpg|jpeg|png/
    const extname =fileType.test(path.extname(file.originalname).toLowerCase())
    const mimeType = fileType.test(file. mimetype)

    if (extname && mimeType) {
        return  cb(null, true)
    }else {
        cb('image only')
    }
}

const upload = multer({
    storage: storage
    // fileFilter: function (req, file, cb){
    //     checkFileType(file, cb)
    // },
})

export default upload;