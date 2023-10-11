import React from 'react'

export const loadImages = () => {


    const cargarImagesMemes = async (arg) => {
        try {
            //const url = `https://api.themoviedb.org/3/movie/popular?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=1`;
            const url = `https://api.imgflip.com/get_memes`;
            const respuesta = await fetch(url);
    
            if(respuesta.status === 200){
                const datos = await respuesta.json();
                return datos;
    
            } else if (respuesta.status === 401) console.log('Key incorrecta');
              else if (respuesta.status === 404) console.log('No disponible');
              else console.log('Hubo otro error no conocido');
            
    
    
        } catch (error) {
            console.log(error.message);
        }
    }

  return (    
    cargarImagesMemes()
  )

}