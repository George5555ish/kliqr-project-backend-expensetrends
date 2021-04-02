
const mysql2 = require('mysql2');
const db = mysql2.createConnection({
    user: 'sql10402904',
    host: 'sql10.freemysqlhosting.net',
    password: 'pqiZUFlieb',
    database: 'sql10402904',
    port:3306

});

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


  module.exports = {getUsersId};