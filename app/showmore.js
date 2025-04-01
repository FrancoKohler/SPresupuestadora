/*-------------------SHOW MORE COJINES----------*/
let nextCojinIndex = 3;
for (let i = 3; i <= 4; i++) {
  document.getElementById("cojin" + i).style.display = "none";
}

// Agregar el evento de clic al botón showCojin
document.getElementById("showCojin").addEventListener("click", function () {
  if (nextCojinIndex <= 4) {
    document.getElementById("cojin" + nextCojinIndex).style.display = "flex";
    nextCojinIndex++;
  }
});

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
