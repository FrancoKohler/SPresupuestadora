/*---------------------DESCUENTO INPUT-----------------*/
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("descuento").addEventListener("input", generarResumen);
});
/*---POPULATE QUE HACE POR PIEZA Y POR DROPDWON---*/
function obtenerPiezasSeleccionadas() {
  const piezasSeleccionadas = [];
  for (let i = 1; i <= 8; i++) {
    const piezaSelect = document.getElementById(`pieza${i}`);

    if (piezaSelect.selectedIndex !== -1) {
      const piezaSeleccionada = {
        id: piezaSelect.value,
        nombre: piezaSelect.options[piezaSelect.selectedIndex].text,
      };
      if (piezaSeleccionada.id !== "None") {
        piezasSeleccionadas.push(piezaSeleccionada);
      }
    }
  }
  return piezasSeleccionadas;
}

/*--------------------PRECIOS DE LAS PEIZAS SEGUN MODELO------------*/
function obtenerPrecioPorMaterial(idPieza, tela) {
  const colecciones = [
    piezasBianca,
    piezasVera,
    piezasLuna,
    piezasNora,
    piezasAura,
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
  const selectTelaContainer = document.getElementById(
    "selectTelaContainer"
  ).value;
  const piezasFiltradas = piezasSeleccionadas.filter(
    (pieza) => pieza.id !== "None"
  );
  const precioPiezas = piezasFiltradas.reduce((total, pieza) => {
    const precioPieza = obtenerPrecioPorMaterial(pieza.id, tela);
    return total + precioPieza;
  }, 0);

  const precioTotal = precioPiezas;
  const codigoDescuento = document.getElementById("descuento").value;
  const descuento = obtenerDescuento(codigoDescuento);
  const precioConDescuento = precioTotal * (1 - descuento);

  function obtenerDescuento(codigo) {
    const match = codigo.match(/^GET(\d{1,2})$/);
    if (match) {
      const descuento = parseInt(match[1], 10); // Extrae el número del código
      if (descuento >= 1 && descuento <= 50) {
        return descuento / 100; // Convierte el número en un porcentaje de descuento
      }
    }
    return 0.0;
  }

  const resumenElement = document.getElementById("resumen");
  resumenElement.innerHTML = `
    <li class="inter-resumen">Modelo: ${modelo}</li> 
    
    ${
      piezasFiltradas.length > 0
        ? `<li class="inter-resumen"  >Piezas seleccionadas:</li><ul>` +
          piezasFiltradas
            .map(
              (pieza) =>
                `<li class="itemsResumen inter-resumen">${
                  pieza.nombre
                } &nbsp <span id="preciosMaterial"> ${obtenerPrecioPorMaterial(
                  pieza.id,
                  tela
                ).toFixed(2)}€</span></li>`
            )
            .join("") +
          "</ul>"
        : ""
    }
  
    
    <li class="inter-resumen">Serie seleccionada: ${tela}</li>
    <li class="inter-resumen">Tela seleccionada: ${selectTelaContainer}</li>
    <li class="precioResumen inter-resumen">Precio Total: <span id="precioTotal"> &nbsp ${precioTotal.toFixed(
      2
    )}€</span></li>
     ${
       descuento > 0
         ? `<li class="inter-resumen">Descuento aplicado: <span id="descuentoAplicado">${(
             descuento * 100
           ).toFixed(0)}%</span></li>
         <li class="inter-resumen">Precio Total con descuento: <span id="precioTotalDesc"> ${precioConDescuento.toFixed(
           2
         )}€</span></li>`
         : ""
     }
  `;
}

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
