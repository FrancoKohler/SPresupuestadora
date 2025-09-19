
/*--------------COJINES-----------------*/

const cojines = [
  {
    id: "COJIN",
    pricesBySerie: {
      "SERIE 2": 70,
      "SERIE 3": 84,
      "SERIE 4": 98,
      "SERIE 5": 112,
    },
  },
];


 

document.getElementById("modelo").addEventListener("change", function () {
  const modeloSeleccionado = this.value;
  const seccionCojines = document.getElementById("seccionCojines");
  if (modeloSeleccionado === "Dafne") {
    seccionCojines.style.display = "none";
  } else {
    seccionCojines.style.display = "block";
  }
});
// Obtener cantidad de cojines
const cantidadCojines = parseInt(document.getElementById("cojines").value) || 0;

// Calcular precio de cojines en base a la serie seleccionada
let precioCojines = 0;
if (cantidadCojines > 0) {
  const precioUnidad = cojines[0].pricesBySerie[tela] || 0;
  precioCojines = precioUnidad * cantidadCojines;
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("descuento")
    .addEventListener("input", generarResumen);
});
/*---POPULATE QUE HACE POR PIEZA Y POR DROPDWON---*/
// Reemplaza:
function obtenerPiezasSeleccionadas() {
  const piezas = [];
  for (let i = 1; i <= 8; i++) {
    const select = document.getElementById(`pieza${i}`);
    if (!select || select.selectedIndex === -1) continue;
    const value = select.value;
    const text = select.options[select.selectedIndex]?.text ?? '';
    if (value !== "None") {
      piezas.push({ id: value, nombre: text, slot: i });
    }
  }
  return piezas;
}

function obtenerPiezasPorSlot() {
  const arr = new Array(8).fill(null);
  for (let i = 1; i <= 8; i++) {
    const select = document.getElementById(`pieza${i}`);
    if (!select || select.selectedIndex === -1) continue;
    const value = select.value;
    const text = select.options[select.selectedIndex]?.text ?? '';
    if (value !== "None") {
      arr[i - 1] = {
        id: value,
        nombre: text,
        slot: i,
        option: select.options[select.selectedIndex]
      };
    }
  }
  return arr;
}

/*---PRECIOS DE LAS PEIZAS SEGUN MODELOS----*/
function obtenerPrecioPorMaterial(idPieza, tela) {
  const colecciones = [
    piezasBianca,
    piezasVera,
    piezasLuna,
    piezasNora,
    piezasAura,
    piezasDafne,
  ];
  let precioMaterial;

  for (const coleccion of colecciones) {
    const pieza = coleccion.find((p) => p && p.id === idPieza);
    if (pieza && Array.isArray(pieza.price)) {
      precioMaterial = pieza.price.find((p) => p.material === tela);
      if (precioMaterial) {
        return parseFloat(precioMaterial.precio) || 0;
      }
    }
  }

  return 0;
}
const paisSelect = document.getElementById("pais");
const comunidadesWrapper = document.getElementById("comunidades-wrapper");

function toggleComunidades() {
  if (paisSelect.value === "España") {
    comunidadesWrapper.style.display = "flex"; // visible por defecto
  } else {
    comunidadesWrapper.style.display = "none"; // ocultar si no es España
  }
}

// inicializar al cargar la página (como España está seleccionada → visible)
toggleComunidades();

// escuchar cambios
paisSelect.addEventListener("change", toggleComunidades);
// inicializar al cargar la página
toggleComunidades();

// escuchar cambios en el select de países
paisSelect.addEventListener("change", toggleComunidades);
document.addEventListener("DOMContentLoaded", function () {
  const selectElements = document.querySelectorAll("select");

  selectElements.forEach((select) => {
    select.addEventListener("change", function () {
      generarResumen();
      mostrarImagenes();
    });
  });

  generarResumen();
});
function generarResumen() {
  const modelo = document.getElementById("modelo").value;
  const piezasSeleccionadas = obtenerPiezasSeleccionadas();
  const tela = document.getElementById("tela").value;
  const selectTelaContainer = document.getElementById("selectTelaContainer").value;

  // Filter out 'None' selections
  const piezasFiltradas = piezasSeleccionadas.filter((pieza) => pieza.id !== "None");

  // Calculate prices for pieces
  const precioPiezas = piezasFiltradas.reduce((total, pieza) => {
    const precioPieza = obtenerPrecioPorMaterial(pieza.id, tela);
    return total + precioPieza;
  }, 0);

  // 👉 Calcular cojines aquí
  const cantidadCojines = parseInt(document.getElementById("cojines").value) || 0;
  let precioCojines = 0;
  if (cantidadCojines > 0) {
    const precioUnidad = cojines[0].pricesBySerie[tela] || 0;
    precioCojines = precioUnidad * cantidadCojines;
  }

  // Total price
  const precioTotal = precioPiezas + precioCojines;

  const codigoDescuento = document.getElementById("descuento").value;
  const descuento = obtenerDescuento(codigoDescuento);
  const precioConDescuento = precioTotal * (1 - descuento);
  
  function obtenerDescuento(codigo) {
    const numero = parseInt(codigo, 10);
    if (!isNaN(numero) && numero >= 1 && numero <= 50) {
      return numero / 100;
    }
    return 0.0;
  }
  // Update resumen with model, selected pieces, cojines, prices, and discount
  const resumenElement = document.getElementById("resumen");
  resumenElement.innerHTML = `
    <li class="inter-resumen">Modelo: ${modelo}</li>
    ${
      piezasFiltradas.length > 0
        ? `<li class="inter-resumen">Piezas seleccionadas:</li><ul>` +
          piezasFiltradas
            .map(
              (pieza) =>
                `<li class="itemsResumen inter-resumen">${pieza.nombre} &nbsp <span id="preciosMaterial">${obtenerPrecioPorMaterial(pieza.id, tela).toFixed(2)}€</span></li>`
            )
            .join("") +
          "</ul>"
        : ""
    }
    <li class="inter-resumen">Serie seleccionada: ${tela}</li>
    <li class="inter-resumen">Tela seleccionada: ${selectTelaContainer}</li>
    ${
      cantidadCojines > 0
        ? `<li class="inter-resumen">Cojines: ${cantidadCojines} x &nbsp <span id="precioCojines">${precioCojines.toFixed(2)}€</span></li>`
        : ""
    }
    <li class="precioResumen inter-resumen">Precio Total: <span id="precioTotal"> &nbsp ${precioTotal.toFixed(2)}€</span></li>
    ${
      descuento > 0
        ? `<li class="inter-resumen">Descuento aplicado: <span id="descuentoAplicado">${(descuento * 100).toFixed(0)}%</span></li>
           <li class="inter-resumen">Precio Total con descuento: <span id="precioTotalDesc"> ${precioConDescuento.toFixed(2)}€</span></li>`
        : ""
    }
  `;
}


// Trigger the initial summary
generarResumen();


/*----------------OVERLAY------------------*/
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

/*-----------ABRIR EL MODAL AL APRETAREL BOTON----------*/
openModalBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

/*-----------CIERRE DEL MODAL AL APRETAR "X"----------*/
closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

/*-----------CIERRE DEL MODAL AL APRETAR FUERA----------*/
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
