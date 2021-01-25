const express = require('express')
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

router.get('/', (req, res) => {
    let db = new sqlite3.Database('C:/Users/syedh/OneDrive/Desktop/chat_getting/ciot.db');
    let sql =  'SELECT * FROM events'
    db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        rows.forEach((row) => {
          console.log(row.sender_id, row.type_name);
        });
      });
      db.close();
})

module.exports = router


