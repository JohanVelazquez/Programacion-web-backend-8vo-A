import axios from "axios";

const registrarUsuario = async () => {
  try {
    const respuesta = await axios.post('https://reqres.in/api/register', {
      email: 'eve.holt@reqres.in',
      password: 'pistol'},
    {
        headers: {'x-api-key': 'reqres_0def7706540d49f6ae80f9ffe1041ea0' }
      
  });
    console.log('Registro exitoso:', respuesta.data);
  } catch (error) {
    console.error('Error en el registro:', error.response.data);
  }
};

registrarUsuario();
