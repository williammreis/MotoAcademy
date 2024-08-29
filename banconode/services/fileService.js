const fs = require('fs').promises;
const path = require('path');
const mysql = require('mysql2/promise');
const config = require('../config/config');
const { log } = require('console');

const imageDirectory = path.join(__dirname, '../uploads');

async function uploadImage(file) {
    const filePath = path.join(imageDirectory, file.originalname);
    console.log(filePath);
    
    await fs.writeFile(filePath, file.buffer);

    const connection = await mysql.createConnection(config);
    const sql = 'INSERT INTO `images`(`filename`, `path`) VALUES (?, ?)';
    const values = [file.originalname, filePath];
    await connection.execute(sql, values);
    return { filename: file.originalname, path: filePath };
}


module.exports = {
    uploadImage,
};
