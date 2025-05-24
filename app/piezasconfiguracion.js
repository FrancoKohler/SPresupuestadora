const todasPiezas = [
  ...piezasAura.filter((p) => p.id !== "None"),
  ...piezasBianca.filter((p) => p.id !== "None"),
  ...piezasLuna.filter((p) => p.id !== "None"),
  ...piezasNora.filter((p) => p.id !== "None"),
  ...piezasVera.filter((p) => p.id !== "None"),
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

function mostrarImagenes() {
  const imagenesDiv = document.getElementById("imagenPiezas");
  imagenesDiv.innerHTML = "";
  imagenesDiv.style.position = "relative";
  imagenesDiv.style.transform = "none";
  imagenesDiv.style.transformOrigin = "top-left";
  if (!document.getElementById("lineaAncho")) {
    const lineaAncho = document.createElement("div");
    lineaAncho.id = "lineaAncho";
    lineaAncho.style.position = "absolute";
    lineaAncho.style.height = "1px";
    lineaAncho.style.background = "black";
    lineaAncho.style.top = "-10px";
    lineaAncho.style.left = "0";
    imagenesDiv.appendChild(lineaAncho);
  }

  if (!document.getElementById("lineaProfundidad")) {
    const lineaProfundidad = document.createElement("div");
    lineaProfundidad.id = "lineaProfundidad";
    lineaProfundidad.style.position = "absolute";
    lineaProfundidad.style.width = "1px";
    lineaProfundidad.style.background = "black";
    lineaProfundidad.style.top = "0";
    lineaProfundidad.style.right = "0";
    imagenesDiv.appendChild(lineaProfundidad);
  }
  let currentX = 0;
  let currentY = 0;
  let rotateAfterYutra = false;
  let specialPiece = { x: 0, y: 0, width: 0, height: 0 };
  let totalMedida = 0;
  let cotaProfundidad = 0;

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
    /*-----BIANCA TERMINAL-----*/
    "BIAT110D",
    "BIAT110I",
    "BIAT100D",
    "BIAT100I",
    "BIAT90D",
    "BIAT90I",
    "BIAT80D",
    "BIAT80I",
    /*-----AURA TERMINAL-----*/
    "AURT110D",
    "AURT110I",
    "AURT100D",
    "AURT100I",
    "AURT90D",
    "AURT90I",
    "AURT80D",
    "AURT80I",
  ];

  const brazoId = [
    /*-----VERA BRAZO-----*/
    "VERM11OD",
    "VERM11OI",
    "VERM100D",
    "VERM100I",
    "VERM90D",
    "VERM90I",
    "VERM80D",
    "VERM80I",
    /*-----NORA BRAZO/REPRISA-----*/
    "NORM110DM",
    "NORM110IM",
    "NORM100DM",
    "NORM100IM",
    "NORM110DM",
    "NORM90DM",
    "NORM90IM",
    "NORM80DM",
    "NORM80IM",
    "NORM110D",
    "NORM110I",
    "NORM100D",
    "NORM100I",
    "NORM90D",
    "NORM90I",
    "NORM80D",
    "NORM80I",
    /*-----LUNA BRAZO-----*/
    "PROM100D",
    "PROM100I",
    "PROM80D",
    "PROM80I",
    /*-----BIANCA BRAZO/REPISA-----*/
    "BIAM110DM",
    "BIAM110IM",
    "BIAM100DM",
    "BIAM100IM",
    "BIAM90DM",
    "BIAM90IM",
    "BIAM80DM",
    "BIAM80IM",
    "BIAM110I",
    "BIAM110D",
    "BIAM110I",
    "BIAM100D",
    "BIAM100I",
    "BIAM90D",
    "BIAM90I",
    "BIAM80D",
    "BIAM80I",
    /*-----AURA BRAZO-----*/
    "AURM110D",
    "AURM110I",
    "AURM100D",
    "AURM100I",
    "AURM90D",
    "AURM90I",
    "AURM80D",
    "AURM80I",
  ];
  const cotasDiv = document.getElementById("cotas");
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
    const widthTerminal = 150;
    const widthBrazo = 120;
    let finalWidthToApply = width;

    const isChaiseLongue = chaiseLongueIds.includes(piezaId);
    const isTerminal = terminalId.includes(piezaId);
    const isBrazo = brazoId.includes(piezaId);

    const finalHeight = isChaiseLongue ? heightChaise : height;
    const piezaSeleccionada = todasPiezas.find((p) => p.id === piezaId);
    const medida = piezaSeleccionada?.medida ?? 0;
    const medidap = piezaSeleccionada?.medidap ?? 0;
    if (imageUrl && piezaId !== "None") {
      const imgElement = document.createElement("img");

      if (isChaiseLongue || isBrazo) {
        finalWidthToApply = widthBrazo;
      } else if (isTerminal) {
        finalWidthToApply = widthTerminal;
      }

      imgElement.style.width = `${finalWidthToApply}px`;
      imgElement.style.height = `${finalHeight}px`;
      imgElement.src = imageUrl;
      imgElement.alt = selectedOption.textContent;

      imgElement.style.position = "absolute";
      imgElement.classList.add("img-config");
      imgElement.style.maxWidth = "none";
      imgElement.style.boxSizing = "border-box";

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

              totalMedida += medida;

              rotateAfterYutra = true;
              if (isChaiseLongue) {
                cotaProfundidad = medidap;
              } else {
                cotaProfundidad += medidap;
              }
            } else if (rotateAfterYutra) {
              imgElement.style.transform = "rotate(90deg)";
              imgElement.style.left = `${specialPiece.x}px`;
              imgElement.style.top = `${specialPiece.y + specialPiece.width}px`;

              specialPiece.y += imgRect.width;

              cotaProfundidad += medidap;
            } else {
              // PIEZAS NORMALES (antes de rotar)
              imgElement.style.left = `${currentX}px`;
              imgElement.style.top = `${currentY}px`;

              currentX += imgRect.width;

              totalMedida += medida;
            }
            if (isChaiseLongue) {
              cotaProfundidad = medidap;
            } else if (!rotateAfterYutra) {
              cotaProfundidad = Math.max(cotaProfundidad, medidap);
            } else {
              cotaProfundidad += medidap;
            }

            if (specialPieces.includes(piezaId)) {
              rotateAfterYutra = true;
            }
            resolve();
          }, 50);
        };
      });

      promises.push(imageLoadPromise);
    }
  }

  Promise.all(promises).then(() => {
    cotasDiv.innerHTML = `
      <p id="ancho">${totalMedida} cm</p>
      <p class="profundidad" id="profundidad"> ${cotaProfundidad} cm</p>
    `;

    /*    const lineaAncho = document.getElementById("lineaAncho");
    const lineaProfundidad = document.getElementById("lineaProfundidad");

    
    lineaAncho.style.width = `${totalMedida}px`;
    lineaAncho.style.bottom = "0";
    lineaAncho.style.left = "0";

    lineaProfundidad.style.height = `${cotaProfundidad}px`;
    lineaProfundidad.style.right = "0";
    lineaProfundidad.style.top = "0"; */
  });
}
