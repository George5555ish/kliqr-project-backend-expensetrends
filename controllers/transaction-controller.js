
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



const getTransactions = (req, res) => {

    db.query("SELECT user_id, category, date_time, type FROM sql10402904.transactions WHERE type='debit'", (err, result) =>{
        if (err){
            console.log(err)
        } else {
          
            res.json({"data": result});
            
        }
    })

  };

  const getTransactionsByUser = (req, res) => {
      

    let sql = "SELECT user_id, category, date_time, icon_url, amount FROM sql10402904.transactions WHERE type='debit' AND user_id=" + req.params.id;
    db.query(sql, (err, result) =>{
        if (err){
            console.log(err)
        } else {
          
            res.json({result});
            
        }
    })
}

  module.exports = {getTransactions,getTransactionsByUser};