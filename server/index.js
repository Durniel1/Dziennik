const express = require("express");
const app = express();
const { createConnection } = require("mysql");
const cors = require("cors");

app.use(express.json());
//var szkolyjson = require('./szkoly.json')
//var klasyjson = require('./klasy.json')
//var uczniowiejson = require('./uczniowie.json')

app.use(
  cors({
    origin: "*",
  })
);

const conn = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dziennik",
});

app.get("/Uczniowie", (req, res) => {
  conn.query("SELECT * FROM uczniowie", (err, results) => {
    res.send(results);
  });
});

app.get("/Szkoly", (req, res) => {
  conn.query("SELECT * FROM szkoly", (err, results) => {
    res.send(results);
  });
});

app.get("/Klasy", (req, res) => {
  conn.query("SELECT * FROM klasy", (err, results) => {
    res.send(results);
  });
});

app.get("/api", (req, res) => {
  res.send("From server");
});

app.post("/api/DodajU", (req, res) => {
  var { imie, nazwisko, id_klasy } = req.body;
  var query = conn.query("INSERT INTO uczniowie(imie,nazwisko,id_klasy) VALUES( '" + imie + "', '" + nazwisko + "', " + id_klasy + ")", function (err, result) {});
  res.send("dodano");
});

app.post("/api/UsunU", (req, res) => {
  var { id } = req.body;
  var query = conn.query("DELETE FROM uczniowie WHERE id = " + id, function (err, result) {});
  res.send("usunieto");
});

app.post("/api/ModyfikujU", (req, res) => {
  var { id, stare_imie, imie, stare_nazwisko, nazwisko, stara_klasa, id_klasy } = req.body
  var q = ""
  if(stare_imie!=imie && imie != ""){
    if(q != ""){q += ","}
    q += " imie='"+imie+"'"}
  if(stare_nazwisko!=nazwisko && nazwisko != ""){
    if(q != ""){q += ","}
    q += " nazwisko='"+nazwisko+"'"}
  if(stara_klasa!=id_klasy && id_klasy != 0){
    if(q != ""){q += ","}
    q += " id_klasy='"+id_klasy+"'"}
  console.log(q)
  var query = conn.query("UPDATE uczniowie SET"+q+" WHERE id="+id)
  res.status(200).send("zmodyfikowano")
});

app.listen(7777);
