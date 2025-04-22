import React, { useEffect, useRef, useState } from "react";

export default function ModyfikujU() {
    const [uczniowie, setUczniowie] = useState([])
    const [klasy, setKlasy] = useState([]);
    
    var [id, setUczen] = useState([]);

    var [imie, setImie] = useState([]);
    var [nazwisko, setNazwisko] = useState([]);
    var [id_klasy, setKlasa] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7777/Uczniowie').then(res => res.json()).then(data => {
          setUczniowie(data)
        })
    }, [])
    useEffect(() => {
        fetch("http://localhost:7777/Klasy").then((res) => res.json()).then((data) => {
            setKlasy(data);
        });
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        var uczen;
        if(id<uczniowie.length){var index = uczniowie.length - Math.abs(id - uczniowie.length) - 1}
        if(id>uczniowie.length){var index = id - Math.abs(id - uczniowie.length) - 1}
        if(id == uczniowie.length){var index = id - 1}
        console.log(uczniowie[index].imie)
        var stare_imie = uczniowie[index].imie;
        var stare_nazwisko = uczniowie[index].nazwisko;
        var stara_klasa = uczniowie[index].id_klasy;
        uczen = { id, stare_imie, imie, stare_nazwisko, nazwisko, stara_klasa, id_klasy }
        console.log(JSON.stringify(uczen));
        fetch("http://localhost:7777/api/ModyfikujU", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(uczen),
        }).then((res) => console.log(res.statusText));
      }

    return (
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
                    <a href="http://localhost:5173/ModyfikujU" className='btn btn-outline-warning m-3 float-end disabled' role='button'>Modyfikuj</a>
                    <a href="http://localhost:5173/DodajU" className='btn btn-outline-success m-3 float-end' role='button'>Dodaj</a>
                </div>
            </div>
            <h1 className="text-center">Modyfikuj Ucznia</h1>
            <div className=" ttext-center container d-flex justify-content-center">
                <form onSubmit={handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="uczen" className="col-sm-2 col-form-label">Uczeń</label>
                        <div className="col-sm-10">
                        <select className="selectpicker form-control bg-secondary" id="uczen" onChange={(e) => setUczen(e.target.value)}>
                            <option defaultChecked value={0}>Wybierz</option>
                            {uczniowie.map((uczen) => (
                                <option key={uczen.id} value={uczen.id}>{uczen.imie} {uczen.nazwisko}</option>
                            ))}
                        </select>
                        </div>
                    </div>
                    <div className="form-group row">
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
                    <input className="btn btn-outline-success" type="submit" value="Modyfikuj"/>
                </form>
            </div>
        </div>
    </>
    );
}
