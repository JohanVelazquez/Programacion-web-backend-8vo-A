import axios from "axios";

const obtenerImagen = async () => {
  try {
   
    const respuesta = await axios.get(
      `https://api.nasa.gov/planetary/apod`,
       {
        headers: {'x-api-key': 'sYkb0U7ve6Wow0NoDbKTTQ5vFdkUGFYpIZHdpoVb' }
  }
    );

    console.log("Imagen del dia:", respuesta.data);
  } catch (error) {
    console.error("Error al obtener la imagen:", error.response.data);
  }
};

obtenerImagen();
