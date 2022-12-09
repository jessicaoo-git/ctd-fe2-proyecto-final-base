import React, { FC } from 'react'
import useToggle from './hook/useToggle';
import Modal from './Modal';
import {
    
    TarjetaNoticia,
    FechaTarjetaNoticia,
    DescripcionTarjetaNoticia,
    ImagenTarjetaNoticia,
    TituloTarjetaNoticia,
    BotonLectura,
   
  } from "./styled";
import { INoticiasNormalizadas } from './types';


  interface CardProps{
    noticia:INoticiasNormalizadas
  }
const Card: FC<CardProps>= ({noticia}) => {
   const{isOpen, toggle} = useToggle();
  return (
    <>
 <TarjetaNoticia>
        <ImagenTarjetaNoticia src={noticia.imagen} alt="imagen noticia" />
        <TituloTarjetaNoticia>{noticia.titulo}</TituloTarjetaNoticia>
        <FechaTarjetaNoticia>{noticia.fecha}</FechaTarjetaNoticia>
        <DescripcionTarjetaNoticia>
          {noticia.descripcionCorta}
        </DescripcionTarjetaNoticia>
        <BotonLectura onClick={() => toggle()}>Ver más</BotonLectura>
      </TarjetaNoticia>
      {isOpen && <Modal noticia={noticia} toggle={toggle} />}

    
    </>
  )
}

export default Card