const modeloImg = {
  Bianca: [
    {
      img: "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIANCA.svg",
    },
  ],
};

document.addEventListener("DOMContentLoaded", function () {
  const modeloSelect = document.getElementById("modelo");
  const divReferencia = document.getElementById("imgReferencia");

  function actualizarImgSegunModelo() {
    const modeloSeleccionado = modeloSelect.value;

    divReferencia.innerHTML = "";

    const newImg = document.createElement("img");

    if (modeloImg[modeloSeleccionado]) {
      newImg.src = modeloImg[modeloSeleccionado][0].img;
      newImg.alt = modeloSeleccionado;
      newImg.classList.add("referencia-img");
      divReferencia.appendChild(newImg);
    }
  }

  modeloSelect.addEventListener("change", actualizarImgSegunModelo);

  actualizarImgSegunModelo();
});
