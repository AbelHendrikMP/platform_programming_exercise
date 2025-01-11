const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost", 
    user: "root", 
    password:"",
    database: "to_do_list"
})

module.exports = db