
import React from 'react'
import Cars from './Cars'
import './CarsSection.css'

const listaCars = [
    {
      img: "https://http2.mlstatic.com/D_Q_NP_619126-MLA50232132766_062022-AB.webp",
      alt: "Smart Tv",
      precio: "$42.999",
      envio: "Envio gratis",
      descripcion : "Smart Tv Philco 50 Led Pld50hs22 4k",
    },
    {
      img: "https://http2.mlstatic.com/D_Q_NP_738877-MLA50984736228_082022-AB.webp",
      alt: "Taladro Atornillador",
      precio: "$23.370",
      envio: "Envio gratis",
      descripcion : "Taladro Atornillador Daewoo Inalambrico 18v Kit Bosch Maletin",
    },
    {
      img: "https://http2.mlstatic.com/D_Q_NP_655844-MLA50331901962_062022-AB.webp",
      alt: "Tensiometro digital",
      precio: "$6.060",
      envio: "Envio gratis",
      descripcion : "Kit tensiometro digital + oximetro dedo y termometro ",
    },
    {
      img: "https://http2.mlstatic.com/D_Q_NP_774821-MLA48120498432_112021-AB.webp",
      alt: "Cinta de enbalar",
      precio: "$8.311",
      envio: "Envio gratis",
      descripcion : "Cinta de enbalar trasparante",
    },
    {
      img: "https://http2.mlstatic.com/D_Q_NP_620290-MLA42828398293_072020-AB.webp",
      alt: "Soldadora inverter",
      precio: "$19.999",
      envio: "Envio gratis",
      descripcion : "Soldadora inverter Lusqtoff + careta + electrdos",
    }

  ] 

const CarsSection = () => {
  return (
    <>
      <div className='containerCars'>
        {
          listaCars.map( item =>
            <Cars >
              <div className='carsContainers'>
                <img src={item.img} alt={item.alt} />
                <figcaption className='precio'>{item.precio}</figcaption>
                <figcaption className='envio'>{item.envio}</figcaption>
              </div> 
              <div className='description'>
                <figcaption>{item.descripcion}</figcaption>   
              </div> 
            </Cars> 
          )
        }
      </div>
    </>
  )
}

export default CarsSection






