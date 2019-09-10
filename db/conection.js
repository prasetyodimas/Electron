const mysql = require('mysql');

//handle connection
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : null,
    database : 'electron'
});

//connect to mysql
connection.connect(function(err){
  if (err) {
    console.log(err.code);
    console.log(err.fatal);
  }

//testing query
$query = 'SELECT * FROM `pasien`';
connection.query($query, function(err, rows, fields){
  if (err) {
    console.log('Whoops your connection interupted !!');
    console.log(err);
    return false;
  }
  console.log('Succes executed the Query !!', rows);

}

//closed the connection status
// connection.end(function() {

// }
