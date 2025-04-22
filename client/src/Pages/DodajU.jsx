import React, { useEffect, useRef, useState } from "react";

export default function DodajU() {
  const [isLoading, setIsLoading] = useState(false);
  const [imie, setImie] = useState([]);
  const [nazwisko, setNazwisko] = useState([]);
  const [klasy, setKlasy] = useState([]);
  const [id_klasy, setKlasa] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7777/Klasy")
      .then((res) => res.json())
      .then((data) => {
        setKlasy(data);
        setIsLoading(false);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    //console.log("aaa");
    var uczen = { imie, nazwisko, id_klasy };
    console.log(uczen);
    fetch("http://localhost:7777/api/DodajU", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(uczen),
    }).then((res) => console.log(res.statusText));
  }

  return (
    <>
      {!isLoading && (
        <>
          <div className="bg-dark min-vh-100 text-white">
            <div>
              <div className='float-start text-center' style={{width:"33%"}}>
                <a href="http://localhost:5173/Szkoly" className='btn btn-outline-secondary m-3' role='button'>Szkoly</a>
                <a href="http://localhost:5173/Klasy" className='btn btn-outline-secondary m-3' role='button'>Klasy</a>
                <a href="http://localhost:5173/Uczniowie" className='btn btn-outline-secondary m-3' role='button'>Uczniowie</a>
              </div>
              <div className='float-end' style={{width:"33%"}}>
                <a href="http://localhost:5173/UsunU" className='btn btn-outline-danger m-3 float-end' role='button'>Usuń</a>
                <a href="http://localhost:5173/ModyfikujU" className='btn btn-outline-warning m-3 float-end' role='button'>Modyfikuj</a>
                <a href="http://localhost:5173/DodajU" className='btn btn-outline-success m-3 float-end disabled' role='button'>Dodaj</a>
              </div>
            </div>
            <h1 className="text-center">Dodaj Ucznia</h1>
            <div className=" text-center container d-flex justify-content-center ">
              <form onSubmit={handleSubmit}>
                <div className="form-group row ">
                  <label htmlFor="imie" className="col-sm-2 col-form-label">Imie</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control bg-secondary" id="imie" placeholder="np. Jan" onChange={(e) => setImie(e.target.value)}/>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="nazwisko" className="col-sm-2 col-form-label">Nazwisko</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control bg-secondary" id="nazwisko" placeholder="np. Kowalski" onChange={(e) => setNazwisko(e.target.value)}/>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="klasa" className="col-sm-2 col-form-label">Klasa</label>
                  <div className="col-sm-10">
                    <select className="selectpicker form-control bg-secondary" id="klasa" onChange={(e) => setKlasa(e.target.value)}>
                      <option defaultChecked value={0}>Wybierz</option>
                      {klasy.map((klasa) => (
                        <option key={klasa.id} value={klasa.id}>{klasa.nazwa}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <input className="btn btn-outline-success" type="submit" value="Dodaj"/>
              </form>
            </div>
          </div>
        </>
      )}
      {!!isLoading && <>Ładowanie</>}
    </>
  );
}
