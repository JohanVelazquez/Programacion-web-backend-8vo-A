const jsonString = `
{
  "nombre": "Taco de Pollo",
  "ingredientes": {
    "proteina": "Pollo",
    "salsa": "Salsa Verde"
  }
}
`;

const objeto = JSON.parse(jsonString);
console.log(objeto);