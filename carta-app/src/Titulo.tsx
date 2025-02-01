function Titulo() {
  const nombre = "Chanchito feliz";
  if (nombre) {
    return <h1>Hola {nombre}</h1>;
  }
  return <p>Hola mundo</p>;
}

export default Titulo;
