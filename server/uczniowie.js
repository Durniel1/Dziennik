var mysql = require('mysql');
const fs = require('fs');
//var data = require('./uczniowie.json')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dziennik"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM uczniowie" , function (err, result) {
        if (err) throw err;
        var string = JSON.stringify(result);

        fs.writeFile("uczniowie.json", string, (err) => {
            if (err) throw err;});
    });
  });

//console.log(data)