import React, { useState, useEffect } from 'react';
import "./FestivalDetails.css";

const FestivalDetails = () => {
  const [festivals, setFestivals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFestivals = async () => {
      try {
        const response = await fetch('http://localhost:3500/fesztivalkiir');
        const result = await response.json();
        if (response.ok) {
          setFestivals(result.festival);
        } else {
          setError(result.msg);
        }
      } catch (error) {
        setError('Valami hiba történt: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFestivals();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch('http://localhost:3500/fesztivaltorol', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      const result = await response.json();
      if (response.ok) {
        setFestivals(festivals.filter(festival => festival._id !== id));
      } else {
        setError(result.msg);
      }
    } catch (error) {
      setError('Valami hiba történt: ' + error.message);
    }
  };

  if (loading) {
    return <div>Tölt...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='justify justify-center items-center pt-28 pb-28 lg:p-80'>
      <h1 className='text-center text-2xl'>Adatbázis tartalom</h1>
      {festivals.length > 0 ? (
        <table className='data-table m-auto text-left'>
          <thead>
            <tr>
              <th className='p-3'>Név</th>
              <th className='p-3'>Születési dátum</th>
              <th className='p-3'>Telefonszám</th>
              <th className='p-3'>Email</th>
              <th className='p-3'>Foglalt napok száma</th>
              <th className='p-3'>Összeg</th>
              
            </tr>
          </thead>
          <tbody>
            {festivals.map(festival => (
              <tr key={festival._id}>
                <td className='pl-3'>{festival.nev}</td>
                <td className='pl-3'>{festival.szuletesi_datum}</td>
                <td className='pl-3'>{festival.telefonszam}</td>
                <td className='pl-3'>{festival.email}</td>
                <td className='pl-3'>{festival.foglalt_napok_szama}</td>
                <td className='pl-3'>{festival.osszeg}</td>
                <td className='pl-3'>
                  <button
                    className='bg-blue-500 text-white px-3 py-1 rounded'
                    onClick={() => handleDelete(festival._id)}
                  >
                    Törlés
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nincs adat a megjelenítéshez</p>
      )}
    </div>
  );
};

export default FestivalDetails;