import React, { FC } from 'react'
import { INoticiasNormalizadas } from './types'
import {
    CloseButton,
    TarjetaModal,
    ContenedorModal,
    DescripcionModal,
    ImagenModal,
    TituloModal,
    BotonSuscribir,
    CotenedorTexto,
  } from "./styled";

  import { SuscribeImage, CloseButton as Close } from '../../assets';

interface IModalProps{
    noticia: INoticiasNormalizadas;
    toggle : ()=> void;

}
const Modal:FC<IModalProps> = ({noticia, toggle}) => {
  return (
    <>
    {noticia.esPremium ? (
        <ContenedorModal>
          <TarjetaModal>
            <CloseButton onClick={() => toggle()}>
              <img src={Close} alt="close-button" />
            </CloseButton>
            <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
            <CotenedorTexto>
              <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
              <DescripcionModal>
                Suscríbete a nuestro newsletter y recibe noticias de nuestros
                personajes favoritos.
              </DescripcionModal>
              <BotonSuscribir
                onClick={() =>
                  setTimeout(() => {
                    alert('Suscripto!');
                    toggle();
                  }, 1000)
                }
              >
                Suscríbete
              </BotonSuscribir>
            </CotenedorTexto>
          </TarjetaModal>
        </ContenedorModal>
      ) : (
        <ContenedorModal>
          <TarjetaModal>
            <CloseButton onClick={() => toggle()}>
              <img src={Close} alt="close-button" />
            </CloseButton>
            <ImagenModal src={noticia.imagen} alt="news-image" />
            <CotenedorTexto>
              <TituloModal>{noticia.titulo}</TituloModal>
              <DescripcionModal>{noticia.descripcion}</DescripcionModal>
            </CotenedorTexto>
          </TarjetaModal>
        </ContenedorModal>
      )}
    
    </>
  
  )
}

export default Modal