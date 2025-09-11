
/*--------------COJINES-----------------*/

const cojines = [
  {
    id: "None",
    title: "---Sin suplemento seleccionado--",
  },
  {
    id: "SERIE 002",
    title: "SERIE 002-Cojin Cuadrado 45x45 cms",
    price: 70,
  },
  {
    id: "SERIE 003",
    title: "SERIE 003-Cojin Cuadrado 45x45 cms",
    price: 84,
  },
  {
    id: "SERIE 004",
    title: "SERIE 004-Cojin Cuadrado 45x45 cms",
    price: 98,
  },
  {
    id: "SERIE 005",
    title: "SERIE 005-Cojin Cuadrado 45x45 cms",
    price: 112,
  },
];
document.addEventListener("DOMContentLoaded", function () {
  // Populate cojines select elements
  const cojinesSelects = ["cojin1", "cojin2", "cojin3", "cojin4"];
  cojinesSelects.forEach((selectId) => {
    const select = document.getElementById(selectId);
    cojines.forEach((cojin) => {
      const option = document.createElement("option");
      option.value = cojin.id;
      option.textContent = cojin.title;
      select.appendChild(option);
    });
  });

  // Add event listeners to select elements for recalculating the total price
  cojinesSelects.forEach((selectId) => {
    const select = document.getElementById(selectId);
    select.addEventListener("change", generarResumen);
  });

  // Trigger the initial price calculation
  generarResumen();
});


document.getElementById("modelo").addEventListener("change", function () {
  const modeloSeleccionado = this.value;
  const seccionCojines = document.getElementById("seccionCojines");
  if (modeloSeleccionado === "Dafne") {
    seccionCojines.style.display = "none";
  } else {
    seccionCojines.style.display = "block";
  }
});


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

/*--------------------PRECIOS DE LAS PEIZAS SEGUN MODELO------------*/
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
  
  // Get selected cojines
  const cojinesSeleccionados = [
    document.getElementById("cojin1").value,
    document.getElementById("cojin2").value,
    document.getElementById("cojin3").value,
    document.getElementById("cojin4").value,
  ];

  // Filter out 'None' selections
  const piezasFiltradas = piezasSeleccionadas.filter((pieza) => pieza.id !== "None");
  const cojinesFiltrados = cojinesSeleccionados
    .map((id) => cojines.find((cojin) => cojin.id === id))
    .filter((cojin) => cojin && cojin.id !== "None");

  // Calculate prices for pieces
  const precioPiezas = piezasFiltradas.reduce((total, pieza) => {
    const precioPieza = obtenerPrecioPorMaterial(pieza.id, tela);
    return total + precioPieza;
  }, 0);

  // Calculate prices for cojines
  const precioCojines = cojinesFiltrados.reduce((total, cojin) => total + cojin.price, 0);

  // Total price
  const precioTotal = precioPiezas + precioCojines;

  // Discount logic
  const codigoDescuento = document.getElementById("descuento").value;
  const descuento = obtenerDescuento(codigoDescuento);
  const precioConDescuento = precioTotal * (1 - descuento);

  function obtenerDescuento(codigo) {
    const match = codigo.match(/^GET(\d{1,2})$/);
    if (match) {
      const descuento = parseInt(match[1], 10); // Extract the number from the code
      if (descuento >= 1 && descuento <= 50) {
        return descuento / 100; // Convert the number to a percentage discount
      }
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

    ${
      cojinesFiltrados.length > 0
        ? `<li class="inter-resumen">Cojines seleccionados:</li><ul>` +
          cojinesFiltrados
            .map(
              (cojin) =>
                `<li class="itemsResumen inter-resumen">${cojin.title} &nbsp <span id="preciosCojin">${cojin.price.toFixed(2)}€</span></li>`
            )
            .join("") +
          "</ul>"
        : ""
    }

    <li class="inter-resumen">Serie seleccionada: ${tela}</li>
    <li class="inter-resumen">Tela seleccionada: ${selectTelaContainer}</li>
    <li class="precioResumen inter-resumen">Precio Total: <span id="precioTotal"> &nbsp ${precioTotal.toFixed(2)}€</span></li>
     ${
       descuento > 0
         ? `<li>Descuento aplicado: <span id="descuentoAplicado">${(descuento * 100).toFixed(0)}%</span></li>
         <li>Precio Total con descuento: <span id="precioTotalDesc"> ${precioConDescuento.toFixed(2)}€</span></li>`
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
