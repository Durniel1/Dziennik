var mysql = require('mysql');
const fs = require('fs');
var data = require('./szkoly.json')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dziennik"
});

/*con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM szkoly" , function (err, result, fields) {
        if (err) throw err;
        var string = JSON.stringify(result);
        fs.writeFile("szkoly.json", string, (err) => {
            if (err) throw err;});
    });
  });*/

console.log(data)