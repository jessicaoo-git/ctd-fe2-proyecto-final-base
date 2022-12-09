import { INoticias } from "./fakeRest";

/**
 * Función que recibe un string y  devuelve el titulo con mayuscula inicial. Se uso las funciones nativas de split() para dividir el
 * string, con el la función map recorremos el string, con la función charAt(0) captura el primer caracter
 * para luego con la función toUpperCase() combertirla en mayúscula para luego concatenar con las siguientes letras del string
 * 
 * @param {string} title
 * @returns string
 * 
 */

 const  tituloMayusculaInicial = (titulo: string ) => {
    return titulo
      .split(" ")
      .map((str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      })
      .join(" ");
    };


    /**
     * Función que obtiene los minutos transcurridos entre dos fechas
     * @param { Date object} date
     * @param { Date object} now
     * @returns cantidad de minutos transcurridos
     */

    
     const calculaMinutosTranscurridos = (now: Date, date: Date) => {
        return Math.floor((now.getTime() - date.getTime()) / 60000);

     };

     /**
      * Función que normaliza las noticias recibidas usando las dos funciones anteriores
      * @param {object} 
      * @returns un objeto con las noticias normalizadas
      * 
      */

     export const noticiasNormalizadas = (noticia : INoticias) => {


        const titulo = tituloMayusculaInicial(noticia.titulo);
        const ahora = new Date();
        const minutosTranscurridos = calculaMinutosTranscurridos(ahora, noticia.fecha);

        return {
            id: noticia.id,
            titulo,
            descripcion: noticia.descripcion,
            fecha: `Hace ${minutosTranscurridos} minutos`,
            esPremium: noticia.esPremium,
            imagen: noticia.imagen,
            descripcionCorta: noticia.descripcion.substring(0, 100),
          };

     }

      


     
     
     

