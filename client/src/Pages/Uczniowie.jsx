import React, { useEffect, useState } from 'react'

export default function Uczniowie() {
  const [klasy, setKlasy] = useState([])
  const [uczniowie, setUczniowie] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedClassId, setSelectedClassId] = useState(0)

  useEffect(() => {
    fetch('http://localhost:7777/Uczniowie').then(res => res.json()).then(data => {
      setUczniowie(data)
      setIsLoading(false)
    })
  }, [])

  useEffect(() => {
    fetch('http://localhost:7777/Klasy').then(res => res.json()).then(data => {
      setKlasy(data)
      setIsLoading(false)
    })
  }, [])

  function filterByClass(currentClassCode, students) {
    if(currentClassCode === 0) {
        return students
    } else {
        return students.filter(uczen => uczen.id_klasy === currentClassCode)
    }
  }

  return (
    <>
      {
        !isLoading && (
          <>
            <div className="bg-dark min-vh-100 text-white">
              <div>
                <div className='float-start text-center' style={{width:"33%"}}>
                  <a href="http://localhost:5173/Szkoly" className='btn btn-outline-secondary m-3' role='button'>Szkoly</a>
                  <a href="http://localhost:5173/Klasy" className='btn btn-outline-secondary m-3' role='button'>Klasy</a>
                  <a href="http://localhost:5173/Uczniowie" className='btn btn-outline-secondary m-3 disabled' role='button'>Uczniowie</a>
                </div>
                <div className='float-end' style={{width:"33%"}}>
                  <a href="http://localhost:5173/UsunU" className='btn btn-outline-danger m-3 float-end' role='button'>Usuń</a>
                  <a href="http://localhost:5173/ModyfikujU" className='btn btn-outline-warning m-3 float-end' role='button'>Modyfikuj</a>
                  <a href="http://localhost:5173/DodajU" className='btn btn-outline-success m-3 float-end' role='button'>Dodaj</a>
                </div>
              </div>
              <h1 className='clear-both text-center'>Uczniowie</h1>
              <div className=" text-center container justify-content-center">
                <select className='selectpicker form-control mb-3 mt-3 bg-secondary' onChange={(e) => {
                  setSelectedClassId(parseInt(e.target.value))
                }}>
                  <option defaultChecked value={0}>Wszystkie</option>
                  {
                    klasy.map(klasa => (
                      <option key={klasa.id} value={klasa.id}>{klasa.nazwa}</option>
                    ))
                  }
                </select>
                <table className='table table-striped table-dark'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Imie</th>
                      <th>Nazwisko</th>
                      <th>ID klasy</th>
                    </tr>
                  </thead>
                  <tbody>
                    { filterByClass(selectedClassId, uczniowie ).map(uczen => (
                      <tr>
                        <td >{uczen.id}</td>
                        <td >{uczen.imie}</td>
                        <td >{uczen.nazwisko}</td>
                        <td >{uczen.id_klasy}</td>
                      </tr>
                    )) }
                  </tbody>
                </table>
              </div>
              {
                (!uczniowie.length) && (
                  <>Nie ma uczniow</>
                )
              }
            </div>
          </>
        )
      }
      {
        !!isLoading && (
          <>
            Ładowanie
          </>
        )
      }
    </>
  )
}
