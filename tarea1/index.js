var mysql = require('mysql');

const connection = mysql.createConnection({
    host        : 'localhost', 
    user        : 'root', 
    password    : 'granados',
    database    : 'isthmus'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

var stmt = 'SELECT nombre, apellido1, apellido2 FROM alumnos WHERE apellido1 LIKE "G%" ';
connection.query(stmt, function(error, results, fields){
    if (error){
        console.log("Error consulting 'alumnos' table");
    } else{
        console.log(results);
    }
    
});

connection.end();
