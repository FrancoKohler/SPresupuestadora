/*-------------------SHOW MORE POSAPIES----------*/

let nextIndexPosapies = 3;

// Función para ocultar los dropdowns que no están poblados
function ocultarPosapies() {
  for (let i = 3; i <= 8; i++) {
    const dropdown = document.getElementById(`posapies${i}`);
    if (dropdown) {
      dropdown.classList.add("hidden"); // Ocultar los dropdowns adicionales
    }
  }
}

// Llamar a la función para ocultar dropdowns al inicio
ocultarPosapies();

/*--------------BOTON AGREGAR OUTPUTS PARA POSAPIES----------------*/
document.getElementById("showPosapies").addEventListener("click", function () {
  // Verificar si hay más elementos para mostrar (en este caso, de 3 a 8)
  if (nextIndexPosapies <= 8) {
    // Mostrar el siguiente elemento
    const nextDropdown = document.getElementById(
      "posapies" + nextIndexPosapies
    );
    if (nextDropdown) {
      nextDropdown.classList.remove("hidden");
    }
    // Incrementar el contador para el siguiente elemento
    nextIndexPosapies++;
  }
});

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
/*-------------------SHOW MORE RESPALDOS----------*/

function ocultarRespaldos() {
  for (let i = 3; i <= 8; i++) {
    const dropdown = document.getElementById(`outputR${i}`);
    dropdown.style.display = "none";
  }
}
let nextIndex = 3;
// Llamar a la función para ocultar dropdowns al inicio
ocultarRespaldos();
/*--------------BOTON AGREGAR OUTPUTS PARA----------------*/
document.getElementById("showMore").addEventListener("click", function () {
  if (nextIndex <= 8) {
    const nextDropdown = document.getElementById("outputR" + nextIndex);
    if (nextDropdown) {
      nextDropdown.style.display = "flex"; // Mostrar el dropdown
    }
    // Incrementar el contador para el siguiente elemento
    nextIndex++;
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
