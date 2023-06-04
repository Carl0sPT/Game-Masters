import React from 'react'
import { useContext, useEffect, useState } from "react";
import Select from 'react-select';
import { Contexto } from "../../Context/Contexto";


export const TestCreateUser = () => {
  const { user } = useContext(Contexto);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const clientSecret = 'sk_test_51N6e2ZLomp5j2gtn09duzxYVkrz9mkuct9TaAzzzhT1PvlQoltWoAu6ny50GmqMZL6GsR8fYY5AuI0b2ONH0vYfV00Ph9vKMyL'


  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setSelectedCurrency(selectedOption.currency);
  };

  const countries = [
    { value: 'es', label: 'España', currency: 'EUR' },
    { value: 'us', label: 'Estados Unidos', currency: 'USD' },

  ];

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await fetch('http://localhost:8000/api/userStripe/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: user,
        'name': event.target.name.value,
        'email': event.target.email.value,
        'phone': event.target.phone.value,
        'pais': event.target.pais.value,
        'ciudad': event.target.city.value,
        'calle': event.target.calle.value,
        'cp': event.target.CP.value,
        'currency': selectedCurrency,
      }),
    });

    const data = await response.json();
    console.log(data)
  }
  return (
    <>

      <div className=" vh-100 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="border border-3 border-primary"></div>
              <div className="card bg-white shadow-lg">
                <div className="card-body p-5">
                  <form className="mb-3 mt-md-4"  onSubmit={handleSubmit} >
                    <h2 className="fw-bold mb-2 text-uppercase ">Crear Cuenta en Stripe</h2>
                    <p className=" mb-5">Please enter your information here!</p>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label ">Introduce tu nombre:</label>
                      <input type="text" name='name' className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label ">Email</label>
                      <input type="text" className="form-control" name="email" placeholder="Email" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label ">Telefono</label>
                      <input type="text" className="form-control" name="phone" />
                    </div>
                    <div className="mb-3">
                      <Select
                        options={countries}
                        value={selectedCountry}
                        onChange={handleCountryChange}
                        placeholder="Selecciona un país"
                        name='pais'
                      /> {selectedCurrency && (
                        <p>Moneda seleccionada: {selectedCurrency}</p>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="city" className="form-label ">Ciudad</label>
                      <input type="text" className="form-control" name="city" />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="calle" className="form-label ">Calle:</label>
                      <input type="text" className="form-control" name="calle" />
                    </div>
              
                    <div className="mb-3">
                      <label htmlFor="CP" className="form-label ">Codigo Postal:</label>
                      <input type="text" className="form-control" name="CP" />
                    </div>
        
                    <div className="d-grid">
                      <button className="btn btn-outline-dark" type="submit" >Crear Usuario</button>
                    </div>
                  </form>
                

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


     
    </>
  )
}