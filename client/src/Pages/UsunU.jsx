import React, { useEffect, useRef, useState } from "react";

export default function UsunU() {
    const [uczniowie, setUczniowie] = useState([])
    const [id, setUczen] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7777/Uczniowie').then(res => res.json()).then(data => {
          setUczniowie(data)
        })
    }, [])

    function handleSubmit(event) {
        event.preventDefault();
        var uczen = { id };
        console.log(uczen);
        fetch("http://localhost:7777/api/UsunU", {
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
                    <a href="http://localhost:5173/UsunU" className='btn btn-outline-danger m-3 float-end disabled' role='button'>Usuń</a>
                    <a href="http://localhost:5173/ModyfikujU" className='btn btn-outline-warning m-3 float-end' role='button'>Modyfikuj</a>
                    <a href="http://localhost:5173/DodajU" className='btn btn-outline-success m-3 float-end' role='button'>Dodaj</a>
                </div>
            </div>
            <h1 className="text-center">Usuń Ucznia</h1>
            <div className=" text-center container d-flex justify-content-center">
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
                    <input className="btn btn-outline-success" type="submit" value="Usuń"/>
                </form>
            </div>
        </div>
    </>
    );
}
