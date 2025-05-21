/*-------------------SHOW MORE PIEZAS----------*/

let nextIndexPiezas = 5;
// Ocultar los selects adicionales al cargar la página
function ocultarPiezas() {
  for (let i = 5; i <= 8; i++) {
    const dropdown = document.getElementById(`pieza${i}`);
    if (dropdown) {
      dropdown.classList.add("hidden"); // Asegurarse de que los selects adicionales están ocultos
    }
  }
}
// Llamar a la función para ocultar los selects al inicio
ocultarPiezas();

/*----------BOTON PARA MAS PIEZAS-----*/
document.getElementById("showPiezas").addEventListener("click", function () {
  if (nextIndexPiezas <= 8) {
    const nextDropdown = document.getElementById("pieza" + nextIndexPiezas);
    if (nextDropdown) {
      nextDropdown.classList.remove("hidden");
    }
    nextIndexPiezas++; // Incrementar el índice para el siguiente select
  }
});
