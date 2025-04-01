/*------------------------TELA DROPDOWN---------------*/

let resumen = { nombre: "" };
let categoriaSeleccionada = "";

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("category-select")
    .addEventListener("change", seleccionarCategoria);
  document.getElementById("search-input").addEventListener("input", buscarTela);
});

function seleccionarCategoria() {
  categoriaSeleccionada = document.getElementById("category-select").value;
  document.getElementById("search-input").value = "";
  document.getElementById("dropdown-content").innerHTML = "";
  document.getElementById("dropdown-content").style.display = "none";
}

function buscarTela() {
  const input = document.getElementById("search-input").value.toLowerCase();
  const dropdownContent = document.getElementById("dropdown-content");
  dropdownContent.innerHTML = "";

  if (!categoriaSeleccionada) {
    alert("Por favor, selecciona una categoría primero.");
    return;
  }

  const muestrasArray = muestras[categoriaSeleccionada];

  if (!muestrasArray) {
    console.error(
      `La categoría seleccionada (${categoriaSeleccionada}) no existe en el objeto muestras.`
    );
    return;
  }

  muestrasArray.forEach((item) => {
    if (item.nombre.toLowerCase().includes(input)) {
      const div = document.createElement("div");
      div.classList.add("dropdown-item");

      const img = document.createElement("img");
      img.src = item.img;
      img.alt = item.nombre;
      img.style.width = "50px";
      img.style.height = "50px";
      img.style.marginRight = "10px";

      const span = document.createElement("span");
      span.innerText = item.nombre;

      div.appendChild(img);
      div.appendChild(span);
      div.classList.add("tela-span");
      div.onclick = () => seleccionarMuestra(item.nombre);
      dropdownContent.appendChild(div);
    }
  });

  dropdownContent.style.display =
    dropdownContent.children.length > 0 ? "block" : "none";
}
function seleccionarMuestra(nombre) {
  resumen.nombre = nombre;
  const selectedOption = document.getElementById("selected-option");
  if (selectedOption) {
    selectedOption.innerText = nombre;
    selectedOption.dataset.nombre = nombre;
  }
  console.log("Muestra seleccionada:", resumen.nombre);
  document.getElementById("dropdown-content").style.display = "none";
  generarResumen();
}

function cerrarOverlay() {
  const overlay = document.getElementById("overlay");
  if (overlay) {
    overlay.style.display = "none";
  }
}
/*------- <div class="category-select">
<select class="dropdown-select" id="category-select" onchange="seleccionarCategoria()">
    <option value="">Selecciona una categoría</option>
    <option value="Brixton">Brixton</option>
    <option value="Camila">Camila</option>
    <option value="Montreal">Montreal</option>
    <option value="Osaka">Osaka</option>
    <option value="Terranova">Terranova</option>
    <option value="TelaCliente">Tela Cliente</option>
</select>

</div>
<div class="select-box">
<input class="search-input" type="text" id="search-input" placeholder="Buscar tela..." oninput="buscarTela()">
<div class="search-icon" onclick="buscarTela()"><img class="lupa" src="./assets/Search.png" alt="Search"></div>
</div>
<div id="dropdown-content" class="dropdown-content"></div>
</div>
</div> 

<div id="overlay" class="overlay">
<div class="overlay-content">
<span class="close-btn" onclick="cerrarOverlay()">×</span>
<img id="overlay-img" src="" alt="Imagen de la tela">
</div>
</div>

<div id="overlay" class="overlay">
<div class="overlay-content">
<span class="close-btn" onclick="cerrarOverlay()">×</span>
<img id="overlay-img" src="" alt="Imagen de la tela">
</div>
</div> -----------*/
