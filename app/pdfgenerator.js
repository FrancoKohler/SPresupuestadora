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

async function createPDF() {
  await new Promise((resolve) => setTimeout(resolve, 50));
  const modelo = document.getElementById("modelo").value;
  const nombreEmpresa = document.getElementById("nombreEmpresa").value;
  const cifEmpresa = document.getElementById("cifEmpresa").value;
  const nombreCliente = document.getElementById("nombreCliente").value;
  const cifCliente = document.getElementById("cifCliente").value;
  const emailCliente = document.getElementById("emailCliente").value;
  const telefonoCliente = document.getElementById("telefonoCliente").value;
  const telefonoEmpresa = document.getElementById("telefonoEmpresa").value;
  const emailEmpresa = document.getElementById("emailEmpresa").value;
  const pais = document.getElementById("pais").value;
  const calle = document.getElementById("calle").value;
  const ciudad = document.getElementById("ciudad").value;
  const codigoPostal = document.getElementById("codigoPostal").value;
  const puertaPiso = document.getElementById("puertaPiso").value;
  const tela = document.getElementById("tela").value;
  const telaNombre = document.getElementById("selectTelaContainer").value;
  const precioTotalElement = document.getElementById("precioTotal");
  const descuentoAplicadoElement = document.getElementById("descuentoAplicado");
  const precioTotalDescElement = document.getElementById("precioTotalDesc");
  const ancho = document.getElementById("ancho");
  const profundidad = document.getElementById("profundidad");

  const selectIds = [
    "pieza1",
    "pieza2",
    "pieza3",
    "pieza4",
    "pieza5",
    "pieza6",
    "pieza7",
    "pieza8",
  ];
  const piezasSelect = [
    ...piezasAura,
    ...piezasBianca,
    ...piezasLuna,
    ...piezasNora,
    ...piezasVera,
  ];

  // Crear nuevo documento PDF
  const { PDFDocument, StandardFonts, rgb } = PDFLib;
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([550, 750]);

  // Cargar la fuente Helvetica
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  /*-------COLOR ------*/
  const color838383 = rgb(0.4, 0.4, 0.4);
  const colorLine = rgb(0.7, 0.7, 0.7);
  const colorPrice = rgb(0.3, 0.3, 0.3);

  /*----AÑADIR TEXTO AL PDF-----*/

  function drawText(page, text, x, y, size, font, color) {
    page.drawText(text, {
      x: x,
      y: y,
      size: size,
      font: font,
      color: color,
    });
  }

  drawText(page, "Presupuesto", 52, 720, 15, helveticaFont);
  /*------------LINEA PRESUPUESTO--------------*/
  page.drawRectangle({
    x: 48,
    y: 710,
    width: 450,
    height: 0.5,
    borderColor: colorLine,
    borderWidth: 0.2,
  });

  page.drawRectangle({
    x: 430,
    y: 23,
    width: 60,
    height: 15,
    borderColor: rgb(0.7, 0.7, 0.7),
    borderWidth: 0.2,
  });

  /*-------------------INFO CLIENTE------------------- */
  drawText(page, "INFORMACIÓN CLIENTE", 74, 690, 10, helveticaFont);
  drawText(page, `Nombre: ${nombreCliente}`, 74, 670, 8, helveticaFont);
  drawText(page, `CIF Cliente: ${cifCliente}`, 74, 650, 8, helveticaFont);
  drawText(page, `País: ${pais}`, 74, 630, 8, helveticaFont);
  drawText(
    page,
    `Direccion: ${calle},${puertaPiso},${ciudad},${codigoPostal}`,
    74,
    610,
    8,
    helveticaFont
  );
  drawText(page, `Teléfono: ${telefonoCliente}`, 74, 590, 8, helveticaFont);
  drawText(page, `Email: ${emailCliente}`, 74, 570, 8, helveticaFont);

  // -------------------INFO EMPRESA-------------------
  drawText(page, "INFORMACIÓN EMPRESA", 364, 690, 10, helveticaFont);
  drawText(
    page,
    `Nombre Empresa: ${nombreEmpresa}`,
    364,
    670,
    8,
    helveticaFont
  );
  drawText(page, `Teléfono: ${telefonoEmpresa}`, 364, 650, 8, helveticaFont);
  drawText(page, `CIF Empresa: ${cifEmpresa}`, 364, 630, 8, helveticaFont);
  drawText(page, `Email Empresa: ${emailEmpresa}`, 364, 610, 8, helveticaFont);
  /*---------MODELO Y CONFIGURACION-----------*/

  drawText(page, `Modelo: ${modelo}`, 52, 530, 15, helveticaFont);
  /*--------------HTML CANVAS MODELO--------*/
  //TOMA DE IMG DEL HTML PARA IMPRESION EN EL PDF
  const modelosImg = document.getElementById("imgReferenciaModelo");

  const modelosImgData = await domtoimage.toPng(modelosImg, {
    bustCache: true,
  });
  // Obten ancho y alto de la imagen
  const scaleFactor = 0.5;
const widthModelo = modelosImg.offsetWidth * scaleFactor;
const heightModelo = modelosImg.offsetHeight * scaleFactor;
  const pdfImage = await pdfDoc.embedPng(modelosImgData);
  page.drawImage(pdfImage, { x: 74, y: 400, width: widthModelo, height: heightModelo });

  /*------------LINEA MODELO--------------*/
  page.drawRectangle({
    x: 48,
    y: 520,
    width: 450,
    height: 0.5,
    borderColor: colorLine,
    borderWidth: 0.2,
  });
  drawText(page, "REFERENCIA", 74, 500, 10, helveticaFont);

  drawText(
    page,
    "*imagen de referencia de otra configuración",
    74,
    390,
    5,
    helveticaFont,
    color838383
  );
  /*--------------------IMAGEN TELA MUESTRA---------------*/

  drawText(page, "PRESUPUESTO", 364, 500, 10, helveticaFont);
  /*Fecha Emision*/
  drawText(page, `Fecha Emisión: ${formattedDate}`, 364, 480, 8, helveticaFont);
  // Número de Referencia
  drawText(
    page,
    `N° Referencia: ${numeroReferencia}`,
    364,
    460,
    8,
    helveticaFont
  );
  /*Leyenda de presupuesto*/
  drawText(
    page,
    "*La fecha de emisión definirá la validez del presupuesto,",
    364,
    445,
    5,
    helveticaFont,
    color838383
  );

  drawText(
    page,
    "más info en pie de página.",
    364,
    440,
    5,
    helveticaFont,
    color838383
  );
  drawText(
    page,
    "*El número de referencia servirá para localizar el",
    364,
    435,
    5,
    helveticaFont,
    color838383
  );
  drawText(
    page,
    "presupuesto ya realizado.",
    364,
    430,
    5,
    helveticaFont,
    color838383
  );
  /*----CARGA DE IMAGENES Y DESCARGA DE PDF----*/
  drawText(page, "CONFIGURACION", 74, 350, 10, helveticaFont);
  drawText(page, `Ancho: ${ancho.textContent}`, 85, 330, 6, helveticaFont);
  drawText(
    page,
    `Profundidad: ${profundidad.textContent}`,
    260,
    290,
    6,
    helveticaFont
  );

  // Draw the image on the page

  const imagenesDiv = document.getElementById("imagenPiezas");

  await waitForImagesToLoad(document.getElementById("imagenPiezas"));
  const imgPiezasData = await domtoimage.toPng(imagenesDiv, {
    cacheBust: true,
  });

  const pdfPiezasImage = await pdfDoc.embedPng(imgPiezasData);

  const scale = 0.3;  const width = imagenesDiv.offsetWidth * scale;
  const height = imagenesDiv.offsetHeight * scale;
  console.log("Imagen piezas:", imgPiezasData);

  page.drawImage(pdfPiezasImage, { x: 75, y: 265, width: width, height: height });

  // Espera a que todas las imágenes se hayan cargado completamente
  function waitForImagesToLoad(container) {
    const images = container.getElementsByTagName("img");
    const promises = Array.from(images).map(
      (img) =>
        new Promise((resolve, reject) => {
          if (img.complete) {
            resolve();
          } else {
            img.onload = resolve;
            img.onerror = reject;
          }
        })
    );
    return Promise.all(promises);
  }

  /*----------------------TEJIDO-----------------------------------*/
  drawText(page, "TEJIDO", 364, 350, 10, helveticaFont);
  drawText(page, `Articulo: ${tela}`, 430, 315, 8, helveticaFont);
  drawText(page, `Tela: ${telaNombre}`, 430, 295, 8, helveticaFont);

  const telaImg = document.getElementById("telaReferenciaImg");
  const telaImgData = await domtoimage.toPng(telaImg, { cacheBust: true });
  const telaPdfImage = await pdfDoc.embedPng(telaImgData);
  page.drawImage(telaPdfImage, { x: 364, y: 280, width: 50, height: 50 });

  /*-------------------------TARIFA-------------------------------*/
  drawText(page, "Tarifa", 52, 220, 15, helveticaFont);
  /*------------LINEA TARIFA--------------*/
  page.drawRectangle({
    x: 48,
    y: 210,
    width: 450,
    height: 0.5,
    borderColor: colorLine,
    borderWidth: 0.2,
  });
  drawText(page, "PIEZA", 76, 190, 8, helveticaFont);
  /* drawText(page, "CANT.", 320, 190, 8, helveticaFont); */
  drawText(page, "VALOR U.", 362, 190, 8, helveticaFont);
  /* drawText(page, "VALOR TOT.", 441, 190, 8, helveticaFont); */

  /*-----------------------ACLARACIONES PRECIOS-----------------*/
  drawText(
    page,
    "*Presupuesto con validez de 90 días a partir de la fecha de emisión.",
    52,
    65,
    5,
    helveticaFont,
    color838383
  );
  drawText(
    page,
    "*Los pedidos tendrán un plazo general de entrega de 6 semanas laborables.",
    52,
    60,
    5,
    helveticaFont,
    color838383
  );
  drawText(
    page,
    "No obstante, dicho plazo puede variar en función de la llegada a fábrica del tejido seleccionado, ",
    52,
    55,
    5,
    helveticaFont,
    color838383
  );
  drawText(
    page,
    "el aumento de la demanda temporal o la rotura de stock de otros componentes. ",
    52,
    50,
    5,
    helveticaFont,
    color838383
  );
  drawText(
    page,
    "En ese caso Singular informará debidamente de los posibles contratiempos ",
    52,
    45,
    5,
    helveticaFont,
    color838383
  );
  drawText(
    page,
    "indicando la fecha estimada en la confirmación del pedido. Se cobrarán 12€ ",
    52,
    40,
    5,
    helveticaFont,
    color838383
  );
  drawText(
    page,
    "de portes en envíos de mercancía con importe inferior a 300€+ IVA (poufs, ",
    52,
    35,
    5,
    helveticaFont,
    color838383
  );
  drawText(
    page,
    "metrajes, etc.) A partir de 300€, los portes serán gratuitos. ",
    52,
    30,
    5,
    helveticaFont,
    color838383
  );
  drawText(
    page,
    "*Los pedidos se realizarán a través del email pedidos@singular.com. Una vez enviada la confirmación del pedido, se considerará conforme si no se recibe una respuesta en el plazo de 2 días.  ",
    52,
    15,
    5,
    helveticaFont,
    color838383
  );
  drawText(
    page,
    "Transcurridos 5 días del envío de dicha confirmación, el pedido no se podrá cambiar ni cancelar. Se cobrarán 12€ de portes en envíos de mercancía con importe inferior a 300€+ IVA (poufs,   ",
    52,
    10,
    5,
    helveticaFont,
    color838383
  );
  drawText(
    page,
    "metrajes, etc.) A partir de 300€, los portes serán gratuitos.   ",
    52,
    5,
    5,
    helveticaFont,
    color838383
  );

  /*------------RECUADRO PRECIOS TOTAL--------------*/
  drawText(page, "TOTAL", 430, 67, 8, helveticaFont);
  page.drawRectangle({
    x: 430,
    y: 50,
    width: 60,
    height: 15,
    borderColor: rgb(0.7, 0.7, 0.7),
    borderWidth: 0.2,
  });
  /*TEXTO PRECIO TOTAL*/
  if (precioTotalElement) {
    const precioTotal =
      precioTotalElement.textContent || precioTotalElement.innerText;
    drawText(page, `${precioTotal}`, 430, 54, 8, helveticaFont, colorPrice);
  } else {
    console.error("Elemento 'precioTotal' no encontrado");
  }
  /*------------RECUADRO PRECIOS DESCUENTO APLICADO--------------*/
  drawText(page, "TOTAL C. DESC", 430, 40, 8, helveticaFont);
  page.drawRectangle({
    x: 430,
    y: 23,
    width: 60,
    height: 15,
    borderColor: rgb(0.7, 0.7, 0.7),
    borderWidth: 0.2,
  });
  /*TEXTO PRECIO TOTAL C.DESC*/
  if (precioTotalDescElement) {
    const precioTotalDesc =
      precioTotalDescElement.textContent || precioTotalDescElement.innerText;
    drawText(page, `${precioTotalDesc}`, 432, 27, 8, helveticaFont, colorPrice);
  } else {
    console.error("Elemento 'precioTotalDesc' no encontrado");
  }
  /*------------RECUADRO PRECIOS CODIGO DESCUENTO-------------*/
  drawText(page, "DESC", 350, 40, 8, helveticaFont);
  page.drawRectangle({
    x: 350,
    y: 23,
    width: 60,
    height: 15,
    borderColor: rgb(0.7, 0.7, 0.7),
    borderWidth: 0.2,
  });

  /*TEXTO DESCUENTO QUE APLICA*/
  if (descuentoAplicadoElement) {
    const descuentoAplicado =
      descuentoAplicadoElement.textContent ||
      descuentoAplicadoElement.innerText;
    drawText(
      page,
      `${descuentoAplicado}`,
      352,
      27,
      8,
      helveticaFont,
      colorPrice
    );
  } else {
    console.error("Elemento 'descuentoAplicado' no encontrado");
  }
  /*------------RECUADRO PRECIOS--------------*/
  page.drawRectangle({
    x: 48,
    y: 77,
    width: 450,
    height: 105,
    borderColor: rgb(0.7, 0.7, 0.7),
    borderWidth: 0.2,
  });
  /*-------------------------PRECIOS Y CODIGOS---------------------*/

  function procesarSelects() {
    const validSelectIds = selectIds.filter((selectId) => {
      const selectElement = document.getElementById(selectId);
      return selectElement && selectElement.value !== "None";
    });

    validSelectIds.forEach((selectId, index) => {
      const selectElement = document.getElementById(selectId);
      const selectedValue = selectElement.value;

      const piezaData = piezasSelect.find(
        (pieza) => pieza.id === selectedValue
      );
      const title = piezaData ? String(piezaData.title) : "";

      const yPos = 170 - index * 12;
      drawText(page, title, 52, yPos, 8, helveticaFont, colorPrice);
    });
  }
  /*-------PRECIOS--------- */
  const preciosMaterial = document.querySelectorAll("#preciosMaterial");
  if (preciosMaterial.length > 0) {
    preciosMaterial.forEach((precio, index) => {
      const yPos = 170 - index * 12;
      const textContent = precio.textContent.trim(); // Obtener el texto del elemento, asegurando que esté limpio

      drawText(page, textContent, 362, yPos, 8, helveticaFont, colorPrice);
    });
  } else {
    console.error(
      "No se encontraron precios de materiales en el almacenamiento local."
    );
  }
  procesarSelects();

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
}

// Función para generar ambos PDFs
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
    async function generatePDFs() {
      await createPDF();
    }
    // Si todo es válido
    botonPdf.classList.add("active");
    generatePDFs();
  });
});
