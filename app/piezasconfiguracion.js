function mostrarImagenes() {
  const imagenesDiv = document.getElementById("imagenPiezas");
  imagenesDiv.innerHTML = ""; // Limpiar las imágenes anteriores
  imagenesDiv.style.position = "relative"; // Asegurar que el contenedor sea relativo

  let currentY = 0;
  let currentX = 0;
  let rotateAfterYutra = false; // Bandera para saber si rotamos después de YUTRA
  let specialPiece = { x: 0, y: 0, width: 0, height: 0 }; // Posición y tamaño de YUTRA calculado dinámicamente

  const specialPieces = [
    "YUTRA",
    "AGOR",
    "ALTR",
    "ALPRA",
    "BERLR",
    "BERR",
    "BARR",
    "GIAR",
    "NADRA",
    "MEMRA",
    "PLAAR",
    "PLAR",
    "LINRA",
    "SIGRA",
    "SIRRC",
    "TUNRA",
    "ZENRA",
  ];

  const promises = [];

  for (let i = 1; i <= 8; i++) {
    const piezaSelect = document.getElementById(`pieza${i}`);
    if (piezaSelect && piezaSelect.selectedIndex !== -1) {
      const selectedOption = piezaSelect.options[piezaSelect.selectedIndex];
      const imageUrl = selectedOption.dataset.imageUrl;
      const piezaId = selectedOption.value;

      if (imageUrl && piezaId !== "None") {
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imgElement.alt = selectedOption.textContent;
        imgElement.style.position = "absolute"; // Para poder posicionarlas libremente
        imgElement.classList.add("img-config");
        imagenesDiv.appendChild(imgElement);

        const imageLoadPromise = new Promise((resolve) => {
          imgElement.onload = () => {
            setTimeout(() => {
              const imgRect = imgElement.getBoundingClientRect();
              console.log("Dimensiones:", imgRect.width, imgRect.height);

              // Verificar si es una de las piezas especiales
              if (specialPieces.includes(piezaId)) {
                specialPiece.x = currentX;
                specialPiece.y = currentY;
                specialPiece.width = imgRect.width;
                specialPiece.height = imgRect.height;

                imgElement.style.left = `${specialPiece.x}px`;
                imgElement.style.top = `${specialPiece.y}px`;
                imgElement.style.transformOrigin = "center";

                currentX = specialPiece.x + imgRect.width;
                currentY = specialPiece.y + imgRect.height;
                rotateAfterYutra = true;
              } else if (rotateAfterYutra) {
                /*-------ROTACIONB DE PEIZAS POST ESPECIALES------*/
                imgElement.style.transform = "rotate(90deg)";
                imgElement.style.left = `${specialPiece.x}px`;
                imgElement.style.top = `${
                  specialPiece.y + specialPiece.width
                }px`; // Usamos width en vez de height xq cambia al estar rotado 90 grados

                specialPiece.y += imgRect.width; // Ya que la pieza está rotada, su nuevo alto es su antiguo ancho como explica arriba
              } else {
                imgElement.style.left = `${currentX}px`;
                imgElement.style.top = `${currentY}px`;

                currentX += imgRect.width;
              }

              resolve();
            }, 50);
          };
        });

        promises.push(imageLoadPromise);
      }
    }
  }

  Promise.all(promises).then(() => {
    console.log("Todas las imágenes están cargadas y posicionadas.");
  });
}

function renderResults(results) {
  const resultsContainer = document.getElementById("resultados");
  if (!resultsContainer) return;

  resultsContainer.innerHTML = "";

  results.forEach((item) => {
    const div = document.createElement("div");
    div.textContent = item.titulo;
    div.id = item.id;

    if (item.titulo.toLowerCase().includes("sofa")) {
      div.style.paddingLeft = "5px";
    }

    resultsContainer.appendChild(div);
  });
}

if (typeof generarResumen === "function") {
  generarResumen();
}

mostrarImagenes();
