const express = require('express')
const { get } = require('http')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')
const { title } = require('process')
app.use(bodyParser.json())

app.get('/', (req, res) => {
    response(200, "API Alpha ready", "SUCCESS", res)
})

//assignment requirement of GET all liat of task is below:
app.get('/task', (req, res) => {
    const sql = "SELECT * FROM task"
    db.query(sql, (err, result) => {
        if (err) throw err
        response(200, result, "Task List:", res)
    })
});

//assignment requirement of view specific task by ID is below:
app.get('/task/:ID', (req, res) => {
    const ID = req.params.ID
    const sql = `SELECT * FROM task WHERE ID = ${ID}`
    db.query(sql, (err, result)=> {
        if (err) throw err
        response(200, result, "get detail task",res)
    })  
});

app.post('/task', (req, res) => {
    const{title, description, status, due_date} = req.body

    const sql =`INSERT INTO task(title, description, status, due_date) VALUES('${title}','${description}','${status}','${due_date}')`
    
    db.query(sql, (err, result)=>{
        if (err) response(500,"invalid", "error", res)
        
        if(result?.affectedRows){
            const data ={ 
                isSuccess: result.affectedRows,
                id: result.insertId

            }
            response(200, data, "inserted data", res)
        }
    })
}); 

app.put('/task/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, status, due_date } = req.body;
    const sql = `UPDATE task SET title = ?, description = ?, status = ?, due_date = ? WHERE ID = ?`;

    db.query(sql, [title, description, status, due_date, id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Database error", error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "No rows updated. ID not found or no changes made." });
        }
        console.log(result);
        res.status(200).json({ message: "Data updated successfully", data: result });
    });
});



app.delete('/task/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM task WHERE ID = ?`;

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Database error", error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "No rows deleted. ID not found." });
        }
        console.log(result);
        res.status(200).json({ message: "Data deleted successfully", data: result });
    });
});





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})