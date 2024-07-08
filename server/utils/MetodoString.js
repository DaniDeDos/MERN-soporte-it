function obtenerPrimeraPalabra(frase) {
  // Remover espacios en blanco al inicio y final de la frase
  frase = frase.trim();

  // Encontrar el índice del primer espacio en blanco
  const indiceEspacio = frase.indexOf(" ");

  // Si no se encuentra ningún espacio en blanco, retornar la frase completa
  if (indiceEspacio === -1) {
    return [frase, ""];
  }

  // Extraer la primera palabra utilizando el índice del espacio en blanco
  const primeraPalabra = frase.substring(0, indiceEspacio);

  // Obtener el resto del string después de la primera palabra
  const restoFrase = frase.substring(indiceEspacio + 1);

  return [primeraPalabra, restoFrase];
}

function acortarNombres(nombres) {
  // Lista de palabras a ignorar
  const ignorarPalabras = ["de", "la", "el"];

  // Dividir el string en palabras
  const palabras = nombres.split(" ");

  // Filtrar palabras para ignorar, ignorando mayúsculas y minúsculas
  const palabrasFiltradas = palabras.filter(
    (palabra) => !ignorarPalabras.includes(palabra.toLowerCase())
  );

  // Concatenar el primer carácter de cada palabra filtrada
  const resultado = palabrasFiltradas.map((palabra) => palabra[0]).join("");

  return resultado.toLowerCase();
}

export { obtenerPrimeraPalabra, acortarNombres };
