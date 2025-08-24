
function cambiarCantidad(btn, cambio) {
  const contador = btn.parentElement;
  const input = contador.querySelector('.input-cantidad');
  let valor = parseInt(input.value);
  
  valor += cambio;
  
  if (valor < 1) valor = 1;
  if (valor > 10) valor = 10;
  
  input.value = valor;
}
document.addEventListener('DOMContentLoaded', function() {
  const contenedorProductos = document.querySelector('.contenedor-productos');
  const flechaIzquierda = document.querySelector('.flecha-izquierda');
  const flechaDerecha = document.querySelector('.flecha-derecha');
  // Ancho de un producto + gap (20px)
  const productoAncho = document.querySelector('.producto').offsetWidth + 20;
  flechaDerecha.addEventListener('click', function() {
    contenedorProductos.scrollBy({ left: productoAncho, behavior: 'smooth' });
  });
  flechaIzquierda.addEventListener('click', function() {
    contenedorProductos.scrollBy({ left: -productoAncho, behavior: 'smooth' });
  });
});