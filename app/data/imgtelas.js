document.addEventListener("DOMContentLoaded", function () {
  const categorySelect = document.getElementById("categorySelect");
  const selectTelaContainer = document.getElementById("selectTelaContainer");
  const divReferencia = document.getElementById("telaReferencia");
  const telas = {
    Burberry: [
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/BURBERRY/BURBERRY01.svg",
        nombre: "BURBERRY01",
        id: "BURBERRY01",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/BURBERRY/BURBERRY02.svg",
        nombre: "BURBERRY02",
        id: "BURBERRY02",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/BURBERRY/BURBERRY03.svg",
        nombre: "BURBERRY03",
        id: "BURBERRY03",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/BURBERRY/BURBERRY04.svg",
        nombre: "BURBERRY04",
        id: "BURBERRY04",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/BURBERRY/BURBERRY05.svg",
        nombre: "BURBERRY05",
        id: "BURBERRY05",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/BURBERRY/BURBERRY06.svg",
        nombre: "BURBERRY06",
        id: "BURBERRY06",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/BURBERRY/BURBERRY07.svg",
        nombre: "BURBERRY07",
        id: "BURBERRY07",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/BURBERRY/BURBERRY08.svg",
        nombre: "BURBERRY08",
        id: "BURBERRY08",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/BURBERRY/BURBERRY09.svg",
        nombre: "BURBERRY09",
        id: "BURBERRY09",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/BURBERRY/BURBERRY12.svg",
        nombre: "BURBERRY12",
        id: "BURBERRY12",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/BURBERRY/BURBERRY13.svg",
        nombre: "BURBERRY13",
        id: "BURBERRY13",
      },
    ],
    Capri: [
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/CAPRI/CAPRI01.svg",
        nombre: "CAPRI01",
        id: "CAPRI01",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/CAPRI/CAPRI04.svg",
        nombre: "CAPRI04",
        id: "CAPRI04",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/CAPRI/CAPRI05.svg",
        nombre: "CAPRI05",
        id: "CAPRI05",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/CAPRI/CAPRI06.svg",
        nombre: "CAPRI06",
        id: "CAPRI06",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/CAPRI/CAPRI07.svg",
        nombre: "CAPRI07",
        id: "CAPRI07",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/CAPRI/CAPRI08.svg",
        nombre: "CAPRI08",
        id: "CAPRI08",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/CAPRI/CAPRI10.svg",
        nombre: "CAPRI10",
        id: "CAPRI10",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/CAPRI/CAPRI12.svg",
        nombre: "CAPRI12",
        id: "CAPRI12",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/CAPRI/CAPRI14.svg",
        nombre: "CAPRI14",
        id: "CAPRI14",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/CAPRI/CAPRI18.svg",
        nombre: "CAPRI18",
        id: "CAPRI18",
      },
    ],
    Club: [
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/CLUB/CLUB05.svg",
        nombre: "CLUB05",
        id: "CLUB05",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/CLUB/CLUB07.svg",
        nombre: "CLUB07",
        id: "CLUB07",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/CLUB/CLUB20.svg",
        nombre: "CLUB20",
        id: "CLUB20",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/CLUB/CLUB51.svg",
        nombre: "CLUB51",
        id: "CLUB51",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/CLUB/CLUB52.svg",
        nombre: "CLUB52",
        id: "CLUB52",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/CLUB/CLUB54.svg",
        nombre: "CLUB54",
        id: "CLUB54",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/CLUB/CLUB129.svg",
        nombre: "CLUB129",
        id: "CLUB129",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/CLUB/CLUB132.svg",
        nombre: "CLUB132",
        id: "CLUB132",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/CLUB/CLUB142.svg",
        nombre: "CLUB142",
        id: "CLUB142",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/CLUB/CLUB171.svg",
        nombre: "CLUB171",
        id: "CLUB171",
      },
    ],
    Barbados: [
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/BARBADOS/BARBADOS01.jpg",
        nombre: "BARBADOS01",
        id: "BARBADOS01",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/BARBADOS/BARBADOS02.jpg",
        nombre: "BARBADOS02",
        id: "BARBADOS02",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/BARBADOS/BARBADOS03.jpg",
        nombre: "BARBADOS03",
        id: "BARBADOS03",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/BARBADOS/BARBADOS05.jpg",
        nombre: "BARBADOS05",
        id: "BARBADOS05",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/BARBADOS/BARBADOS06.jpg",
        nombre: "BARBADOS06",
        id: "BARBADOS06",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/BARBADOS/BARBADOS08.jpg",
        nombre: "BARBADOS08",
        id: "BARBADOS08",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/BARBADOS/BARBADOS09.jpg",
        nombre: "BARBADOS09",
        id: "BARBADOS09",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/BARBADOS/BARBADOS10.jpg",
        nombre: "BARBADOS10",
        id: "BARBADOS10",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/BARBADOS/BARBADOS19.jpg",
        nombre: "BARBADOS19",
        id: "BARBADOS19",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/BARBADOS/BARBADOS20.jpg",
        nombre: "BARBADOS20",
        id: "BARBADOS20",
      },
    ],
    Lino: [
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/LINO/LINO008.png",
        nombre: "LINO008",
        id: "LINO008",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/LINO/LINO028.png",
        nombre: "LINO028",
        id: "LINO028",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/LINO/LINO122.png",
        nombre: "LINO122",
        id: "LINO122",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/LINO/LINO124.png",
        nombre: "LINO124",
        id: "LINO124",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/LINO/LINO125.png",
        nombre: "LINO125",
        id: "LINO125",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/LINO/LINO126.png",
        nombre: "LINO126",
        id: "LINO126",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/LINO/LINO127.png",
        nombre: "LINO127",
        id: "LINO127",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/LINO/LINO142.png",
        nombre: "LINO142",
        id: "LINO142",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/LINO/LINO542.png",
        nombre: "LINO542",
        id: "LINO542",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/LINO/LINO638.png",
        nombre: "LINO638",
        id: "LINO638",
      },
    ],
    Mystic: [
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/MYSTIC/MYSTIC03.jpg",
        nombre: "MYSTIC03",
        id: "MYSTIC03",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/MYSTIC/MYSTIC12.jpg",
        nombre: "MYSTIC12",
        id: "MYSTIC12",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/MYSTIC/MYSTIC69.jpg",
        nombre: "MYSTIC69",
        id: "MYSTIC69",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/MYSTIC/MYSTIC177.jpg",
        nombre: "MYSTIC177",
        id: "MYSTIC177",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/MYSTIC/MYSTIC252.jpg",
        nombre: "MYSTIC252",
        id: "MYSTIC252",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/MYSTIC/MYSTIC324.jpg",
        nombre: "MYSTIC324",
        id: "MYSTIC324",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/MYSTIC/MYSTIC546.jpg",
        nombre: "MYSTIC546",
        id: "MYSTIC546",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/MYSTIC/MYSTIC551.jpg",
        nombre: "MYSTIC551",
        id: "MYSTIC551",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/MYSTIC/MYSTIC559.jpg",
        nombre: "MYSTIC559",
        id: "MYSTIC559",
      },
      {
        img: "https://francokohler.github.io/SPresupuestadora/assets/TELAS/MYSTIC/MYSTIC603.jpg",
        nombre: "MYSTIC603",
        id: "MYSTIC603",
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
