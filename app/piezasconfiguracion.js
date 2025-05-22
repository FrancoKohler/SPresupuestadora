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

function mostrarImagenes() {
  const imagenesDiv = document.getElementById("imagenPiezas");
  imagenesDiv.innerHTML = "";
  imagenesDiv.style.position = "relative";
  imagenesDiv.style.transform = "none";
  imagenesDiv.style.transformOrigin = "top-left";

  let currentX = 0;
  let currentY = 0;
  let rotateAfterYutra = false;
  let specialPiece = { x: 0, y: 0, width: 0, height: 0 };

  const specialPieces = [
    "BIAR108S",
    "VERR108S",
    "AURR108S",
    "NORR108S",
    "PROR105S",
  ];

  const chaiseLongueIds = [
    /*-----VERA CHAISE-----*/
    "VERC110D",
    "VERC110I",
    "VERC100D",
    "VERC100I",
    "VERC90D",
    "VERC90I",
    "VERC80D",
    "VERC80I",
    /*-----NORA CHAISE-----*/
    "NORC110D",
    "NORC110I",
    "NORC100D",
    "NORC100I",
    "NORC90D",
    "NORC90I",
    "NORC80D",
    "NORC80I",
    /*-----LUNA CHAISE-----*/
    "PROC100D",
    "PROC100I",
    "PROC80D",
    "PROC80I",
    "PROC100D",
    /*-----BIANCA CHAISE-----*/
    "BIAC110D",
    "BIAC110I",
    "BIAC100D",
    "BIAC100I",
    "BIAC90D",
    "BIAC90I",
    "BIAC80D",
    "BIAC80I",
    /*-----AURA CHAISE-----*/
    "AURC110D",
    "AURC110I",
    "AURC100D",
    "AURC100I",
    "AURC90D",
    "AURC90I",
    "AURC80D",
    "AURC80I",
  ];

  const terminalId = [
    /*-----VERA TERMINAL-----*/
    "VERT110D",
    "VERT110I",
    "VERT100D",
    "VERT100I",
    "VERT90D",
    "VERT90I",
    "VERT80D",
    "VERT80I",
    /*-----NORA TERMINAL-----*/
    "NORT110D",
    "NORT110I",
    "NORT100D",
    "NORT100I",
    "NORT90D",
    "NORT90I",
    "NORT80D",
    "NORT80I",
    /*-----LUNA TERMINAL-----*/
    "PROT100D",
    "PROT100I",
    "PROT80D",
    "PROT80I",
    /*-----BIANCA CHAISE-----*/
    "BIAC110D",
    "BIAC110I",
    "BIAC100D",
    "BIAC100I",
    "BIAC90D",
    "BIAC90I",
    "BIAC80D",
    "BIAC80I",
    /*-----AURA CHAISE-----*/
    "AURC110D",
    "AURC110I",
    "AURC100D",
    "AURC100I",
    "AURC90D",
    "AURC90I",
    "AURC80D",
    "AURC80I",
  ];

  const promises = [];

  for (let i = 1; i <= 8; i++) {
    const piezaSelect = document.getElementById(`pieza${i}`);
    if (!piezaSelect || piezaSelect.selectedIndex <= 0) continue;

    const selectedOption = piezaSelect.options[piezaSelect.selectedIndex];
    const imageUrl = selectedOption.dataset.imageUrl;
    const piezaId = selectedOption.value;
    const width = 100;
    const height = 100;
    const heightChaise = 150;
    const widthChaise = 150;

    const isChaiseLongue = chaiseLongueIds.includes(piezaId);
    const isTerminal = terminalId.includes(piezaId);

    const finalHeight = isChaiseLongue ? heightChaise : height;
    const finalWidth = isTerminal ? widthChaise : width;

    console.log(
      `Insertando imagen ${piezaId} con tamaño: ${width}x${finalHeight}`
    );

    if (imageUrl && piezaId !== "None") {
      const imgElement = document.createElement("img");
      imgElement.style.width = `${width}px`;
      imgElement.style.height = `${finalHeight}px`;
      imgElement.style.height = `${finalWidth}px`;

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
              imgElement.style.transform = "rotate(90deg)";
              imgElement.style.left = `${specialPiece.x}px`;
              imgElement.style.top = `${specialPiece.y + specialPiece.width}px`;

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

llenarSelects();

for (let i = 1; i <= 8; i++) {
  const select = document.getElementById(`pieza${i}`);
  if (select) {
    select.addEventListener("change", mostrarImagenes);
  }
}
