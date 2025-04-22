export function DodajUcznia(imie, nazwisko, id_klasy)
{
    var mysql = require('mysql');
    var fs = require('fs');

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "dziennik"
    });

    con.connect(function(err) {
        if (err) throw err;
        //console.log("asdfngfdfhjnmdsdfhfdfhjhfdfvbjk");
        con.query("INSERT INTO uczniowie(imie, nazwisko, id_klasy) VALUES(?,?,?)", [imie,nazwisko,id_klasy] , (err, result) => {
            if (err) throw err;
            /*var string = JSON.stringify(result);
                
            fs.writeFile("uczniowie.json", string, (err) => {
                if (err) throw err;
            });*/
        });
    });
}