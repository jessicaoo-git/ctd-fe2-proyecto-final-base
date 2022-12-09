import { useEffect, useState } from "react";
import { obtenerNoticias } from "../fakeRest";
import { INoticiasNormalizadas } from "../Noticias";
import{noticiasNormalizadas} from "../utils"

export const useFetchNoticias = () =>{
    
   
      const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
      
      
      useEffect(() => {
        const obtenerInformacion = async () => {
          const respuesta = await obtenerNoticias();
    
          const data = respuesta.map((noticia) => {
            return noticiasNormalizadas(noticia);
          });
    
          setNoticias(data);
        };
    
        obtenerInformacion();
      }, []);

      return noticias;


}