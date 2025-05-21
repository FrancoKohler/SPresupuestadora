function llenarSelects() {
  for (let i = 1; i <= 8; i++) {
    const select = document.getElementById(`pieza${i}`);
    if (!select) continue;

    // Limpiar opciones previas
    select.innerHTML = "";

    piezasVera.forEach((pieza) => {
      const option = document.createElement("option");
      option.value = pieza.id;
      option.textContent = pieza.title;
      option.dataset.imageUrl = pieza.imageUrl;
      option.dataset.medida = pieza.medida;
      select.appendChild(option);
    });

    // Por defecto seleccionar la primera opción ("None")
    select.selectedIndex = 0;
  }
}

function mostrarImagenes() {
  const imagenesDiv = document.getElementById("imagenPiezas");
  imagenesDiv.innerHTML = ""; // Limpiar imágenes anteriores
  imagenesDiv.style.position = "relative";
  const cotasDiv = document.getElementById("numerosCotas");

  let currentX = 0;
  let currentY = 0;
  let rotateAfterYutra = false;
  let specialPiece = { x: 0, y: 0, width: 0, height: 0 };
  const specialPieces = ["BIAR108S", "VERR108S"];

  const promises = [];
  let sumaMedidas = 0;

  for (let i = 1; i <= 8; i++) {
    const piezaSelect = document.getElementById(`pieza${i}`);
    if (piezaSelect && piezaSelect.selectedIndex !== -1) {
      const selectedOption = piezaSelect.options[piezaSelect.selectedIndex];

      const imageUrl = selectedOption.dataset.imageUrl;
      const piezaId = selectedOption.value;
      const medida = selectedOption ? selectedOption.medida : 0;

      console.log(`Pieza ${i}:`, piezaId, "- Medida:", medida);

      if (!isNaN(medida)) sumaMedidas += medida;

      if (imageUrl && piezaId !== "None") {
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imgElement.alt = selectedOption.textContent;
        imgElement.style.position = "absolute";
        imgElement.classList.add("img-config");
        imagenesDiv.appendChild(imgElement);

        const imageLoadPromise = new Promise((resolve) => {
          imgElement.onload = () => {
            setTimeout(() => {
              const imgRect = imgElement.getBoundingClientRect();

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
                imgElement.style.transform = "rotate(90deg)";
                imgElement.style.left = `${specialPiece.x}px`;
                imgElement.style.top = `${
                  specialPiece.y + specialPiece.width
                }px`;

                specialPiece.y += imgRect.width;
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
    if (cotasDiv) cotasDiv.textContent = `Total medidas: ${sumaMedidas} cm`;
  });
}

// Ejecutamos la carga inicial y la función para mostrar imágenes
llenarSelects();

// Por ejemplo, llamar mostrarImagenes() cuando cambie un select:
for (let i = 1; i <= 8; i++) {
  const select = document.getElementById(`pieza${i}`);
  if (select) {
    select.addEventListener("change", mostrarImagenes);
  }
}

mostrarImagenes();
