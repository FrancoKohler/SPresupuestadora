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

/*--------------MULTIPLICADOR DE TARIFA-----------------*/
function obtenerMultiplicadorTarifa() {
  const select = document.getElementById("multiplicadorTarifa");
  const valor = select ? parseFloat(select.value) : 1.0;
  return valor;
}

/*---POPULATE QUE HACE POR PIEZA Y POR DROPDWON---*/
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
    piezasOlivia,
  ];
  let precioMaterial;

  for (const coleccion of colecciones) {
    const pieza = coleccion.find((p) => p && p.id === idPieza);
    if (pieza && Array.isArray(pieza.price)) {
      precioMaterial = pieza.price.find((p) => p.material === tela);
      if (precioMaterial) {
        const precioBase = parseFloat(precioMaterial.precio) || 0;
        const multiplicador = obtenerMultiplicadorTarifa();
        return precioBase * multiplicador;
      }
    }
  }

  return 0;
}

// Función para calcular el precio total por serie
function calcularPrecioTotalPorSerie(serie) {
  const piezasSeleccionadas = obtenerPiezasSeleccionadas();
  const piezasFiltradas = piezasSeleccionadas.filter((pieza) => pieza.id !== "None");
  
  // Calcular precio de piezas
  const precioPiezas = piezasFiltradas.reduce((total, pieza) => {
    const precioPieza = obtenerPrecioPorMaterial(pieza.id, serie);
    return total + precioPieza;
  }, 0);
  
  // Calcular precio de cojines
  const cantidadCojines = parseInt(document.getElementById("cojines")?.value) || 0;
  let precioCojines = 0;
  if (cantidadCojines > 0) {
    const precioUnidad = cojines[0].pricesBySerie[serie] || 0;
    const multiplicador = obtenerMultiplicadorTarifa();
    precioCojines = precioUnidad * multiplicador * cantidadCojines;
  }
  
  return precioPiezas + precioCojines;
}

// Función para actualizar los precios en el dropdown de series
function actualizarPreciosEnDropdown() {
  const telaSelect = document.getElementById("tela");
  if (!telaSelect) return;
  
  const opciones = telaSelect.options;
  
  for (let i = 0; i < opciones.length; i++) {
    const serie = opciones[i].value;
    if (serie && serie !== "") {
      const precioTotal = calcularPrecioTotalPorSerie(serie);
      const textoOriginal = serie;
      opciones[i].text = `${textoOriginal}    (${precioTotal.toFixed(2)}€)`;
      opciones[i].classList.add('option-con-precio');
    }
  }
}

function generarResumen() {
  const modelo = document.getElementById("modelo").value;
  const piezasSeleccionadas = obtenerPiezasSeleccionadas();
  const tela = document.getElementById("tela").value;
  const selectTelaContainer = document.getElementById("selectTelaContainer").value;

  const piezasFiltradas = piezasSeleccionadas.filter((pieza) => pieza.id !== "None");

  const precioPiezas = piezasFiltradas.reduce((total, pieza) => {
    const precioPieza = obtenerPrecioPorMaterial(pieza.id, tela);
    return total + precioPieza;
  }, 0);

  const cantidadCojines = parseInt(document.getElementById("cojines").value) || 0;
  let precioCojines = 0;
  if (cantidadCojines > 0) {
    const precioUnidad = cojines[0].pricesBySerie[tela] || 0;
    const multiplicador = obtenerMultiplicadorTarifa();
    precioCojines = precioUnidad * multiplicador * cantidadCojines;
  }

  const precioTotal = precioPiezas + precioCojines;

  const codigoDescuento = document.getElementById("descuento").value;
  
  function obtenerDescuento(codigo) {
    const numero = parseInt(codigo, 10);
    if (!isNaN(numero) && numero >= 1 && numero <= 70) {
      return numero / 100;
    }
    return 0.0;
  }
  
  const descuento = obtenerDescuento(codigoDescuento);
  const precioConDescuento = precioTotal * (1 - descuento);

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
           <li class="inter-resumen descuento-resumen">Precio Total con descuento: <span id="precioTotalDesc"> ${precioConDescuento.toFixed(2)}€</span></li>`
        : ""
    }
  `;
  
  // Actualizar precios en dropdown después de generar resumen
  actualizarPreciosEnDropdown();
}

/*----------------OVERLAY------------------*/
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

if (openModalBtn) {
  openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
  });
}

if (closeModalBtn) {
  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });
}

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
// ===============================================================================
// INICIALIZACIÓN GENERAL + TRACKING UMAMI OPTIMIZADO
// ===============================================================================

document.addEventListener('DOMContentLoaded', function() {

  // ============================================================================
  // TRACKING INICIAL SOLO GEO (opcional)
  // ============================================================================
  (async () => {
    if (!navigator.geolocation) return;

    try {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;
        let codigoPostal = '';

        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
          const data = await res.json();
          codigoPostal = data.address.postcode || '';
        } catch (err) {
          console.warn('No se pudo obtener CP:', err);
        }

        if (umamiDisponible()) {
          umami.track("GEO_INICIAL", {
            latitude,
            longitude,
            codigoPostal
          });
        }

        console.log("📍 GEO inicial trackeada:", {
          latitude,
          longitude,
          codigoPostal
        });
      });
    } catch (e) {
      console.warn("No se obtuvo ubicación inicial.");
    }
  })();

  
  // ============================================================================
  // CONFIGURACIÓN INICIAL DE LA PÁGINA
  // ============================================================================

  // Configurar evento del modelo para cojines
  const modeloSelect = document.getElementById("modelo");
  if (modeloSelect) {
    modeloSelect.addEventListener("change", function () {
      const modeloSeleccionado = this.value;
      const seccionCojines = document.getElementById("seccionCojines");
      if (seccionCojines) {
        if (modeloSeleccionado === "Dafne") {
          seccionCojines.style.display = "none";
        } else {
          seccionCojines.style.display = "block";
        }
      }
    });
  }

  // Configurar descuento
  const descuentoInput = document.getElementById("descuento");
  if (descuentoInput) {
    descuentoInput.addEventListener("input", generarResumen);
  }

  // Configurar multiplicador de tarifa
  const multiplicadorTarifa = document.getElementById("multiplicadorTarifa");
  if (multiplicadorTarifa) {

    // ⭐⭐⭐ TRACKING INICIAL DEL MULTIPLICADOR ⭐⭐⭐
    const valorInicial = multiplicadorTarifa.value || "1.0";
    if (umamiDisponible()) {
      umami.track(`MULTIPLICADOR_${valorInicial}`);
      console.log("✅ Tracked: Multiplicador inicial", valorInicial);
    }

    // TRACK CAMBIO DEL MULTIPLICADOR
    multiplicadorTarifa.addEventListener("change", function() {
      console.log("🔄 Multiplicador cambiado a:", this.value);
      generarResumen();
      actualizarPreciosEnDropdown();
      if (typeof mostrarImagenes === 'function') {
        mostrarImagenes();
      }

      const multiplicadorSeleccionado = this.value;
      if (umamiDisponible() && multiplicadorSeleccionado) {
        umami.track(`MULTIPLICADOR_${multiplicadorSeleccionado}`);
        console.log("✅ Tracked: Multiplicador de tarifa", multiplicadorSeleccionado);
      }
    });

    console.log("✅ Event listener del multiplicador registrado");

  } else {
    console.error("❌ No se encontró el elemento multiplicadorTarifa");
  }


  // Configurar todos los selects
  const selectElements = document.querySelectorAll("select");
  selectElements.forEach((select) => {
    select.addEventListener("change", function () {
      generarResumen();
      if (typeof mostrarImagenes === 'function') {
        mostrarImagenes();
      }
    });
  });

  // Event listeners para actualizar precios en dropdown
  for (let i = 1; i <= 8; i++) {
    const select = document.getElementById(`pieza${i}`);
    if (select) {
      select.addEventListener("change", actualizarPreciosEnDropdown);
    }
  }

  const cojinesSelect = document.getElementById("cojines");
  if (cojinesSelect) {
    cojinesSelect.addEventListener("change", actualizarPreciosEnDropdown);
  }

  // Inicializar resumen y precios
  generarResumen();
  actualizarPreciosEnDropdown();


  // ============================================================================
  // TRACKING UMAMI LIMPIO Y OPTIMIZADO
  // ============================================================================

  const selectPiezas = Array.from({ length: 8 }, (_, i) => document.getElementById(`pieza${i+1}`));
  const selectSerie = document.getElementById('tela');
  const selectTejido = document.getElementById('selectTelaContainer');
  const selectCojines2 = document.getElementById('cojines');
  const inputDescuento = document.getElementById('descuento');

  // Verificar Umami
  function umamiDisponible() {
    if (typeof umami !== 'object' || typeof umami.track !== 'function') {
      console.warn('Umami.track no está disponible');
      return false;
    }
    return true;
  }

  // Track MODELO
  if (modeloSelect) {
    modeloSelect.addEventListener('change', function() {
      if (umamiDisponible() && this.value) {
        umami.track(`MODELO_${String(this.value)}`);
        console.log('✅ Tracked: Modelo', this.value);
      }
    });
  }

  // Track PIEZAS
  selectPiezas.forEach((sel, index) => {
    if (sel) {
      sel.addEventListener('change', function() {
        if (umamiDisponible() && this.value && this.value !== 'None') {
          umami.track(`PIEZA_${index + 1}_${String(this.value)}`);
          console.log(`✅ Tracked: Pieza ${index + 1}:`, this.value);
        }
      });
    }
  });

  // Track SERIE + precio base
  if (selectSerie) {
    selectSerie.addEventListener('change', function() {
      if (umamiDisponible() && this.value) {
        umami.track(`SERIE_${String(this.value)}`);
        console.log('✅ Tracked: Serie', this.value);

        const precioBase = calcularPrecioTotalPorSerie(this.value);
        if (precioBase > 0) {
          umami.track(`PRECIO_BASE_${Number(precioBase.toFixed(2))}`);
          console.log('✅ Tracked: Precio base', precioBase);

          setTimeout(trackConfiguracionCompleta, 1000);
        }
      }
    });
  }

  // Track TEJIDO
  if (selectTejido) {
    selectTejido.addEventListener('change', function() {
      if (umamiDisponible() && this.value) {
        umami.track(`TEJIDO_${String(this.value)}`);
        console.log('✅ Tracked: Tejido', this.value);
      }
    });
  }

  // Track COJINES
  if (selectCojines2) {
    selectCojines2.addEventListener('change', function() {
      if (umamiDisponible()) {
        const cantidad = Number(this.value);
        umami.track(`COJINES_${cantidad}`);
        console.log('✅ Tracked: Cojines', cantidad);
      }
    });
  }

  // Track DESCUENTO
  if (inputDescuento) {
    let timeoutDescuento;
    inputDescuento.addEventListener('input', function() {
      clearTimeout(timeoutDescuento);
      timeoutDescuento = setTimeout(() => {
        if (umamiDisponible() && this.value) {
          const descuentoValor = parseInt(this.value) || 0;

          umami.track(`DESCUENTO_${Number(descuentoValor)}`);
          console.log('✅ Tracked: Descuento', descuentoValor);

          const serieSeleccionada = selectSerie?.value || '';
          if (serieSeleccionada) {
            const precioBase = calcularPrecioTotalPorSerie(serieSeleccionada);
            const precioConDescuento = precioBase * (1 - descuentoValor / 100);
            const ahorro = precioBase - precioConDescuento;

            umami.track(`PRECIO_FINAL_${Number(precioConDescuento.toFixed(2))}`);
            umami.track(`AHORRO_${Number(ahorro.toFixed(2))}`);
            console.log('✅ Tracked: Precio final', precioConDescuento, '- Ahorro:', ahorro);

            setTimeout(trackConfiguracionCompleta, 1000);
          }
        }
      }, 1000);
    });
  }

  // ============================================================================
  // CONFIGURACIÓN COMPLETA
  // ============================================================================

  async function obtenerGeo() {
    if (!navigator.geolocation) return {};
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;
        let codigoPostal = '';
        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
          const data = await res.json();
          codigoPostal = data.address.postcode || '';
        } catch (err) {
          console.warn('No se pudo obtener código postal:', err);
        }
        resolve({ latitude, longitude, codigoPostal });
      }, () => {
        resolve({});
      });
    });
  }

  let ultimaConfiguracion = '';

  async function trackConfiguracionCompleta() {
    if (!umamiDisponible()) return;

    const modeloSeleccionado = modeloSelect?.value || '';
    const piezas = selectPiezas
      .map(sel => sel?.value)
      .filter(val => val && val !== 'None');
    const serieSeleccionada = selectSerie?.value || '';
    const tejidoSeleccionado = selectTejido?.value || '';
    const cantidadCojines = parseInt(selectCojines2?.value) || 0;
    const descuentoValor = parseInt(inputDescuento?.value) || 0;

    if (!modeloSeleccionado || !serieSeleccionada) return;

    const geo = await obtenerGeo();

    const precioBase = calcularPrecioTotalPorSerie(serieSeleccionada);
    const precioFinal = descuentoValor > 0
      ? precioBase * (1 - descuentoValor / 100)
      : precioBase;
    const ahorro = precioBase - precioFinal;

    const partes = [
      `Modelo_${modeloSeleccionado}`,
      `Serie_${serieSeleccionada}`
    ];
    if (piezas.length) partes.push(`Piezas_${piezas.join('+')}`);
    if (cantidadCojines > 0) partes.push(`Cojines_${cantidadCojines}`);
    if (tejidoSeleccionado) partes.push(`Tejido_${tejidoSeleccionado}`);
    if (precioBase > 0) {
      if (descuentoValor > 0) {
        partes.push(`PrecioBase_${precioBase.toFixed(0)}`);
        partes.push(`PrecioFinal_${precioFinal.toFixed(0)}`);
        partes.push(`Ahorro_${ahorro.toFixed(0)}`);
      } else {
        partes.push(`Precio_${precioBase.toFixed(0)}`);
      }
    }

    const nombreEvento = `CONFIG_COMPLETA_${partes.join('_')}`;

    if (nombreEvento === ultimaConfiguracion) {
      console.log('⏭️ Configuración duplicada, no se trackea');
      return;
    }
    ultimaConfiguracion = nombreEvento;

    console.log('✅ Tracked: Configuración completa', {
      modelo: modeloSeleccionado,
      piezas: piezas,
      serie: serieSeleccionada,
      tejido: tejidoSeleccionado,
      cojines: cantidadCojines,
      precioBase: precioBase,
      precioFinal: precioFinal,
      ahorro: ahorro,
      descuento: descuentoValor,
      geo
    });

    umami.track(nombreEvento, {
      modelo: String(modeloSeleccionado),
      piezas: piezas.join(', '),
      serie: String(serieSeleccionada),
      tejido: String(tejidoSeleccionado),
      cojines: Number(cantidadCojines),
      precioBase: Number(precioBase.toFixed(2)),
      precioFinal: Number(precioFinal.toFixed(2)),
      ahorro: Number(ahorro.toFixed(2)),
      descuento: Number(descuentoValor),
      latitude: Number(geo.latitude || 0),
      longitude: Number(geo.longitude || 0),
      codigoPostal: String(geo.codigoPostal || '')
    });
  }

  console.log('🎯 Sistema inicializado: Configurador + Tracking Umami optimizado');

});
