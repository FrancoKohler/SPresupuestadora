document.addEventListener("DOMContentLoaded", function () {
  const modeloSelect   = document.getElementById("modelo");
  const telaDropdown   = document.getElementById("tela");          // SERIE (lo gestiona imgtelas.js)
  const categorySelect = document.getElementById("categorySelect"); // Categoría (lo gestiona imgtelas.js)

  // Colecciones de piezas por modelo (ya existen en tu proyecto)
  const coleccionPiezas = {
    Aura:   piezasAura,
    Bianca: piezasBianca,
    Luna:   piezasLuna,
    Nora:   piezasNora,
    Vera:   piezasVera,
  };

  // ---- UTILIDADES SOLO PARA PIEZAS ----
  function actualizarPiezasDropdown(piezas) {
    const categorias = [...new Set(piezas.map((p) => p.categoria))];
    for (let i = 1; i <= 8; i++) {
      const dropdown = document.getElementById(`pieza${i}`);
      if (!dropdown) continue;
      dropdown.innerHTML = "";
      categorias.forEach((categoria) => {
        const optgroup = document.createElement("optgroup");
        optgroup.label = categoria?.toUpperCase() || "";
        piezas
          .filter((p) => p.categoria === categoria)
          .forEach((pieza) => {
            const option = document.createElement("option");
            option.value = pieza.id;
            option.textContent = pieza.title.toUpperCase();
            option.dataset.price = JSON.stringify(pieza.price);
            option.dataset.imageUrl = pieza.imageUrl;
            optgroup.appendChild(option);
          });
        dropdown.appendChild(optgroup);
      });
    }
  }

  // **IMPORTANTE**: NO tocamos telas/series/categorías aquí.
  // - NO poblar telaDropdown (SERIE) aquí.
  // - NO escribir en categorySelect aquí.
  // - NO cambiar estilos de bloques de tela aquí.

  function actualizarVistaModelo() {
    const modeloSeleccionado = modeloSelect.value;
    const piezas = coleccionPiezas[modeloSeleccionado] || [];

    // Actualizar SOLO piezas
    actualizarPiezasDropdown(piezas);

    // Delegar SERIES/CATEGORÍAS/IMÁGENES a imgtelas.js:
    // Disparar "change" en #modelo para que imgtelas.js rellene las series y
    // aplique el mapa correcto (y muestre/oculte el bloque teladiv por clases).
    const evt = new Event("change", { bubbles: true });
    modeloSelect.dispatchEvent(evt);

    // Si deseas, puedes llamar a tus otras funciones de visualización/resumen:
    if (typeof mostrarImagenes === "function") mostrarImagenes();
    if (typeof generarResumen === "function") generarResumen();
  }

  // Eventos (SOLO modelo aquí)
  modeloSelect.addEventListener("change", actualizarVistaModelo);

  // Inicialización
  actualizarVistaModelo();
});
