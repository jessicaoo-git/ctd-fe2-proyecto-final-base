
import Card from "./Card";


import { useFetchNoticias } from "./hook/useFetchNoticias";


import {
 
  ContenedorNoticias,
  ListaNoticias,
  TituloNoticias,
 
} from "./styled";

export interface INoticiasNormalizadas {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: number | string;
  esPremium: boolean;
  imagen: string;
  descripcionCorta?: string;
}



const Noticias = () => {
  const noticias = useFetchNoticias();
 
  
  
  return (
<ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias.map((noticia) => (
          <Card key={noticia.id} noticia={noticia} />
        ))}
      </ListaNoticias>
    </ContenedorNoticias>

    
  );
};

export default Noticias;
