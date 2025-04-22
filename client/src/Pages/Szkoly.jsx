import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Szkoly() {
  const [szkoly, setSzkoly] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:7777/Szkoly")
      .then((res) => res.json())
      .then((data) => {
        setSzkoly(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {!isLoading && (
        <>
          <div className="bg-dark min-vh-100 text-white">
            <div>
              <div className='float-start text-center ' style={{width:"33%"}}>
                <a href="http://localhost:5173/Szkoly" className='btn btn-outline-secondary m-3 disabled' role='button'>Szkoly</a>
                <a href="http://localhost:5173/Klasy" className='btn btn-outline-secondary m-3' role='button'>Klasy</a>
                <a href="http://localhost:5173/Uczniowie" className='btn btn-outline-secondary m-3' role='button'>Uczniowie</a>
              </div>
              <div className='float-end' style={{width:"33%"}}>
              <a href="http://localhost:5173/Szkoly" className='btn m-3 float-end' role='button'></a>
              </div>
            </div>
            <h1 className="text-center">Szkoly</h1>
            <div className=" text-center container d-flex justify-content-center">
              <table className="table table-striped table-dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nazwa</th>
                  </tr>
                </thead>
                <tbody>
                  {szkoly.map((szkola) => (
                    <tr>
                      <td>{szkola.id}</td>
                      <td>{szkola.nazwa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {!szkoly.length && <>Nie ma szkol</>}
          </div>
        </>
      )}
      {!!isLoading && <>Ładowanie</>}
    </>
  );
}
