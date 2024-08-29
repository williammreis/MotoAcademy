const mysql = require('mysql2/promise');
const config = require('../config/config');


async function getAllUsers() {
    const connection = await mysql.createConnection(config);
    const [results] = await connection.query('SELECT * FROM `aluno`');
    return results;
}

async function createUser(id, nome, idade, email, senha) {
    const connection = await mysql.createConnection(config);
    const sql = 'INSERT INTO `aluno` (`id`, `nome`, `idade`, `email`, `senha`) VALUES (?, ?, ?, ?, ?)'
    const values = [id, nome, idade, email, senha];
    await connection.execute(sql, values)
}

async function updateUser(id, nome,) {
    const connection = await mysql.createConnection(config);
    const sql = 'UPDATE `aluno` SET `nome` = ? WHERE `id` = ? ';
    await connection.execute(sql, [nome, +id,])
}
async function deleteUser(id) {
    const connection = await mysql.createConnection(config);
    const sql = 'DELETE FROM `aluno` where `id` = ?'
    await connection.execute(sql, [+id])
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}