//CAMBIO DE PIEZAS E INPUTS SEGUN MODELOS

document.addEventListener("DOMContentLoaded", function () {
  const modeloSelect = document.getElementById("modelo");

  //ya carga la funcion apenas abre la pagina
  actualizarPiezasSegunModelo();

  // Escuchar el cambio en el selector de modelo
  modeloSelect.addEventListener("change", actualizarPiezasSegunModelo);

  function actualizarPiezasSegunModelo() {
    const modeloSeleccionado = modeloSelect.value;
    let piezasAMostrar;
    let materialesAura = new Set();
    let materialesBianca = new Set();
    let materialesNora = new Set();
    let materialesLuna = new Set();
    let materialesVera = new Set();

    switch (modeloSeleccionado) {
      case "Aura":
        piezasAMostrar = piezasAura;
        piezasAura.forEach((pieza) => {
          if (pieza.price) {
            pieza.price.forEach((precio) => {
              materialesAura.add(precio.material);
            });
          }
        });
        break;
      case "Bianca":
        piezasAMostrar = piezasBianca;
        piezasBianca.forEach((pieza) => {
          if (pieza.price) {
            pieza.price.forEach((precio) => {
              materialesBianca.add(precio.material);
            });
          }
        });
        break;
      case "Nora":
        piezasAMostrar = piezasNora;
        piezasNora.forEach((pieza) => {
          if (pieza.price) {
            pieza.price.forEach((precio) => {
              materialesNora.add(precio.material);
            });
          }
        });
        break;
      case "Luna":
        piezasAMostrar = piezasLuna;
        piezasLuna.forEach((pieza) => {
          if (pieza.price) {
            pieza.price.forEach((precio) => {
              materialesLuna.add(precio.material);
            });
          }
        });
        break;
      case "Vera":
        piezasAMostrar = piezasVera;
        piezasVera.forEach((pieza) => {
          if (pieza.price) {
            precio.price.forEach((precio) => {
              materialesVera.add(precio.material);
            });
          }
        });
        break;

      default:
        piezasAMostrar = [];
    }

    /*-------PIEZAS DROPDOWNS Y CATEGORIAS---------*/
    const coleccionPiezas = {
      Aura: piezasAura,
      Bianca: piezasBianca,
      Luna: piezasLuna,
      Nora: piezasNora,
      Vera: piezasVera,
    };

    // Función para actualizar los dropdowns de piezas
    function actualizarPiezasSegunModelo() {
      const modeloSeleccionado = document.getElementById("modelo").value;
      const piezasAMostrar = coleccionPiezas[modeloSeleccionado] || []; // Obtener las piezas del modelo seleccionado
      const categorias = [
        ...new Set(piezasAMostrar.map((pieza) => pieza.categoria)),
      ];
      for (let i = 1; i <= 8; i++) {
        const dropdown = document.getElementById(`pieza${i}`);
        dropdown.innerHTML = "";
        categorias.forEach((categoria) => {
          const optgroup = document.createElement("optgroup");
          optgroup.label = categoria ? categoria.toUpperCase() : "";
          // Filtrar las piezas del modelo seleccionado por categoría
          piezasAMostrar
            .filter((pieza) => pieza.categoria === categoria)
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

    // Escuchar el cambio en el dropdown del modelo
    document
      .getElementById("modelo")
      .addEventListener("change", actualizarPiezasSegunModelo);

    // Cargar las piezas del modelo seleccionado inicialmente (si hay un valor por defecto)
    actualizarPiezasSegunModelo();

    //Con respecto a la SERIE
    const telaDropdown = document.getElementById("tela");
    telaDropdown.innerHTML = ""; // Limpiar las opciones existentes

    if (modeloSeleccionado === "Bianca") {
      // Agregar materiales del modelo
      materialesBianca.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    }
    if (modeloSeleccionado === "Vera") {
      // Agregar materiales del modelo
      materialesVera.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    }
    if (modeloSeleccionado === "Aura") {
      // Agregar materiales del modelo
      materialesAura.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    }
    if (modeloSeleccionado === "Luna") {
      // Agregar materiales del modelo Luna
      materialesLuna.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    }
    if (modeloSeleccionado === "Nora") {
      // Agregar materiales del modelo Nora
      materialesNora.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    }
    const categorySelect = document.getElementById("categorySelect");

    // Define qué categorías se muestran según la SERIE seleccionada
    const categoriasPorSerie = {
      "SERIE 2": ["Capri"],
      "SERIE 3": ["Burberry", "Barbados", "Mystic", "Lino"],
      "SERIE 4": ["Club"],
    };
    const teladiv = document.getElementById("telaDiv");
    telaDropdown.addEventListener("change", function () {
      const serieSeleccionada = telaDropdown.value;
      if (serieSeleccionada === "SERIE 5") {
        teladiv.style.display = "none";
      } else {
        teladiv.style.display = "block";
      }
      // Limpiar opciones actuales de categorySelect
      categorySelect.innerHTML =
        '<option value="">Selecciona una categoría</option>';

      if (categoriasPorSerie[serieSeleccionada]) {
        categoriasPorSerie[serieSeleccionada].forEach((cat) => {
          const option = document.createElement("option");
          option.value = cat;
          option.textContent = cat.toUpperCase();
          categorySelect.appendChild(option);
        });
      }
    });
    // Actualizar las imágenes y el resumen después de cambiar el modelo
    mostrarImagenes();
    generarResumen();
  }
});
