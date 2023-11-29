const express = require('express');
const mysql = require('mysql');
const dbconfig = require("./database.js");
const connection = mysql.createConnection(dbconfig);
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/main.html")
  // connection.query('SELECT COUNT(*) as count FROM lazer_on', (countError, countResult) => {
  //   if (countError) throw countError;

  //   const rowCount = countResult[0].count;

  //   connection.query('SELECT on_time FROM lazer_on ORDER BY on_time DESC', (selectError, selectResult) => {
  //     if (selectError) throw selectError;

  //     console.log(selectResult);

  //     const result = {
  //       rowCount: rowCount,
  //       data: selectResult
  //     };

  //     res.send(result);
  //   });
  // });
});

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});