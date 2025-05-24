document.addEventListener("DOMContentLoaded", function () {
  const BASE_URL =
    "https://francokohler.github.io/SPresupuestadora/assets/TELAS/";
  const categorySelect = document.getElementById("categorySelect");
  const selectTelaContainer = document.getElementById("selectTelaContainer");
  const divReferencia = document.getElementById("telaReferencia");
  const telas = {
    Burberry: [
      {
        img: "BURBERRY/BURBERRY01.svg",
        nombre: "BURBERRY01",
        id: "BURBERRY01",
      },
      {
        img: "BURBERRY/BURBERRY02.svg",
        nombre: "BURBERRY02",
        id: "BURBERRY02",
      },
      {
        img: "BURBERRY/BURBERRY03.svg",
        nombre: "BURBERRY03",
        id: "BURBERRY03",
      },
      {
        img: "BURBERRY/BURBERRY04.svg",
        nombre: "BURBERRY04",
        id: "BURBERRY04",
      },
      {
        img: "BURBERRY/BURBERRY05.svg",
        nombre: "BURBERRY05",
        id: "BURBERRY05",
      },
      {
        img: "BURBERRY/BURBERRY06.svg",
        nombre: "BURBERRY06",
        id: "BURBERRY06",
      },
      {
        img: "BURBERRY/BURBERRY07.svg",
        nombre: "BURBERRY07",
        id: "BURBERRY07",
      },
      {
        img: "BURBERRY/BURBERRY08.svg",
        nombre: "BURBERRY08",
        id: "BURBERRY08",
      },
      {
        img: "BURBERRY/BURBERRY09.svg",
        nombre: "BURBERRY09",
        id: "BURBERRY09",
      },
      {
        img: "BURBERRY/BURBERRY12.svg",
        nombre: "BURBERRY12",
        id: "BURBERRY12",
      },
      {
        img: "BURBERRY/BURBERRY13.svg",
        nombre: "BURBERRY13",
        id: "BURBERRY13",
      },
    ],
    Capri: [
      { img: "CAPRI/CAPRI01.svg", nombre: "CAPRI01", id: "CAPRI01" },
      { img: "CAPRI/CAPRI04.svg", nombre: "CAPRI04", id: "CAPRI04" },
      { img: "CAPRI/CAPRI05.svg", nombre: "CAPRI05", id: "CAPRI05" },
      { img: "CAPRI/CAPRI06.svg", nombre: "CAPRI06", id: "CAPRI06" },
      { img: "CAPRI/CAPRI07.svg", nombre: "CAPRI07", id: "CAPRI07" },
      { img: "CAPRI/CAPRI08.svg", nombre: "CAPRI08", id: "CAPRI08" },
      { img: "CAPRI/CAPRI10.svg", nombre: "CAPRI10", id: "CAPRI10" },
      { img: "CAPRI/CAPRI12.svg", nombre: "CAPRI12", id: "CAPRI12" },
      { img: "CAPRI/CAPRI14.svg", nombre: "CAPRI14", id: "CAPRI14" },
      { img: "CAPRI/CAPRI18.svg", nombre: "CAPRI18", id: "CAPRI18" },
    ],
    Club: [
      { img: "CLUB/CLUB05.svg", nombre: "CLUB05", id: "CLUB05" },
      { img: "CLUB/CLUB07.svg", nombre: "CLUB07", id: "CLUB07" },
      { img: "CLUB/CLUB20.svg", nombre: "CLUB20", id: "CLUB20" },
      { img: "CLUB/CLUB51.svg", nombre: "CLUB51", id: "CLUB51" },
      { img: "CLUB/CLUB52.svg", nombre: "CLUB52", id: "CLUB52" },
      { img: "CLUB/CLUB54.svg", nombre: "CLUB54", id: "CLUB54" },
      { img: "CLUB/CLUB129.svg", nombre: "CLUB129", id: "CLUB129" },
      { img: "CLUB/CLUB132.svg", nombre: "CLUB132", id: "CLUB132" },
      { img: "CLUB/CLUB142.svg", nombre: "CLUB142", id: "CLUB142" },
      { img: "CLUB/CLUB171.svg", nombre: "CLUB171", id: "CLUB171" },
    ],
    Barbados: [
      {
        img: "BARBADOS/BARBADOS01.jpg",
        nombre: "BARBADOS01",
        id: "BARBADOS01",
      },
      {
        img: "BARBADOS/BARBADOS02.jpg",
        nombre: "BARBADOS02",
        id: "BARBADOS02",
      },
      {
        img: "BARBADOS/BARBADOS03.jpg",
        nombre: "BARBADOS03",
        id: "BARBADOS03",
      },
      {
        img: "BARBADOS/BARBADOS05.jpg",
        nombre: "BARBADOS05",
        id: "BARBADOS05",
      },
      {
        img: "BARBADOS/BARBADOS06.jpg",
        nombre: "BARBADOS06",
        id: "BARBADOS06",
      },
      {
        img: "BARBADOS/BARBADOS08.jpg",
        nombre: "BARBADOS08",
        id: "BARBADOS08",
      },
      {
        img: "BARBADOS/BARBADOS09.jpg",
        nombre: "BARBADOS09",
        id: "BARBADOS09",
      },
      {
        img: "BARBADOS/BARBADOS10.jpg",
        nombre: "BARBADOS10",
        id: "BARBADOS10",
      },
      {
        img: "BARBADOS/BARBADOS19.jpg",
        nombre: "BARBADOS19",
        id: "BARBADOS19",
      },
      {
        img: "BARBADOS/BARBADOS20.jpg",
        nombre: "BARBADOS20",
        id: "BARBADOS20",
      },
    ],
    Lino: [
      { img: "LINO/LINO008.png", nombre: "LINO008", id: "LINO008" },
      { img: "LINO/LINO028.png", nombre: "LINO028", id: "LINO028" },
      { img: "LINO/LINO122.png", nombre: "LINO122", id: "LINO122" },
      { img: "LINO/LINO124.png", nombre: "LINO124", id: "LINO124" },
      { img: "LINO/LINO125.png", nombre: "LINO125", id: "LINO125" },
      { img: "LINO/LINO126.png", nombre: "LINO126", id: "LINO126" },
      { img: "LINO/LINO127.png", nombre: "LINO127", id: "LINO127" },
      { img: "LINO/LINO142.png", nombre: "LINO142", id: "LINO142" },
      { img: "LINO/LINO542.png", nombre: "LINO542", id: "LINO542" },
      { img: "LINO/LINO638.png", nombre: "LINO638", id: "LINO638" },
    ],
    Mystic: [
      { img: "MYSTIC/MYSTIC03.jpg", nombre: "MYSTIC03", id: "MYSTIC03" },
      { img: "MYSTIC/MYSTIC12.jpg", nombre: "MYSTIC12", id: "MYSTIC12" },
      { img: "MYSTIC/MYSTIC69.jpg", nombre: "MYSTIC69", id: "MYSTIC69" },
      { img: "MYSTIC/MYSTIC177.jpg", nombre: "MYSTIC177", id: "MYSTIC177" },
      { img: "MYSTIC/MYSTIC252.jpg", nombre: "MYSTIC252", id: "MYSTIC252" },
      { img: "MYSTIC/MYSTIC324.jpg", nombre: "MYSTIC324", id: "MYSTIC324" },
      { img: "MYSTIC/MYSTIC546.jpg", nombre: "MYSTIC546", id: "MYSTIC546" },
      { img: "MYSTIC/MYSTIC551.jpg", nombre: "MYSTIC551", id: "MYSTIC551" },
      { img: "MYSTIC/MYSTIC559.jpg", nombre: "MYSTIC559", id: "MYSTIC559" },
      { img: "MYSTIC/MYSTIC603.jpg", nombre: "MYSTIC603", id: "MYSTIC603" },
    ],
  };

  function actualizarImgSegunTela() {
    const selectedCategory = categorySelect.value;
    const selectedOption = selectTelaContainer.value;

    if (!selectedCategory || !selectedOption) return;

    const selectedTela = telas[selectedCategory].find(
      (tela) => tela.nombre === selectedOption
    );

    if (!divReferencia) {
      console.error("divReferencia element not found!");
      return;
    }

    divReferencia.innerHTML = "";

    if (selectedTela) {
      const newImg = document.createElement("img");
      newImg.src = BASE_URL + selectedTela.img;
      newImg.alt = selectedTela.name;
      newImg.classList.add("img-tela");
      newImg.id = "telaReferenciaImg";
      divReferencia.appendChild(newImg);
    }
  }

  categorySelect.addEventListener("change", function () {
    const selectedCategory = categorySelect.value;
    selectTelaContainer.innerHTML = "";

    if (selectedCategory && telas[selectedCategory]) {
      telas[selectedCategory].forEach((tela) => {
        const option = document.createElement("option");
        option.value = tela.nombre;
        option.textContent = tela.nombre;
        selectTelaContainer.appendChild(option);
      });

      selectTelaContainer.value = telas[selectedCategory][0].nombre;
      actualizarImgSegunTela();
    }
  });

  selectTelaContainer.addEventListener("change", actualizarImgSegunTela);

  // Inicializar con Burberry por defecto
  categorySelect.value = "Burberry";
  categorySelect.dispatchEvent(new Event("change"));

  function inicializarTela() {
    selectTelaContainer.value = "BURBERRY01";
    actualizarImgSegunTela();
  }

  inicializarTela();
});
