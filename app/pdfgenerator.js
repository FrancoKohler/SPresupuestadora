/*------VARIABLES UNIVERSALES-------*/

/*------RECONOCIMIENTO DE FECHA ACTUAL-----*/
const currentDate = new Date();
const formattedDate = `${currentDate.getDate()}/${
  currentDate.getMonth() + 1
}/${currentDate.getFullYear()}`;

/*--------GENERADOR DE CODIGO ALEATORIO--------*/
function generateRandomReferenceNumber() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < 9; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

const numeroReferencia = generateRandomReferenceNumber();

async function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

// Función mejorada para esperar a que las imágenes se carguen completamente
async function waitForImagesToLoad(container) {
  if (!container) return;
  const images = container.getElementsByTagName("img");
  const promises = Array.from(images).map(
    img =>
      new Promise((resolve) => {
        if (img.complete && img.naturalHeight !== 0) {
          resolve();
        } else {
          img.onload = () => resolve();
          img.onerror = () => resolve(); // no bloquear en errores
        }
      })
  );
  await Promise.all(promises);
}

// Función mejorada para capturar elementos con dimensiones dinámicas
async function capturePNG(selectorOrEl, options = {}) {
  const el = typeof selectorOrEl === "string"
    ? document.querySelector(selectorOrEl)
    : selectorOrEl;
  if (!el) return null;

  // Configuraciones por defecto
  const defaultOptions = {
    scale: 2, // Mayor resolución
    useCORS: true,
    allowTaint: true,
    backgroundColor: null,
    scrollY: -window.scrollY,
    scrollX: -window.scrollX,
    width: null, // Se calculará automáticamente
    height: null, // Se calculará automáticamente
    ...options
  };

  // Hacer el elemento visible temporalmente
  const prevStyles = {
    display: el.style.display,
    visibility: el.style.visibility,
    opacity: el.style.opacity,
    position: el.style.position,
    left: el.style.left,
    top: el.style.top
  };

  // Asegurar que el elemento sea visible
  el.style.display = "block";
  el.style.visibility = "visible";
  el.style.opacity = "1";
  
  // Forzar un reflow para asegurar que las dimensiones se calculen correctamente
  el.offsetHeight;
  
  await waitForImagesToLoad(el);
  await wait(200); // Tiempo adicional para que se establezca el layout

  try {
    // Obtener las dimensiones reales del elemento
    const rect = el.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(el);
    
    // Calcular dimensiones incluyendo padding y border si es necesario
    const actualWidth = rect.width;
    const actualHeight = rect.height;

    // Configurar opciones de captura con dimensiones reales
    const captureOptions = {
      ...defaultOptions,
      width: actualWidth > 0 ? actualWidth : undefined,
      height: actualHeight > 0 ? actualHeight : undefined,
    };

    console.log(`Capturando elemento: ${selectorOrEl}`, {
      width: actualWidth,
      height: actualHeight,
      rect
    });

    const canvas = await html2canvas(el, captureOptions);

    // Restaurar estilos originales
    Object.keys(prevStyles).forEach(key => {
      el.style[key] = prevStyles[key];
    });

    const dataUrl = canvas.toDataURL("image/png");
    if (!dataUrl || !dataUrl.startsWith("data:image/png")) return null;
    return dataUrl;

  } catch (error) {
    console.error("Error capturando elemento:", error);
    
    // Restaurar estilos originales en caso de error
    Object.keys(prevStyles).forEach(key => {
      el.style[key] = prevStyles[key];
    });
    
    return null;
  }
}

// Función segura para embebido de PNG
async function embedPngSafe(pdfDoc, dataUrl) {
  if (!dataUrl || !dataUrl.startsWith("data:image/png")) return null;
  try {
    return await pdfDoc.embedPng(dataUrl);
  } catch (e) {
    console.warn("embedPng failed:", e);
    return null;
  }
}

// Función para capturar y embeber imagen en PDF con dimensiones apropiadas
async function captureAndEmbedImage(pdfDoc, page, selector, x, y, maxWidth, maxHeight) {
  const imgData = await capturePNG(selector);
  const pdfImage = await embedPngSafe(pdfDoc, imgData);
  
  if (pdfImage) {
    const { width: imgWidth, height: imgHeight } = pdfImage;
    
    // Calcular escala manteniendo proporción
    const scaleX = maxWidth / imgWidth;
    const scaleY = maxHeight / imgHeight;
    const scale = Math.min(scaleX, scaleY, 1); // No escalar hacia arriba
    
    const finalWidth = imgWidth * scale;
    const finalHeight = imgHeight * scale;
    
    // Centrar la imagen en el área asignada si es más pequeña
    const offsetX = (maxWidth - finalWidth) / 2;
    const offsetY = (maxHeight - finalHeight) / 2;
    
    page.drawImage(pdfImage, {
      x: x + offsetX,
      y: y + offsetY,
      width: finalWidth,
      height: finalHeight
    });
    
    console.log(`Imagen ${selector} embebida:`, {
      originalSize: { width: imgWidth, height: imgHeight },
      finalSize: { width: finalWidth, height: finalHeight },
      scale
    });
    
    return true;
  }
  return false;
}

async function createPDF() {
  await new Promise((resolve) => setTimeout(resolve, 50));
  
  // Obtener datos del formulario
  const modelo = document.getElementById("modelo").value;
  const nombreEmpresa = document.getElementById("nombreEmpresa").value;
  const cifEmpresa = document.getElementById("cifEmpresa").value;
  const nombreCliente = document.getElementById("nombreCliente").value;
  const cifCliente = document.getElementById("cifCliente").value;
  const emailCliente = document.getElementById("emailCliente").value;
  const telefonoCliente = document.getElementById("telefonoCliente").value;
  const telefonoEmpresa = document.getElementById("telefonoEmpresa").value;
  const emailEmpresa = document.getElementById("emailEmpresa").value;
  const comunidad = document.getElementById("comunidad").value;
  const pais = document.getElementById("pais").value;
  const calle = document.getElementById("calle").value;
  const ciudad = document.getElementById("ciudad").value;
  const codigoPostal = document.getElementById("codigoPostal").value;
  const puertaPiso = document.getElementById("puertaPiso").value;
  const tela = document.getElementById("tela").value;
  const observaciones = document.getElementById("observaciones").value;
  const telaNombre = document.getElementById("selectTelaContainer").value;
  const precioTotalElement = document.getElementById("precioTotal");
  const descuentoAplicadoElement = document.getElementById("descuentoAplicado");
  const precioTotalDescElement = document.getElementById("precioTotalDesc");

  const selectIds = [
    "pieza1", "pieza2", "pieza3", "pieza4",
    "pieza5", "pieza6", "pieza7", "pieza8",
  ];
  
  const piezasSelect = [
    ...piezasAura, ...piezasBianca, ...piezasLuna,
    ...piezasNora, ...piezasVera
  ];

  // Crear nuevo documento PDF
  const { PDFDocument, StandardFonts, rgb } = PDFLib;
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([550, 750]);

  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const pageWidth = page.getWidth();
  const pageHeight = page.getHeight();
  
  /*-------COLORES------*/
  const color838383 = rgb(0.4, 0.4, 0.4);
  const colorLine = rgb(0.7, 0.7, 0.7);
  const colorPrice = rgb(0.3, 0.3, 0.3);

  /*----FUNCIÓN PARA AÑADIR TEXTO AL PDF-----*/
  function drawText(page, text, x, y, size, font, color) {
    page.drawText(text, {
      x: x, y: y, size: size, font: font, color: color,
    });
  }

  // Header y líneas
  drawText(page, "PRESUPUESTO", 52, 720, 15, helveticaBoldFont);
  page.drawRectangle({
    x: 48, y: 710, width: 450, height: 0.5,
    borderColor: colorLine, borderWidth: 0.2,
  });
 
  // --- LOGO DEL FOOTER ---
const footerLogoOk = await captureAndEmbedImage(
  pdfDoc,
  page,
  "#logoBlackFooter", // 👈 solo el <img>
  385,                 // x en el PDF
  710,                 // y en el PDF (cerca del borde inferior)
  120,                // ancho máximo permitido
  40                  // alto máximo permitido
);

if (!footerLogoOk) {
  page.drawText("Singular Sofás S.L.", {
    x: 52, y: 20, size: 8, font: helveticaFont, color: color838383
  });
}

  /*-------------------INFO CLIENTE------------------- */
  drawText(page, "INFORMACIÓN CLIENTE", 74, 690, 10, helveticaBoldFont);
  drawText(page, `Nombre: ${nombreCliente}`, 74, 670, 8, helveticaFont);
  drawText(page, `CIF Cliente: ${cifCliente}`, 74, 655, 8, helveticaFont);
  if (pais === "España") {
    drawText(page, `País: ${pais}, ${comunidad}`, 74, 640, 8, helveticaFont);
  } else {
    drawText(page, `País: ${pais}`, 74, 640, 8, helveticaFont);
  }
  
  drawText(page, `Direccion: ${calle},${puertaPiso},${ciudad},${codigoPostal}`, 74, 625, 8, helveticaFont);
  drawText(page, `Teléfono: ${telefonoCliente}`, 74, 610, 8, helveticaFont);
  drawText(page, `Email: ${emailCliente}`, 74, 595, 8, helveticaFont);

  // -------------------INFO EMPRESA-------------------
  drawText(page, "INFORMACIÓN EMPRESA",340, 690, 10, helveticaBoldFont);
  drawText(page, `Nombre Empresa: ${nombreEmpresa}`, 340, 670, 8, helveticaFont);
  drawText(page, `Teléfono: ${telefonoEmpresa}`, 340, 655, 8, helveticaFont);
  drawText(page, `CIF Empresa: ${cifEmpresa}`, 340, 640, 8, helveticaFont);
  drawText(page, `Email Empresa: ${emailEmpresa}`, 340, 625, 8, helveticaFont);
  /*--------------------SECCIÓN PRESUPUESTO---------------*/
  drawText(page, "PRESUPUESTO", 340, 605, 10, helveticaBoldFont);
  drawText(page, `Fecha Emisión: ${formattedDate}`, 340, 585, 8, helveticaFont);
  drawText(page, `N° Referencia: ${numeroReferencia}`, 340, 570, 8, helveticaBoldFont);
  /*---------MODELO Y CONFIGURACION-----------*/
  drawText(page, `MODELO: ${modelo}`, 52, 565, 15, helveticaBoldFont);
  
  /*------------LINEA MODELO--------------*/
  page.drawRectangle({
    x: 48, y: 555, width: 450, height: 0.5,
    borderColor: colorLine, borderWidth: 0.2,
  });
  
  drawText(page, "REFERENCIA", 74, 535, 10, helveticaBoldFont);
    /*----------------------TEJIDO-----------------------------------*/
    drawText(page, "TEJIDO", 340, 535, 10, helveticaBoldFont);
    drawText(page, `Articulo: ${tela}`, 340,520, 8, helveticaFont);
    drawText(page, `Tela: ${telaNombre}`, 340, 505, 8, helveticaFont);
  
    // CAPTURA DE IMAGEN DE TELA
    console.log("Capturando imagen de tela...");
    const telaSuccess = await captureAndEmbedImage(
      pdfDoc, page, "#telaReferencia", 340, 435,100, 100
    );
    
    if (!telaSuccess) {
      console.warn("No se pudo capturar la imagen de tela");
    }
  // CAPTURA DE IMAGEN DE REFERENCIA
  console.log("Capturando imagen de referencia...");
  const imgReferenciaSuccess = await captureAndEmbedImage(
    pdfDoc, page, "#imgReferencia", 74, 370, 400, 250
  );
  
  if (!imgReferenciaSuccess) {
    console.warn("No se pudo capturar la imagen de referencia");
    drawText(page, "Imagen de referencia no disponible", 74, 485, 8, helveticaFont, color838383);
  }
  
  drawText(page, "*imagen de referencia de otra configuración", 74, 435, 5, helveticaFont, color838383);


  

  /*----CONFIGURACIÓN----*/
  drawText(page, "CONFIGURACIÓN", 74, 410, 10, helveticaBoldFont);
  drawText(page, "OBSERVACIONES", 340, 410, 10, helveticaBoldFont);
  
 
// --- Utilidad para pintar texto con wrap por ancho:
function drawWrappedText({ page, text, x, y, maxWidth, lineHeight = 12, font, size = 8, color }) {
  const drawLine = (ln, yy) => {
    if (!ln) return yy;
    page.drawText(ln, { x, y: yy, size, font, color });
    return yy - lineHeight;
  };

  // Soporta saltos de línea manuales
  const paragraphs = String(text || "").split(/\r?\n/);
  let yy = y;

  for (const para of paragraphs) {
    let line = "";
    const words = para.split(/\s+/);

    for (let w of words) {
      // Fallback por si una “palabra” supera el ancho (URLs, códigos)
      const wordTooLong = font.widthOfTextAtSize(w, size) > maxWidth;
      if (wordTooLong) {
        // Rompe la palabra en trozos que quepan
        let chunk = "";
        for (const ch of w) {
          const testChunk = chunk + ch;
          if (font.widthOfTextAtSize(testChunk, size) > maxWidth) {
            yy = drawLine(chunk, yy);
            chunk = ch;
          } else {
            chunk = testChunk;
          }
        }
        // Empuja el trozo final a la línea corriente
        w = chunk;
        if (!w) continue;
      }

      const testLine = line ? line + " " + w : w;
      if (font.widthOfTextAtSize(testLine, size) <= maxWidth) {
        line = testLine;
      } else {
        yy = drawLine(line, yy);
        line = w;
      }
    }
    yy = drawLine(line, yy); // Última línea del párrafo
  }
  return yy; // Devuelve la Y final por si la quieres usar
}

// --- Donde antes pintabas las observaciones:
const xObs = 340;
const yObsTop = 395;
const rightGuard = 45; // 45 px antes del fin del ancho del PDF
const maxTextWidth = pageWidth - rightGuard - xObs;

drawWrappedText({
  page,
  text: observaciones,
  x: xObs,
  y: yObsTop,
  maxWidth: Math.max(0, maxTextWidth),
  lineHeight: 12,            // ajusta si quieres más/menos interlineado
  font: helveticaFont,
  size: 8,
  color: color838383         // o helveticaFont/color que ya usas
});
// Asegura visibles las cotas durante la captura
function temporarilyShowMeasures(rootEl) {
  const targets = rootEl.querySelectorAll(
    '#lineaAncho, #lineaProfundidad, #ancho, #profundidad, .cota, [data-cota], [id*="cota"]'
  );
  const prev = [];
  targets.forEach(el => {
    prev.push([el, el.style.display, el.style.visibility, el.style.zIndex]);
    el.style.display = 'block';
    el.style.visibility = 'visible';
    el.style.zIndex = '9999'; // por si están debajo
  });
  return () => prev.forEach(([el, d, v, z]) => {
    el.style.display = d;
    el.style.visibility = v;
    el.style.zIndex = z;
  });
}

// Rect expandido: unión de solo canvas + cotas
function getExpandedViewportRectStrict(rootEl, opts = {}) {
  const {
    // cuánto permitir por arriba/abajo/laterales
    padTop = 24, padRight = 16, padBottom = 0, padLeft = 16,
    // tope inferior extra por debajo del canvas
    bottomExtraFromCanvas = 0
  } = opts;

  const canvas = rootEl.querySelector('canvas');
  if (!canvas) return null;

  // Rects solo de elementos que nos interesan (cotas)
  const measureNodes = rootEl.querySelectorAll(
    '#lineaAncho, #lineaProfundidad, #ancho, #profundidad, .cota, [data-cota], [id*="cota"]'
  );

  const rects = [];
  const canvasRect = canvas.getBoundingClientRect();
  rects.push(canvasRect);

  measureNodes.forEach(n => rects.push(n.getBoundingClientRect()));

  // Unión
  let minLeft   = Math.min(...rects.map(r => r.left))   - padLeft;
  let minTop    = Math.min(...rects.map(r => r.top))    - padTop;
  let maxRight  = Math.max(...rects.map(r => r.right))  + padRight;
  let maxBottom = Math.max(...rects.map(r => r.bottom)) + padBottom;

  // 🔒 Tope inferior duro: no bajar más que el fondo del canvas + margen pequeño
  const hardBottom = canvasRect.bottom + bottomExtraFromCanvas;
  if (maxBottom > hardBottom) maxBottom = hardBottom;

  return {
    x: Math.floor(minLeft),
    y: Math.floor(minTop),
    width: Math.ceil(maxRight - minLeft),
    height: Math.ceil(maxBottom - minTop),
  };
}

async function capturePNGExpanded(rootSelector, opts = {}) {
  const rootEl = typeof rootSelector === 'string'
    ? document.querySelector(rootSelector)
    : rootSelector;
  if (!rootEl) return null;

  const restoreMeasures = temporarilyShowMeasures(rootEl);
  await waitForImagesToLoad(rootEl);
  await wait(60);

  try {
    // 👉 ajusta estos valores si necesitas más/menos margen
    const area = getExpandedViewportRectStrict(rootEl, {
      padTop: 24, padRight: 14, padBottom: 0, padLeft: 14,
      bottomExtraFromCanvas: 0 // ↓ si aún captura algo de más, pon 6 o 0
    });
    if (!area) return null;

    const canvas = await html2canvas(document.body, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      scrollX: -window.scrollX,
      scrollY: -window.scrollY,
      x: area.x,
      y: area.y,
      width: area.width,
      height: area.height,
    });
    return canvas.toDataURL('image/png');
  } finally {
    restoreMeasures();
  }
}


const imgDataConfig = await capturePNGExpanded(
  '#imagenPiezas',
  'canvas, #lineaAncho, #lineaProfundidad, #ancho, #profundidad',
  { pad: { top: 24, right: 16, bottom: 0, left: 16 }, clampToRoot: true }
);

const pdfImageConfig = await embedPngSafe(pdfDoc, imgDataConfig);
if (pdfImageConfig) {
  const { width: imgW, height: imgH } = pdfImageConfig;
  const maxW = 300, maxH = 200; // tus límites actuales
  const scale = Math.min(maxW / imgW, maxH / imgH, 1);
  page.drawImage(pdfImageConfig, {
    x: 10 + (maxW - imgW * scale) / 2,
    y: 220 + (maxH - imgH * scale) / 2,
    width: imgW * scale,
    height: imgH * scale,
  });
} else {
  drawText(page, "Imagen de configuración no disponible", 74, 350, 8, helveticaFont, color838383);
}




  /*-------------------------TARIFA-------------------------------*/
  drawText(page, "TARIFA", 52, 220, 15, helveticaBoldFont);
  page.drawRectangle({
    x: 48, y: 210, width: 450, height: 0.5,
    borderColor: colorLine, borderWidth: 0.2,
  });
  
  drawText(page, "PIEZA", 76, 190, 8, helveticaBoldFont);
  drawText(page, "VALOR U.", 362, 190, 8, helveticaBoldFont);

  /*------------RECUADRO PRECIOS--------------*/
  page.drawRectangle({
    x: 48, y: 77, width: 450, height: 105,
    borderColor: rgb(0.7, 0.7, 0.7), borderWidth: 0.2,
  });

  /*-------------------------PRECIOS Y CODIGOS---------------------*/
  function procesarSelects() {
    const validSelectIds = selectIds.filter((selectId) => {
      const selectElement = document.getElementById(selectId);
      return selectElement && selectElement.value !== "None";
    });
  
    let currentYPos = 170; // base izquierda
    const line = 12;
  
    // Piezas
    validSelectIds.forEach((selectId, index) => {
      const selectElement = document.getElementById(selectId);
      const selectedValue = selectElement.value;
      const piezaData = piezasSelect.find((pieza) => pieza.id === selectedValue);
      const title = piezaData ? String(piezaData.title) : "";
      const yPos = currentYPos - index * line;
      drawText(page, title, 52, yPos, 8, helveticaFont, colorPrice);
    });
  
    // Avanza el cursor bajo las piezas
    currentYPos = currentYPos - validSelectIds.length * line;
  
    // Cojines (si hay)
    const selCoj = document.getElementById("cojines");
    const cantidadCojines = selCoj ? (parseInt(selCoj.value, 10) || 0) : 0;
    if (cantidadCojines > 0) {
      // ID fijo del artículo (ajústalo si lo sacas de data-attrs)
      const cojinosText = `CA4545 Cojín Cuadrado 45x45 cms (x${cantidadCojines})`;
      // baja una línea antes de pintar para no pisar la última pieza
      currentYPos -= line;
      drawText(page, cojinosText, 52, currentYPos, 8, helveticaFont, colorPrice);
    }
  }
  
  
  /*-------PRECIOS--------- */
/*-------PRECIOS--------- */
const preciosMaterial = document.querySelectorAll("#preciosMaterial"); // idealmente: ".precioMaterial"
const precioCojines = document.getElementById("precioCojines");

let priceY = 170;           // base derecha
const line = 12;

// Precios piezas
if (preciosMaterial.length > 0) {
  preciosMaterial.forEach((precio, index) => {
    const yPos = priceY - index * line;
    const textContent = (precio.textContent || "").trim();
    drawText(page, textContent, 362, yPos, 8, helveticaFont, colorPrice);
  });
  priceY = priceY - preciosMaterial.length * line;
}

// Precio cojines (si aplica)
const selCoj = document.getElementById("cojines");
const cantidadCojines = selCoj ? (parseInt(selCoj.value, 10) || 0) : 0;
if (cantidadCojines > 0 && precioCojines) {
  // opcional: baja una línea para mantener la alineación con la izquierda
  priceY -= line;
  const precioCojinesText = (precioCojines.textContent || "").trim();
  drawText(page, precioCojinesText, 362, priceY, 8, helveticaFont, colorPrice);
}

  procesarSelects();

  /*------------RECUADROS DE TOTALES--------------*/
  drawText(page, "TOTAL", 430, 67, 8, helveticaBoldFont);
  page.drawRectangle({
    x: 430, y: 50, width: 60, height: 15,
    borderColor: rgb(0.7, 0.7, 0.7), borderWidth: 0.2,
  });

  if (precioTotalElement) {
    const precioTotal = precioTotalElement.textContent || precioTotalElement.innerText;
    drawText(page, `${precioTotal}`, 430, 54, 8, helveticaFont, colorPrice);
  }

  drawText(page, "TOTAL C. DESC", 430, 40, 8, helveticaBoldFont);
  page.drawRectangle({
    x: 430, y: 23, width: 60, height: 15,
    borderColor: rgb(0.7, 0.7, 0.7), borderWidth: 0.2,
  });

  if (precioTotalDescElement) {
    const precioTotalDesc = precioTotalDescElement.textContent || precioTotalDescElement.innerText;
    drawText(page, `${precioTotalDesc}`, 432, 27, 8, helveticaFont, colorPrice);
  }

  drawText(page, "DESC", 350, 40, 8, helveticaBoldFont);
  page.drawRectangle({
    x: 350, y: 23, width: 60, height: 15,
    borderColor: rgb(0.7, 0.7, 0.7), borderWidth: 0.2,
  });

  if (descuentoAplicadoElement) {
    const descuentoAplicado = descuentoAplicadoElement.textContent || descuentoAplicadoElement.innerText;
    drawText(page, `${descuentoAplicado}`, 352, 27, 8, helveticaFont, colorPrice);
  }

  /*-----------------------ACLARACIONES PRECIOS-----------------*/
  const aclaraciones = [
    "*Presupuesto con validez de 90 días a partir de la fecha de emisión.",
    "*Los pedidos tendrán un plazo general de entrega de 6 semanas laborables.",
    "No obstante, dicho plazo puede variar en función de la llegada a fábrica del tejido seleccionado, ",
    "el aumento de la demanda temporal o la rotura de stock de otros componentes. ",
    "En ese caso Singular informará debidamente de los posibles contratiempos ",
    "indicando la fecha estimada en la confirmación del pedido. Se cobrarán 12€ ",
    "de portes en envíos de mercancía con importe inferior a 300€+ IVA (poufs, ",
    "metrajes, etc.) A partir de 300€, los portes serán gratuitos. ",
   /*  "*Los pedidos se realizarán a través del email pedidos@singular.com. Una vez enviada la confirmación del pedido, se considerará conforme si no se recibe una respuesta en el plazo de 2 días.  ",
    "Transcurridos 5 días del envío de dicha confirmación, el pedido no se podrá cambiar ni cancelar. Se cobrarán 12€ de portes en envíos de mercancía con importe inferior a 300€+ IVA (poufs,   ", */
    "metrajes, etc.) A partir de 300€, los portes serán gratuitos.   ",
    "*La fecha de emisión definirá la validez del presupuesto",
    "más info en pie de página.",
    "*El número de referencia servirá para localizar el",
    "presupuesto ya realizado."
  ];

  aclaraciones.forEach((texto, index) => {
    drawText(page, texto, 52, 65 - (index * 5), 5, helveticaFont, color838383);
  });

  // Descargar el PDF
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Presupuesto_${numeroReferencia}.pdf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Función para generar el PDF con validación
document.addEventListener("DOMContentLoaded", () => {
  const botonPdf = document.getElementById("generateBtn");

  botonPdf.addEventListener("click", () => {
    const campos = [
      { id: "nombreCliente", label: "Nombre y Apellido" },
      { id: "emailCliente", label: "Email", tipo: "email" },
      { id: "codigoPostal", label: "Código Postal" },
      { id: "calle", label: "Calle" },
      { id: "puertaPiso", label: "Puerta/Piso" },
      { id: "nombreEmpresa", label: "Nombre Empresa" },
      { id: "emailEmpresa", label: "Email Empresa", tipo: "email" },
    ];

    let formularioValido = true;
    let mensajesError = [];

    campos.forEach((campo) => {
      const input = document.getElementById(campo.id);
      if (!input.value.trim()) {
        formularioValido = false;
        mensajesError.push(`- ${campo.label} es obligatorio.`);
      } else if (
        campo.tipo === "email" &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)
      ) {
        formularioValido = false;
        mensajesError.push(`- El formato del email no es válido.`);
      }
    });

    if (!formularioValido) {
      Swal.fire({
        icon: "error",
        title: "Campos incompletos o inválidos",
        html: `<div class="textAlert">${mensajesError
          .map((msg) => `<p>${msg}</p>`)
          .join("")}</div>`,
        confirmButtonText: "Aceptar",
        customClass: {
          popup: "popupAlert",
          title: "titleAlert",
          html: "textAlert",
          confirmButton: "btnAlert",
        },
      });
      return;
    }

    // Si todo es válido
    botonPdf.classList.add("active");
    createPDF();
  });
});