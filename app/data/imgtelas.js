document.addEventListener("DOMContentLoaded", function () {
  const categorySelect = document.getElementById("categorySelect");
  const selectTelaContainer = document.getElementById("selectTelaContainer");
  const divReferencia = document.getElementById("telaReferencia");
  const telas = {
    Burberry: [
      {
        img: "assets/TELAS/BURBERRY/BURBERRY01.svg",
        nombre: "BURBERRY01",
        id: "BURBERRY01",
      },
      {
        img: "assets/TELAS/BURBERRY/BURBERRY02.svg",
        nombre: "BURBERRY02",
        id: "BURBERRY02",
      },
      {
        img: "assets/TELAS/BURBERRY/BURBERRY03.svg",
        nombre: "BURBERRY03",
        id: "BURBERRY03",
      },
      {
        img: "assets/TELAS/BURBERRY/BURBERRY04.svg",
        nombre: "BURBERRY04",
        id: "BURBERRY04",
      },
      {
        img: "assets/TELAS/BURBERRY/BURBERRY05.svg",
        nombre: "BURBERRY05",
        id: "BURBERRY05",
      },
      {
        img: "assets/TELAS/BURBERRY/BURBERRY06.svg",
        nombre: "BURBERRY06",
        id: "BURBERRY06",
      },
      {
        img: "assets/TELAS/BURBERRY/BURBERRY07.svg",
        nombre: "BURBERRY07",
        id: "BURBERRY07",
      },
      {
        img: "assets/TELAS/BURBERRY/BURBERRY08.svg",
        nombre: "BURBERRY08",
        id: "BURBERRY08",
      },
      {
        img: "assets/TELAS/BURBERRY/BURBERRY09.svg",
        nombre: "BURBERRY09",
        id: "BURBERRY09",
      },
      {
        img: "assets/TELAS/BURBERRY/BURBERRY12.svg",
        nombre: "BURBERRY12",
        id: "BURBERRY12",
      },
      {
        img: "assets/TELAS/BURBERRY/BURBERRY13.svg",
        nombre: "BURBERRY13",
        id: "BURBERRY13",
      },
    ],
    Capri: [
      {
        img: "assets/TELAS/CAPRI/CAPRI01.svg",
        nombre: "CAPRI01",
        id: "CAPRI01",
      },
      {
        img: "assets/TELAS/CAPRI/CAPRI04.svg",
        nombre: "CAPRI04",
        id: "CAPRI04",
      },
      {
        img: "assets/TELAS/CAPRI/CAPRI05.svg",
        nombre: "CAPRI05",
        id: "CAPRI05",
      },
      {
        img: "assets/TELAS/CAPRI/CAPRI06.svg",
        nombre: "CAPRI06",
        id: "CAPRI06",
      },
      {
        img: "assets/TELAS/CAPRI/CAPRI07.svg",
        nombre: "CAPRI07",
        id: "CAPRI07",
      },
      {
        img: "assets/TELAS/CAPRI/CAPRI08.svg",
        nombre: "CAPRI08",
        id: "CAPRI08",
      },
      {
        img: "assets/TELAS/CAPRI/CAPRI10.svg",
        nombre: "CAPRI10",
        id: "CAPRI10",
      },
      {
        img: "assets/TELAS/CAPRI/CAPRI12.svg",
        nombre: "CAPRI12",
        id: "CAPRI12",
      },
      {
        img: "assets/TELAS/CAPRI/CAPRI14.svg",
        nombre: "CAPRI14",
        id: "CAPRI14",
      },
      {
        img: "assets/TELAS/CAPRI/CAPRI18.svg",
        nombre: "CAPRI18",
        id: "CAPRI18",
      },
    ],
    Club: [
      { img: "assets/TELAS/CLUB/CLUB05.svg", nombre: "CLUB05", id: "CLUB05" },
      { img: "assets/TELAS/CLUB/CLUB07.svg", nombre: "CLUB07", id: "CLUB07" },
      { img: "assets/TELAS/CLUB/CLUB20.svg", nombre: "CLUB20", id: "CLUB20" },
      { img: "assets/TELAS/CLUB/CLUB51.svg", nombre: "CLUB51", id: "CLUB51" },
      { img: "assets/TELAS/CLUB/CLUB52.svg", nombre: "CLUB52", id: "CLUB52" },
      { img: "assets/TELAS/CLUB/CLUB54.svg", nombre: "CLUB54", id: "CLUB54" },
      {
        img: "assets/TELAS/CLUB/CLUB129.svg",
        nombre: "CLUB129",
        id: "CLUB129",
      },
      {
        img: "assets/TELAS/CLUB/CLUB132.svg",
        nombre: "CLUB132",
        id: "CLUB132",
      },
      {
        img: "assets/TELAS/CLUB/CLUB142.svg",
        nombre: "CLUB142",
        id: "CLUB142",
      },
      {
        img: "assets/TELAS/CLUB/CLUB171.svg",
        nombre: "CLUB171",
        id: "CLUB171",
      },
    ],
  };
  function actualizarImgSegunTela() {
    const selectedCategory = categorySelect.value;
    const selectedOption = selectTelaContainer.value;

    if (!selectedCategory || !selectedOption) return;

    const selectedTela = telas[selectedCategory].find(
      (tela) => tela.nombre === selectedOption
    );

    // Verificar si el div existe antes de modificarlo
    if (!divReferencia) {
      console.error("divReferencia element not found!");
      return; // Salir si el div no existe
    }

    divReferencia.innerHTML = ""; // Limpiar la imagen previa

    if (selectedTela) {
      const newImg = document.createElement("img");
      newImg.src = selectedTela.img;
      newImg.alt = selectedTela.name;
      newImg.classList.add("img-tela");
      divReferencia.appendChild(newImg);
    }
  }

  // Evento que se activa cuando cambia la categoría seleccionada
  categorySelect.addEventListener("change", function () {
    const selectedCategory = categorySelect.value;
    selectTelaContainer.innerHTML = ""; // Limpiar las opciones previas

    if (selectedCategory && telas[selectedCategory]) {
      telas[selectedCategory].forEach((tela, index) => {
        const option = document.createElement("option");
        option.value = tela.nombre;
        option.textContent = tela.nombre;
        selectTelaContainer.appendChild(option);
      });

      selectTelaContainer.value = telas[selectedCategory][0].nombre;
      actualizarImgSegunTela(); // Actualizar la imagen con la primera tela
    }
  });
  //cambios de telas segun seleccion
  selectTelaContainer.addEventListener("change", actualizarImgSegunTela);

  //BURBERRY POR DFTCO
  categorySelect.value = "Burberry";
  categorySelect.dispatchEvent(new Event("change"));

  function inicializarTela() {
    selectTelaContainer.value = "BURBERRY01";
    actualizarImgSegunTela();
  }

  inicializarTela();
});
