import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import {StyledBioContainer, StyledBioImagen, StyledBioNombre, StyledBioDescripcion, StyledContenedorBotones, StyledBotonBio} from  "./styled";
//import styles from "./styles.module.css";

const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (

      <StyledBotonBio
          key={nombre as string}
          onClick={() => onClick(nombre as NombresSimpsons)}
          isActive={(bioActiva.id === nombre) as boolean}
        >
          {nombre}
        </StyledBotonBio>
    ));
  };

  return (
    <StyledBioContainer>
      <StyledContenedorBotones> {crearBotones()}</StyledContenedorBotones>
      <div>
        <div>
          <StyledBioImagen src={bioActiva.image}
            alt={bioActiva.nombre}>
            
          </StyledBioImagen>
        </div>
        <div>
          <StyledBioNombre >{bioActiva.nombre}</StyledBioNombre>
          <StyledBioDescripcion> {bioActiva.descripcion}</StyledBioDescripcion>
        </div>
      </div>
      </StyledBioContainer>
  );
};

export default Bio;
