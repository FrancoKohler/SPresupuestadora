
const todasPiezas = [
  ...piezasAura.filter((p) => p.id !== "None"),
  ...piezasBianca.filter((p) => p.id !== "None"),
  ...piezasLuna.filter((p) => p.id !== "None"),
  ...piezasNora.filter((p) => p.id !== "None"),
  ...piezasVera.filter((p) => p.id !== "None"),
  ...piezasDafne.filter((p) => p.id !== "None"),
];

function llenarSelects() {
  for (let i = 1; i <= 8; i++) {
    const select = document.getElementById(`pieza${i}`);
    if (!select) continue;

    select.innerHTML = '<option value="None">Sin pieza seleccionada</option>';

    todasPiezas.forEach((pieza) => {
      const option = new Option(`${pieza.title}`, pieza.id);
      option.dataset.imageUrl = pieza.imageUrl;
      option.dataset.width = String(pieza.width ?? 100);
      option.dataset.height = String(pieza.height ?? 100);
      select.add(option);
    });
  }
}


function ensureCotasElements(imagenesDiv) {
  let lineaAncho = imagenesDiv.querySelector("#lineaAncho");
  if (!lineaAncho) {
    lineaAncho = document.createElement("div");
    lineaAncho.id = "lineaAncho";
    imagenesDiv.appendChild(lineaAncho);
  }

  let lineaProfundidad = imagenesDiv.querySelector("#lineaProfundidad");
  if (!lineaProfundidad) {
    lineaProfundidad = document.createElement("div");
    lineaProfundidad.id = "lineaProfundidad";
    imagenesDiv.appendChild(lineaProfundidad);
  }

  let etiquetaAncho = imagenesDiv.querySelector("#ancho");
  if (!etiquetaAncho) {
    etiquetaAncho = document.createElement("p");
    etiquetaAncho.id = "ancho";
    imagenesDiv.appendChild(etiquetaAncho);
  }

  let etiquetaProfundidad = imagenesDiv.querySelector("#profundidad");
  if (!etiquetaProfundidad) {
    etiquetaProfundidad = document.createElement("p");
    etiquetaProfundidad.id = "profundidad";
    imagenesDiv.appendChild(etiquetaProfundidad);
  }

  let disclaimer = imagenesDiv.querySelector("#disclaimerConfig");
  if (!disclaimer) {
    disclaimer = document.createElement("div");
    disclaimer.id = "disclaimerConfig";
    disclaimer.textContent = "Seleccione piezas para ver la configuración";
    imagenesDiv.appendChild(disclaimer);
  }

  return { lineaAncho, lineaProfundidad, etiquetaAncho, etiquetaProfundidad, disclaimer };
}


function posicionarCotas(imagenesDiv, totalMedidaCm, profundidadCm) {
  const imgs = Array.from(imagenesDiv.querySelectorAll(".img-config"));
  const { lineaAncho, lineaProfundidad, etiquetaAncho, etiquetaProfundidad, disclaimer } =
    ensureCotasElements(imagenesDiv);
  const contRect = imagenesDiv.getBoundingClientRect();
  if (!imgs.length) {
    lineaAncho.style.display = "none";
    lineaProfundidad.style.display = "none";
    etiquetaAncho.style.display = "none";
    etiquetaProfundidad.style.display = "none";
    disclaimer.style.display = "block";
    return;
  }

  disclaimer.style.display = "none";
  lineaAncho.style.display = "block";
  lineaProfundidad.style.display = "block";
  etiquetaAncho.style.display = "block";
  etiquetaProfundidad.style.display = "block";
  // Bounding box relativo al contenedor
  let left = Infinity, right = -Infinity, top = Infinity, bottom = -Infinity;
  imgs.forEach(img => {
    const r = img.getBoundingClientRect();
    const relLeft   = r.left   - contRect.left;
    const relRight  = r.right  - contRect.left;
    const relTop    = r.top    - contRect.top;
    const relBottom = r.bottom - contRect.top;
    if (relLeft   < left)   left   = relLeft;
    if (relRight  > right)  right  = relRight;
    if (relTop    < top)    top    = relTop;
    if (relBottom > bottom) bottom = relBottom;
  });

  const anchoPx = Math.max(0, right - left);
  const altoPx  = Math.max(0, bottom - top);
  const GAP = 20; // separación visual

  // Línea horizontal (ANCHO) – arriba del conjunto
  lineaAncho.style.left = `${left}px`;
  lineaAncho.style.top  = `${Math.max(0, top - GAP)}px`;
  lineaAncho.style.width = `${anchoPx}px`;
  lineaAncho.style.height = "1px";
  lineaAncho.style.transition = "width .25s ease, top .2s ease, left .2s ease";

  // Línea vertical (ALTO) – derecha del conjunto
  lineaProfundidad.style.left   = `${right + GAP}px`;
  lineaProfundidad.style.top    = `${top}px`;
  lineaProfundidad.style.width  = "1px";
  lineaProfundidad.style.height = `${altoPx}px`;
  lineaProfundidad.style.transition = "height .25s ease, top .2s ease, left .2s ease";

  // Etiqueta ANCHO – encima y centrada
  etiquetaAncho.textContent = `${totalMedidaCm} cm`;
  etiquetaAncho.style.left = `${left + anchoPx / 2}px`;
  etiquetaAncho.style.top  = `${Math.max(0, top - GAP)}px`;   // ← misma top que la línea
  etiquetaAncho.style.transform = "translate(-50%, -100%)";   // ← súbela justo encima
  etiquetaAncho.style.marginTop = "-25px"; 
  // Etiqueta ALTO – al lado derecho, centrada verticalmente
  etiquetaProfundidad.textContent = `${profundidadCm} cm`;
  etiquetaProfundidad.style.left = `${right + GAP + 10}px`;
  etiquetaProfundidad.style.top  = `${top + altoPx / 2}px`;
  etiquetaProfundidad.style.transform = "translate(0, -50%)";
  etiquetaProfundidad.style.margin = "0";
}
function getScaleFactor() {
  const containerWidth = document.getElementById("imagenPiezas")?.offsetWidth || 600;
  const baseWidth = 600; // Ancho base de referencia
  return Math.min(containerWidth / baseWidth, 1.2); // Máximo 120% de escala
}
// === Responsive canvas helpers ===
const BASE_CANVAS_WIDTH = 600;
const BASE_CANVAS_HEIGHT = 400; // relación 3:2 aprox (ajusta si tu diseño usa otra)

function sizeCanvasToContainer() {
const cont = document.getElementById("imagenPiezas");
if (!cont) return;
const cvs = cont.querySelector("canvas");
if (!cvs) return;

// ancho disponible real
const cw = Math.max(280, Math.floor(cont.clientWidth || 600));
const aspect = BASE_CANVAS_HEIGHT / BASE_CANVAS_WIDTH;
const chCSS = Math.round(cw * aspect);

// Escala para nitidez en pantallas retina
const dpr = Math.min(window.devicePixelRatio || 1, 2);

// Tamaño CSS (layout)
cvs.style.width = cw + "px";
cvs.style.height = chCSS + "px";

// Resolución interna del canvas (píxeles reales)
cvs.width = Math.floor(cw * dpr);
cvs.height = Math.floor(chCSS * dpr);

// devuelvo info útil por si quieres usarla
return { cssWidth: cw, cssHeight: chCSS, dpr };
}

function getScaleFactorResponsive() {
const cont = document.getElementById("imagenPiezas");
const w = cont?.clientWidth || BASE_CANVAS_WIDTH;
// factor relativo a tu base de diseño
// limitamos para evitar piezas gigantes o minúsculas
return Math.max(0.6, Math.min(w / BASE_CANVAS_WIDTH, 1.6));
}

function mostrarImagenes() {

const imagenesDiv = document.getElementById("imagenPiezas");
Array.from(imagenesDiv.querySelectorAll(".img-config")).forEach(el => el.remove());

window.__CONFIGURACION_LAYOUT__ = null;
imagenesDiv.style.position = "relative";
imagenesDiv.style.transform = "none";
imagenesDiv.style.transformOrigin = "top-left";

ensureCotasElements(imagenesDiv);
sizeCanvasToContainer();
// Factor de escala responsive
const scaleFactor = getScaleFactor();

let currentX = 0;
let currentY = 0;
let rotateAfterYutra = false;
let rotateHasHappened = false;
let specialPiece = { x: 0, y: 0, width: 0, height: 0 };
let totalMedida = 0;
let cotaProfundidad = 0;

const specialPieces = ["BIAR108S", "VERR108S", "AURR108S", "NORR108S", "PROR105S"];
const chaiseLongueIds = [
  "VERC110D","VERC110I","VERC100D","VERC100I","VERC90D","VERC90I","VERC80D","VERC80I",
  "NORC110D","NORC110I","NORC100D","NORC100I","NORC90D","NORC90I","NORC80D","NORC80I",
  "PROC100D","PROC100I","PROC80D","PROC80I",
  "BIAC110D","BIAC110I","BIAC100D","BIAC100I","BIAC90D","BIAC90I","BIAC80D","BIAC80I",
  "AURC110D","AURC110I","AURC100D","AURC100I","AURC90D","AURC90I","AURC80D","AURC80I",
];
const terminalId = [
  "VERT110D","VERT110I","VERT100D","VERT100I","VERT90D","VERT90I","VERT80D","VERT80I",
  "NORT110D","NORT110I","NORT100D","NORT100I","NORT90D","NORT90I","NORT80D","NORT80I",
  "PROT100D","PROT100I","PROT80D","PROT80I",
  "BIAT110D","BIAT110I","BIAT100D","BIAT100I","BIAT90D","BIAT90I","BIAT80D","BIAT80I",
  "AURT110D","AURT110I","AURT100D","AURT100I","AURT90D","AURT90I","AURT80D","AURT80I",
];
const brazoId = [
  "VERM11OD","VERM11OI","VERM100D","VERM100I","VERM90D","VERM90I","VERM80D","VERM80I",
  "NORM110DM","NORM110IM","NORM100DM","NORM100IM","NORM110DM","NORM90DM","NORM90IM","NORM80DM","NORM80IM",
  "NORM110D","NORM110I","NORM100D","NORM100I","NORM90D","NORM90I","NORM80D","NORM80I",
  "PROM100D","PROM100I","PROM80D","PROM80I",
  "BIAM110DM","BIAM110IM","BIAM100DM","BIAM100IM","BIAM90DM","BIAM90IM","BIAM80DM","BIAM80IM",
  "BIAM110I","BIAM110D","BIAM110I","BIAM100D","BIAM100I","BIAM90D","BIAM90I","BIAM80D","BIAM80I",
  "AURM110D","AURM110I","AURM100D","AURM100I","AURM90D","AURM90I","AURM80D","AURM80I",
];
const pouffId = ["AURP60S","NORP60S","PROP60S","VERP60S","BIAP60S"];
const pouffTPId = ["NORP60SMNE","NORP60SCNE","NORP60SCN","NORP60SMN","NORP60SMNE","BIAP60SCN","BIAP60SCNE","BIAP60SMN","BIAP60SMNE"];
const modTapa = [
  "NORM80DMMN","NORM80DMMNE","NORM80IMMN","NORM80IMMNE","NORM90DMMN","NORM90DMMNE","NORM90IMMN","NORM90IMMNE",
  "NORM100DMMN","NORM100DMMNE","NORM100IMMN","NORM100IMMNE","NORM110DMMN","NORM110DMMNE","NORM110IMMN","NORM110IMMNE",
  "BIAM80DMMN","BIAM80DMMNE","BIAM80IMMN","BIAM80IMMNE","BIAM90DMMN","BIAM90DMMNE","BIAM90IMMN","BIAM90IMMNE",
  "BIAM100DMMN","BIAM100DMMNE","BIAM100IMMN","BIAM100IMMNE","BIAM110DMMN","BIAM110DMMNE","BIAM110IMMN","BIAM110IMMNE",
  "BIAP60SCN","BIAP60SCNE","BIAP60SMN","BIAP60SMNE",
];
const modRepisa = [
  "NORM110IM","NORM100IM","NORM90IM","NORM80IM","NORM110DM","NORM100DM","NORM90DM","NORM80DM",
  "BIAM110IM","BIAM100IM","BIAM90IM","BIAM80IM","BIAM110DM","BIAM100DM","BIAM90DM","BIAM80DM",
];

const promises = [];
const piezasPorSlot = obtenerPiezasPorSlot();

piezasPorSlot.forEach((piezaSlot) => {
  if (!piezaSlot) return;

  const selectedOption = piezaSlot.option;
  const imageUrl = selectedOption.dataset.imageUrl;
  const piezaId = piezaSlot.id;

  // Tamaños base escalados
  const width = 100 * scaleFactor;
  const height = 100 * scaleFactor;
  const heightChaise = 150 * scaleFactor;
  const widthTerminal = 150 * scaleFactor;
  const widthBrazo = 120 * scaleFactor;

  let finalWidthToApply = width;
  const isChaiseLongue = chaiseLongueIds.includes(piezaId);
  const isTerminal = terminalId.includes(piezaId);
  const isBrazo = brazoId.includes(piezaId);

  const finalHeight = isChaiseLongue ? heightChaise : height;
  if (isChaiseLongue || isBrazo) finalWidthToApply = widthBrazo;
  else if (isTerminal) finalWidthToApply = widthTerminal;

  const piezaTitle = selectedOption.textContent.toUpperCase();
  if (piezaTitle.includes("REPISA")) {
    finalWidthToApply += 25 * scaleFactor;
  } else if (piezaTitle.includes("POUFF")) {
    finalWidthToApply -= 40 * scaleFactor;
  }

  const piezaSeleccionada = todasPiezas.find((p) => p.id === piezaId);
  const medida = piezaSeleccionada?.medida ?? 0;
  const medidap = piezaSeleccionada?.medidap ?? 0;

  if (imageUrl && piezaId !== "None") {
    const imgElement = document.createElement("img");
    imgElement.crossOrigin = "anonymous";
    imgElement.referrerPolicy = "no-referrer";
    imgElement.dataset.piezaId = piezaId;
    imgElement.dataset.rotation = "0";
    imgElement.src = imageUrl;
    imgElement.alt = selectedOption.textContent;
    imgElement.classList.add("img-config");
    imgElement.style.position = "absolute";
    imgElement.style.width = `${finalWidthToApply}px`;
    imgElement.style.height = `${finalHeight}px`;
    imgElement.style.maxWidth = "none";
    imgElement.style.boxSizing = "border-box";
    imgElement.style.transition = "all 0.3s ease"; // Transición suave

    let yaSumoProfundidad = false;
    const esTriggerGiro = specialPieces.includes(piezaId);

    if (esTriggerGiro && !rotateHasHappened) {
      rotateHasHappened = true;
      rotateAfterYutra = true;
      specialPiece.x = currentX;
      specialPiece.y = currentY;
      specialPiece.width = finalWidthToApply;
      specialPiece.height = finalHeight;

      imgElement.style.left = `${specialPiece.x}px`;
      imgElement.style.top = `${specialPiece.y}px`;

      currentX = specialPiece.x + finalWidthToApply;
      currentY = specialPiece.y + finalHeight;

      totalMedida += medida;
      cotaProfundidad = Math.max(cotaProfundidad, medidap || 0);
      yaSumoProfundidad = true;
    } else if (rotateAfterYutra) {
      imgElement.style.transform = "rotate(90deg)";
      imgElement.dataset.rotation = "90";
      
      // Ajustes escalados para diferentes tipos de piezas
      if (modRepisa.includes(piezaId)) {
        imgElement.style.left = `${specialPiece.x + specialPiece.width - finalHeight - (23 * scaleFactor)}px`;
        imgElement.style.top = `${specialPiece.y + specialPiece.height - finalHeight + (122 * scaleFactor)}px`;
      } else if (brazoId.includes(piezaId)) {
        imgElement.style.left = `${specialPiece.x + specialPiece.width - finalHeight - (10 * scaleFactor)}px`;
        imgElement.style.top = `${specialPiece.y + specialPiece.height - finalHeight + (110 * scaleFactor)}px`;
      } else if (terminalId.includes(piezaId)) {
        imgElement.style.left = `${specialPiece.x + specialPiece.width - finalHeight - (25 * scaleFactor)}px`;
        imgElement.style.top = `${specialPiece.y + specialPiece.height - finalHeight + (125 * scaleFactor)}px`;
      } else if (chaiseLongueIds.includes(piezaId)) {
        imgElement.style.left = `${specialPiece.x + specialPiece.width - finalHeight + (15 * scaleFactor)}px`;
        imgElement.style.top = `${specialPiece.y + specialPiece.height - finalHeight + (135 * scaleFactor)}px`;
      } else if (pouffId.includes(piezaId)) {
        imgElement.style.left = `${specialPiece.x + specialPiece.width - finalHeight + (20 * scaleFactor)}px`;
        imgElement.style.top = `${specialPiece.y + specialPiece.height - finalHeight + (80 * scaleFactor)}px`;
      } else if (pouffTPId.includes(piezaId)) {
        imgElement.style.left = `${specialPiece.x + specialPiece.width - finalHeight + (20 * scaleFactor)}px`;
        imgElement.style.top = `${specialPiece.y + specialPiece.height - finalHeight + (80 * scaleFactor)}px`;
      } else if (modTapa.includes(piezaId)) {
        imgElement.style.left = `${specialPiece.x + specialPiece.width - finalHeight - (13 * scaleFactor)}px`;
        imgElement.style.top = `${specialPiece.y + specialPiece.height - finalHeight + (112 * scaleFactor)}px`;
      } else {
        imgElement.style.left = `${specialPiece.x + specialPiece.width - finalHeight}px`;
        imgElement.style.top = `${specialPiece.y + specialPiece.width}px`;
      }

      specialPiece.y += finalWidthToApply;
      cotaProfundidad += medida;
      yaSumoProfundidad = true;
    } else {
      imgElement.style.left = `${currentX}px`;
      imgElement.style.top = `${currentY}px`;
      currentX += finalWidthToApply;
      totalMedida += medida;
    }

    if (!yaSumoProfundidad) {
      if (!rotateAfterYutra) {
        cotaProfundidad = Math.max(cotaProfundidad, medidap);
      } else if (!esTriggerGiro) {
        cotaProfundidad += medida;
      }
    }

    imagenesDiv.appendChild(imgElement);
    promises.push(new Promise((resolve) => { imgElement.onload = resolve; }));
  }
});

Promise.all(promises).then(() => {
  window.__ULTIMO_TOTAL_MEDIDA_CM__ = totalMedida;
  window.__ULTIMA_PROFUNDIDAD_CM__ = cotaProfundidad;
  posicionarCotas(imagenesDiv, totalMedida, cotaProfundidad);

  // -- Guardamos la configuración del layout actual en una variable global para usarla en el PDF --
  const piezasRenderizadas = Array.from(imagenesDiv.querySelectorAll(".img-config"));
  if (!piezasRenderizadas.length) {
    window.__CONFIGURACION_LAYOUT__ = null;
    return;
  }

  const contRect = imagenesDiv.getBoundingClientRect();
  const layoutPieces = piezasRenderizadas.map((img) => {
    const rect = img.getBoundingClientRect();
    const rectLeft = rect.left - contRect.left;
    const rectTop = rect.top - contRect.top;
    const cssWidth = parseFloat(img.style.width) || rect.width;
    const cssHeight = parseFloat(img.style.height) || rect.height;
    return {
      id: img.dataset.piezaId || "",
      title: img.alt || "",
      src: img.currentSrc || img.src,
      rotation: parseFloat(img.dataset.rotation || "0") || 0,
      rect: {
        left: rectLeft,
        top: rectTop,
        width: rect.width,
        height: rect.height,
      },
      css: {
        left: parseFloat(img.style.left) || rectLeft,
        top: parseFloat(img.style.top) || rectTop,
        width: cssWidth,
        height: cssHeight,
      },
    };
  });

  let minLeft = Infinity;
  let minTop = Infinity;
  let maxRight = -Infinity;
  let maxBottom = -Infinity;

  layoutPieces.forEach(({ rect }) => {
    if (rect.left < minLeft) minLeft = rect.left;
    if (rect.top < minTop) minTop = rect.top;
    const right = rect.left + rect.width;
    const bottom = rect.top + rect.height;
    if (right > maxRight) maxRight = right;
    if (bottom > maxBottom) maxBottom = bottom;
  });

  window.__CONFIGURACION_LAYOUT__ = {
    pieces: layoutPieces,
    bounds: {
      left: Number.isFinite(minLeft) ? minLeft : 0,
      top: Number.isFinite(minTop) ? minTop : 0,
      width: Number.isFinite(maxRight - minLeft) ? maxRight - minLeft : 0,
      height: Number.isFinite(maxBottom - minTop) ? maxBottom - minTop : 0,
    },
    container: {
      width: contRect.width,
      height: contRect.height,
    },
    meta: {
      totalMedidaCm: totalMedida,
      profundidadCm: cotaProfundidad,
    },
  };
});
}

// 3. Event listener mejorado para resize con debounce
let resizeTimeout;
(function attachResponsiveResize() {
if (window.__COTAS_RESIZE_ATTACHED__) return;
window.__COTAS_RESIZE_ATTACHED__ = true;
window.addEventListener("orientationchange", () => {
  setTimeout(() => {
    sizeCanvasToContainer();
    mostrarImagenes();
  }, 300);
});


window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    const imagenesDiv = document.getElementById("imagenPiezas");
    if (!imagenesDiv) return;
    sizeCanvasToContainer();
    // Regenerar toda la configuración con el nuevo factor de escala
    mostrarImagenes();
  }, 250); // Espera 250ms después del último resize
});
})();
