document.addEventListener('DOMContentLoaded', function(){
  // const botonComprar = document.querySelectorAll(".boton-comprar")[0];
  // botonComprar.addEventListener("click", function() {
  //   alert("Gracias por tu compra");
  // })
  // const form = document.querySelectorAll(".form")[0];
  // form.addEventListener("submit", function() {
  //   const cantidad = document.querySelectorAll(".cantidad")[0].value;
  //   const producto = document.querySelectorAll(".producto")[0];
  //   const notas = document.querySelectorAll(".notas")[0].value;
  //
  //
  //   alert(`gracias por tu compra de ${cantidad} de ${producto.options[producto.selectedIndex].text} con las siguientes notas ${notas}`);

  const form = document.querySelectorAll(".form")[0];
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const cantidad = document.querySelectorAll(".cantidad")[0].value;
    const producto = document.querySelectorAll(".producto")[0];
    const notas = document.querySelectorAll(".notas")[0].value;
    const mensaje = `gracias por tu compra de ${cantidad} de ${producto.options[producto.selectedIndex].text} con las siguientes notas ${notas}`;
    const mensajeTexto = document.querySelectorAll(".mensaje_texto")[0];
    mensajeTexto.innerHTML = mensaje;
  })
});
