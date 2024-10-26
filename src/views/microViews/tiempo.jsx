import axios from 'axios'
import { useState, useEffect } from 'react'

export const Tiempo = () => {
  const [time, setTime] = useState(null)
  const [hora, setHora] = useState('')
  const ciudad = 'santa cruz de la palma'

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=65526236559bcae0ba1c19d49d24ad6a&lang=es`
      )
      .then((response) => setTime(response.data))
      .catch((error) => console.error(error)) // Añadir manejador de errores es buena práctica.
  }, [])

  if (!time) {
    return <h1>Cargando</h1>
  }
  console.log(time)

  const { weather, name, timezone, main, wind } = time
  const icono = weather?.[0]?.icon
  const weatherDescription = weather?.[0]?.description
  const temp = Math.trunc(main?.temp)
  const humidity = Math.trunc(main?.humidity)
  const feelsLike = Math.trunc(main?.feels_like)
  const windSpeed = Math.trunc(wind?.speed)

  const urlIcon = `https://openweathermap.org/img/wn/${icono}@2x.png`

  return (
    <section className="p-40 flex flex-col justify-center items-center w-full ">
      <div className="">
        <h1 className=" text-3xl font-PoppinBold text-yellow-500 p-2 text-center font-bold ">
          Tiempo {name}
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center m-8 gap-4 items-center ">
        <div className=" flex">
          <h1 className=" flex items-center font-PoppinBold text-[40px] lg:text-[65px] text-orange-400">
            {temp}{' '}
            <span className=" text-[20px] lg:text-[30px] font-Poppins">°C</span>
          </h1>
          <img className="w-[120px]" src={urlIcon} alt="" />
        </div>
        <ul className=" font-Poppins text-[16px] text-gray-600">
          <li>
            <p>Sensacion termica:{feelsLike} </p>
          </li>
          <li>
            <p>Humedad: {humidity} %</p>
          </li>
          <li>
            <p>Viento: {windSpeed} km/h</p>
          </li>
        </ul>
        <div>
          <h1 className=" text-[18px] text-gray-600 font-Poppins">Clima</h1>
          <p className=" text-gray-600 text-[18px] font-Poppins">
            {weatherDescription}
          </p>
        </div>
      </div>
    </section>
  )
}
