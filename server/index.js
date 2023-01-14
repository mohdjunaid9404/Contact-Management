const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const { query } = require('express');
const port = 4000;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "contactmanagement"
});
db.connect((err)=>{
    if(err) throw err;
    console.log("database connected");
});

// app.get("/", (req,res)=>{
//     res.send("Contact management")
// });
app.use(express.json());
app.use(cors());

app.get("/", (req,res) => {
    const q = "select * from add_contact";
    db.query(q, (err,data)=>{
       if(err) return res.json(err)
        return res.json(data)
    });
    
})

app.post("/insert", (req,res)=>{
    const q = "insert into add_contact (`name`, `mobile_number`, `country`) values (?)";
    const values = [
        req.body.name,
        req.body.mobile_number,
        req.body.country,
    ]
    db.query(q, [values], (err,data)=>{
        if(err) return res.json(err)
            return res.json("1 row affected");
    })
})

app.delete("/delete/:id", (req,res)=>{
    const id = req.params.id;
    const q = "delete from add_contact where id = ?"
    db.query(q, [id], (err, data)=>{
        if(err) throw err;
        res.json({
            status: 200,
            massege: "deleted successfully"
        });
    })
});
app.listen(port, ()=>{
    console.log("server is running on 4000");
});