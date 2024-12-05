const db = require('../config/db');

const getAllUsers = async () => {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
}

const getUserById = async (id) => {
    const [rows] = await db.query('SELECT * FROM users WHERE id=?', id);
    return rows;
}
module.exports = { getAllUsers , getUserById };