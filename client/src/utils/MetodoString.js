function getCapitalize(str) {
  // Verificar si el argumento es una cadena
  if (typeof str !== "string" || str.trim() === "") {
    return "";
  }

  // Dividir el string en palabras
  const palabras = str.split(" ");

  // Iterar sobre cada palabra y capitalizar la primera letra
  for (let i = 0; i < palabras.length; i++) {
    palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substr(1);
  }

  // Unir las palabras modificadas en un solo string
  return palabras.join(" ");
}

export { getCapitalize };
