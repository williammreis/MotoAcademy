
const fileService = require('../services/fileService')

async function uploadImage(req, res) {
    try {
        console.log(req.file);
        
        const result = await fileService.uploadImage(req.file);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

function getImage () {}
function updateImage () {}
function deleteImage () {}



module.exports = {
    uploadImage,
    getImage,
    updateImage,
    deleteImage
};
