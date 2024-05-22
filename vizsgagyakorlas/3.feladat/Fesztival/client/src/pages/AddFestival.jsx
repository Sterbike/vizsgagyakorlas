import React, { useState } from 'react';
import "./AddFestival.css";

const AddFestival = () => {
  const [responseMessage, setResponseMessage] = useState('');

  const [formData, setFormData] = useState({
    nev: '',
    szuletesi_datum: '',
    telefonszam: '',
    email: '',
    foglalt_napok_szama: '',
    osszeg: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3500/fesztivalhozzaad', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage(result.msg);
      } else {
        setResponseMessage(result.msg);
      }
    } catch (error) {
      setResponseMessage('Valami hiba történt: ' + error.message);
    }

    // Reset form fields after submission
    setFormData({
      nev: '',
      szuletesi_datum: '',
      telefonszam: '',
      email: '',
      foglalt_napok_szama: '',
      osszeg: ''
    });
  };

  return (
    <div className='justify justify-center items-center pt-28 pb-28 lg:p-32'>
      <form className='m-auto p-3 rounded-lg md:w-4/6 lg:w-3/6 border flex flex-col gap-6' id='addForm' onSubmit={handleSubmit}>
      <h1 className='m-auto w-full font-bold text-2xl text-center'>Adja hozzá a fesztivál jegy vásárláshoz adatait</h1>
        <div className='flex flex-col'>
          <label htmlFor="nev">Név:</label>
          <input className=' rounded-md' type="text" id="nev" name="nev" value={formData.nev} onChange={handleChange} />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="szuletesi_datum">Születési dátum:</label>
          <input className='rounded-md w-full' type="date" id="szuletesi_datum" name="szuletesi_datum" value={formData.szuletesi_datum} onChange={handleChange} />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="telefonszam">Telefonszám:</label>
          <input className='rounded-md w-full' type="number" id="telefonszam" name="telefonszam" value={formData.telefonszam} onChange={handleChange} />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="email">E-mail:</label>
          <input className='rounded-md w-full' type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="foglalt_napok_szama">Foglalt napok száma:</label>
          <input className='rounded-md w-full' type="number" id="foglalt_napok_szama" name="foglalt_napok_szama" value={formData.foglalt_napok_szama} onChange={handleChange} />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="osszeg">Összeg</label>
          <input className='rounded-md w-full' type="number" id="osszeg" name="osszeg" value={formData.osszeg} onChange={handleChange} />
        </div>
        <div className='m-auto w-max'>
          <button className= 'border border-black w-40 rounded-full' id='submitButton' type="submit">Küld</button>
        </div>
      </form>
      <h1 className='text-center text-xl'>{responseMessage}</h1>
    </div>
  );
};

export default AddFestival;
