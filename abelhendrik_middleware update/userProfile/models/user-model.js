
const db = require('../config/db');

const getAllUsers = async () => {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
}

const getUserById = async (id) => {
    const [rows] = await db.query('SELECT * FROM users WHERE id=?', id);
    return rows;
}

const adduser = async (user) => {
    const {name, email, phone} = user
    const[ ] = await db.query('insert into user (name,email,phone) values(?,?,?)', [name, email, phone])
    return result.insertId

}
module.exports = { getAllUsers , getUserById };