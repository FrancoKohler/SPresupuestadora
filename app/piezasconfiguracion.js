/* =========================================================
   P I E Z A S   +   C O T A S   V I V A S  (drop-in total)
   ========================================================= */

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
  
  /* =========================
     COTAS "VIVAS" – UTILIDAD
     ========================= */
  
  function ensureCotasElements(imagenesDiv) {
    let lineaAncho = imagenesDiv.querySelector("#lineaAncho");
    if (!lineaAncho) {
      lineaAncho = document.createElement("div");
      lineaAncho.id = "lineaAncho";
      lineaAncho.style.position = "absolute";
      lineaAncho.style.height = "1px";
      lineaAncho.style.background = "#000";
      lineaAncho.style.zIndex = "2";
      imagenesDiv.appendChild(lineaAncho);
    }
  
    let lineaProfundidad = imagenesDiv.querySelector("#lineaProfundidad");
    if (!lineaProfundidad) {
      lineaProfundidad = document.createElement("div");
      lineaProfundidad.id = "lineaProfundidad";
      lineaProfundidad.style.position = "absolute";
      lineaProfundidad.style.width = "1px";
      lineaProfundidad.style.background = "#000";
      lineaProfundidad.style.zIndex = "2";
      imagenesDiv.appendChild(lineaProfundidad);
    }
  
    let etiquetaAncho = imagenesDiv.querySelector("#ancho");
    if (!etiquetaAncho) {
      etiquetaAncho = document.createElement("p");
      etiquetaAncho.id = "ancho";
      etiquetaAncho.style.position = "absolute";
      etiquetaAncho.style.fontFamily = "Inter, sans-serif";
      etiquetaAncho.style.fontSize = "13px";
      etiquetaAncho.style.fontWeight = "600";
      etiquetaAncho.style.color = "#000";
      etiquetaAncho.style.background = "#fff";
      etiquetaAncho.style.padding = "2px 6px";
      etiquetaAncho.style.borderRadius = "6px";
      etiquetaAncho.style.whiteSpace = "nowrap";
      etiquetaAncho.style.pointerEvents = "none";
      etiquetaAncho.style.zIndex = "5";
      imagenesDiv.appendChild(etiquetaAncho);
    }
  
    let etiquetaProfundidad = imagenesDiv.querySelector("#profundidad");
    if (!etiquetaProfundidad) {
      etiquetaProfundidad = document.createElement("p");
      etiquetaProfundidad.id = "profundidad";
      etiquetaProfundidad.style.position = "absolute";
      etiquetaProfundidad.style.fontFamily = "Inter, sans-serif";
      etiquetaProfundidad.style.fontSize = "13px";
      etiquetaProfundidad.style.fontWeight = "600";
      etiquetaProfundidad.style.color = "#000";
      etiquetaProfundidad.style.background = "#fff";
      etiquetaProfundidad.style.padding = "2px 6px";
      etiquetaProfundidad.style.borderRadius = "6px";
      etiquetaProfundidad.style.whiteSpace = "nowrap";
      etiquetaProfundidad.style.pointerEvents = "none";
      etiquetaProfundidad.style.zIndex = "5";
      imagenesDiv.appendChild(etiquetaProfundidad);
    }
  
    return { lineaAncho, lineaProfundidad, etiquetaAncho, etiquetaProfundidad };
  }
  
  function posicionarCotas(imagenesDiv, totalMedidaCm, profundidadCm) {
    const imgs = Array.from(imagenesDiv.querySelectorAll(".img-config"));
    const contRect = imagenesDiv.getBoundingClientRect();
  
    const { lineaAncho, lineaProfundidad, etiquetaAncho, etiquetaProfundidad } =
      ensureCotasElements(imagenesDiv);
  
    if (!imgs.length) {
      lineaAncho.style.width = "0px";
      lineaProfundidad.style.height = "0px";
      etiquetaAncho.textContent = "";
      etiquetaProfundidad.textContent = "";
      return;
    }
  
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
  
  /* ==========================================================
     R E N D E R   D E   I M Á G E N E S   +   C O T A S
     ========================================================== */
  
  function mostrarImagenes() {
    const imagenesDiv = document.getElementById("imagenPiezas");
    // Limpia SOLO las imágenes anteriores, no borres cotas ni etiquetas
    Array.from(imagenesDiv.querySelectorAll(".img-config")).forEach(el => el.remove());
  
    imagenesDiv.style.position = "relative";
    imagenesDiv.style.transform = "none";
    imagenesDiv.style.transformOrigin = "top-left";
  
    // Asegura que las cotas existen (no se borran entre renders)
    ensureCotasElements(imagenesDiv);
  
    let currentX = 0;
    let currentY = 0;
    let rotateAfterYutra = false;
    let specialPiece = { x: 0, y: 0, width: 0, height: 0 };
    let totalMedida = 0;
    let cotaProfundidad = 0;
  
    const specialPieces = ["BIAR108S", "VERR108S", "AURR108S", "NORR108S", "PROR105S"];
  
    const chaiseLongueIds = [
      /*-----VERA CHAISE-----*/ "VERC110D","VERC110I","VERC100D","VERC100I","VERC90D","VERC90I","VERC80D","VERC80I",
      /*-----NORA CHAISE-----*/ "NORC110D","NORC110I","NORC100D","NORC100I","NORC90D","NORC90I","NORC80D","NORC80I",
      /*-----LUNA CHAISE-----*/ "PROC100D","PROC100I","PROC80D","PROC80I",
      /*-----BIANCA CHAISE---*/ "BIAC110D","BIAC110I","BIAC100D","BIAC100I","BIAC90D","BIAC90I","BIAC80D","BIAC80I",
      /*-----AURA CHAISE-----*/ "AURC110D","AURC110I","AURC100D","AURC100I","AURC90D","AURC90I","AURC80D","AURC80I",
    ];
  
    const terminalId = [
      /*-----VERA TERMINAL-----*/ "VERT110D","VERT110I","VERT100D","VERT100I","VERT90D","VERT90I","VERT80D","VERT80I",
      /*-----NORA TERMINAL-----*/ "NORT110D","NORT110I","NORT100D","NORT100I","NORT90D","NORT90I","NORT80D","NORT80I",
      /*-----LUNA TERMINAL-----*/ "PROT100D","PROT100I","PROT80D","PROT80I",
      /*-----BIANCA TERMINAL---*/ "BIAT110D","BIAT110I","BIAT100D","BIAT100I","BIAT90D","BIAT90I","BIAT80D","BIAT80I",
      /*-----AURA TERMINAL-----*/ "AURT110D","AURT110I","AURT100D","AURT100I","AURT90D","AURT90I","AURT80D","AURT80I",
    ];
  
    const brazoId = [
      /*-----VERA BRAZO-----*/ "VERM11OD","VERM11OI","VERM100D","VERM100I","VERM90D","VERM90I","VERM80D","VERM80I",
      /*-----NORA BRAZO-----*/ "NORM110DM","NORM110IM","NORM100DM","NORM100IM","NORM110DM","NORM90DM","NORM90IM","NORM80DM","NORM80IM",
      "NORM110D","NORM110I","NORM100D","NORM100I","NORM90D","NORM90I","NORM80D","NORM80I",
      /*-----LUNA BRAZO-----*/ "PROM100D","PROM100I","PROM80D","PROM80I",
      /*---BIANCA BRAZO-----*/ "BIAM110DM","BIAM110IM","BIAM100DM","BIAM100IM","BIAM90DM","BIAM90IM","BIAM80DM","BIAM80IM",
      "BIAM110I","BIAM110D","BIAM110I","BIAM100D","BIAM100I","BIAM90D","BIAM90I","BIAM80D","BIAM80I",
      /*-----AURA BRAZO-----*/ "AURM110D","AURM110I","AURM100D","AURM100I","AURM90D","AURM90I","AURM80D","AURM80I",
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
              let yaSumoProfundidad = false;
  
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
  
              } else if (rotateAfterYutra) {
                imgElement.style.transform = "rotate(90deg)";
                imgElement.style.left = `${specialPiece.x}px`;
                imgElement.style.top = `${specialPiece.y + specialPiece.width}px`;
  
                specialPiece.y += imgRect.width;
  
                totalMedida += medida;
                cotaProfundidad += medidap;
                yaSumoProfundidad = true;
  
              } else {
                // PIEZAS NORMALES (antes de rotar)
                imgElement.style.left = `${currentX}px`;
                imgElement.style.top = `${currentY}px`;
  
                currentX += imgRect.width;
                totalMedida += medida;
              }
  
              if (!yaSumoProfundidad) {
                if (isChaiseLongue) {
                  cotaProfundidad = medidap;
                } else if (!rotateAfterYutra) {
                  cotaProfundidad = Math.max(cotaProfundidad, medidap);
                } else if (!specialPieces.includes(piezaId)) {
                  cotaProfundidad += medidap;
                }
              }
  
              resolve();
            }, 50);
          };
        });
  
        promises.push(imageLoadPromise);
      }
    }
  
    Promise.all(promises).then(() => {
      // Guarda últimos valores para recalcular en resize
      window.__ULTIMO_TOTAL_MEDIDA_CM__ = totalMedida;
      window.__ULTIMA_PROFUNDIDAD_CM__ = cotaProfundidad;
  
      // Reposicionar cotas (líneas + etiquetas) DENTRO de #imagenPiezas
      posicionarCotas(imagenesDiv, totalMedida, cotaProfundidad);
    });
  }
  
  /* Reposicionar cotas en resize usando los últimos valores */
  (function attachResizeOnce(){
    if (window.__COTAS_RESIZE_ATTACHED__) return;
    window.__COTAS_RESIZE_ATTACHED__ = true;
    window.addEventListener("resize", () => {
      const imagenesDiv = document.getElementById("imagenPiezas");
      if (!imagenesDiv) return;
      if (window.__ULTIMO_TOTAL_MEDIDA_CM__ != null && window.__ULTIMA_PROFUNDIDAD_CM__ != null) {
        posicionarCotas(imagenesDiv, window.__ULTIMO_TOTAL_MEDIDA_CM__, window.__ULTIMA_PROFUNDIDAD_CM__);
      }
    });
  })();
  