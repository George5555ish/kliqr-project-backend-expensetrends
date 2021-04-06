
const mysql2 = require('mysql2');
const db = require('../db')

db.connect(function(err) {
    if (err) throw err;
  
  });



const getUsersId = (req, res) => {

    db.query("SELECT * FROM sql10402904.users", (err, result) =>{
        if (err){
            console.log(err)
        } else {
          
            res.json({"data": result});
            
        }
    })

  };

  const getUsersById = (req, res) => {
    let sql = "SELECT * FROM sql10402904.users WHERE id=" + req.params.id;
    db.query(sql, (err, result) =>{
        if (err){
            console.log(err)
        } else {
          
            res.json({result});
            
        }
    })
  }


  module.exports = {getUsersId, getUsersById};