import { useState } from 'react'
import './tempapp.css'
import { useDebugValue } from 'react';
import { useEffect } from 'react';

function TempApp() {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('Mumbai');

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ef9e991d4da6edddcb53b1299e299c2b`
            const response = await fetch(url);
            // console.log(response);
            const resJSON = await response.json();
            console.log(resJSON);
        }
        fetchApi();
    })

  return (
    <>
        <div className="box">
            <div className='inputDate'>
                <input type='search' className='inputFeild' onChange={(e) => {} }/>
            </div>

            <div className='info'>
                <h2 className='location'>
                    <i className='fas fa-street-view'></i>{city}
                </h2>
                <h1 className='temp'>
                5.25deg Cel
                </h1>
                <h3 className='tempmin_max'>Min : 5.25deg Cel | Max : 5.25deg Cel</h3>
            </div>

            <div className='wave -one'></div>
            <div className='wave -two'></div>
            <div className='wave -three'></div>

        </div>
    </>
  )
}

export default TempApp