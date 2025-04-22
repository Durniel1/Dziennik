import React, { useEffect, useState } from 'react'
//import filterBySchool from "client/filter.js"

export default function Klasy() {
  const [szkoly, setSzkoly] = useState([])
  const [klasy, setKlasy] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedSchoolId, setSelectedSchoolId] = useState(0)

  useEffect(() => {
    fetch('http://localhost:7777/Klasy').then(res => res.json()).then(data => {
      setKlasy(data)
      setIsLoading(false)
    })
  }, [])

  useEffect(() => {
    fetch('http://localhost:7777/Szkoly').then(res => res.json()).then(data => {
      setSzkoly(data)
      setIsLoading(false)
    })
  }, [])

  function filterBySchool(currentSchoolCode, classes) {
    if(currentSchoolCode === 0) {
        return classes
    } else {
        return classes.filter(klasa => klasa.id_szkoly === currentSchoolCode)
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
                  <a href="http://localhost:5173/Klasy" className='btn btn-outline-secondary m-3 disabled' role='button'>Klasy</a>
                  <a href="http://localhost:5173/Uczniowie" className='btn btn-outline-secondary m-3' role='button'>Uczniowie</a>
                </div>
                <div className='float-end' style={{width:"33%"}}>
                <a href="http://localhost:5173/Szkoly" className='btn m-3 float-end' role='button'></a>
                </div>
              </div>
              <h1 className='text-center'>Klasy</h1>
              <div className=" text-center container justify-content-center">
                <select className='selectpicker form-control mb-3 mt-3 bg-secondary' onChange={(e) => {
                  setSelectedSchoolId(parseInt(e.target.value))
                }}>
                  <option defaultChecked value={0}>Wszystkie</option>
                  {
                    szkoly.map(szkola => (
                      <option key={szkola.id} value={szkola.id}>{szkola.nazwa}</option>
                    ))
                  }
                </select>
                <table className='table table-striped table-dark'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nazwa</th>
                      <th>Liczba uczniow</th>
                      <th>Id Szkoly</th>
                    </tr>
                  </thead>
                  <tbody>
                        { filterBySchool(selectedSchoolId, klasy ).map(klasa => (
                          <tr>
                            <td >{klasa.id}</td>
                            <td >{klasa.nazwa}</td>
                            <td >{klasa.ilosc_uczniow}</td>
                            <td >{klasa.id_szkoly}</td>
                          </tr>
                        )) }
                  </tbody>      
                </table>
              </div>
              {
                (!klasy.length) && (
                  <>Nie ma klas</>
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
