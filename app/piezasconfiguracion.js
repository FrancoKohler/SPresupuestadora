function llenarSelects() {
  const todasPiezas = [
    ...piezasAura.filter((p) => p.id !== "None"),
    ...piezasBianca.filter((p) => p.id !== "None"),
    ...piezasLuna.filter((p) => p.id !== "None"),
    ...piezasNora.filter((p) => p.id !== "None"),
    ...piezasVera.filter((p) => p.id !== "None"),
  ];

  for (let i = 1; i <= 8; i++) {
    const select = document.getElementById(`pieza${i}`);
    if (!select) continue;

    select.innerHTML =
      '<option value="None" data-medida="0">Sin pieza seleccionada</option>';

    todasPiezas.forEach((pieza) => {
      const option = new Option(`${pieza.title} (${pieza.medida}cm)`, pieza.id);
      option.dataset.imageUrl = pieza.imageUrl;
      option.dataset.medida = pieza.medida.toString();
      option.dataset.width = pieza.width.toString();
      option.dataset.height = pieza.height.toString();
      select.add(option);
    });
  }
}

function mostrarImagenes() {
  const imagenesDiv = document.getElementById("imagenPiezas");
  imagenesDiv.innerHTML = ""; // Limpiar imágenes anteriores
  imagenesDiv.style.position = "relative";
  imagenesDiv.style.transform = "none";
  imagenesDiv.style.transformOrigin = "top left";

  let currentX = 0;
  let currentY = 0;
  let rotateAfterYutra = false;
  let specialPiece = { x: 0, y: 0, width: 0, height: 0 };
  const specialPieces = ["BIAR108S", "VERR108S", "AURR108S"];
  const promises = [];
  let sumaMedidas = 0;

  for (let i = 1; i <= 8; i++) {
    const piezaSelect = document.getElementById(`pieza${i}`);
    if (!piezaSelect || piezaSelect.selectedIndex <= 0) continue;
    if (piezaSelect && piezaSelect.selectedIndex !== -1) {
      const selectedOption = piezaSelect.options[piezaSelect.selectedIndex];
      const imageUrl = selectedOption.dataset.imageUrl;
      const piezaId = selectedOption.value;
      const medida = selectedOption ? selectedOption.medida : 0;
      const width = parseInt(selectedOption.dataset.width) || 100;
      const height = parseInt(selectedOption.dataset.height) || 100;

      if (!isNaN(medida)) sumaMedidas += medida;

      if (imageUrl && piezaId !== "None") {
        const imgElement = document.createElement("img");
        imgElement.style.width = `${width}px`;
        imgElement.style.height = `${height}px`;

        imgElement.src = imageUrl;
        imgElement.alt = selectedOption.textContent;

        imgElement.style.position = "absolute";
        imgElement.classList.add("img-config");

        imagenesDiv.appendChild(imgElement);
        imgElement.style.maxWidth = "none";
        imgElement.style.boxSizing = "border-box";
        imgElement.style.border = "1px solid red";
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
                imgElement.style.transform = " rotate(90deg)";
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
}

mostrarImagenes();
