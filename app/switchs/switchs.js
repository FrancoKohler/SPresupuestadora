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
    let posapiesAMostrar = [];
    let respaldosAMostrar = [];
    const suplementoPatas = document.getElementById("suplementoPatas");
    const suplementoCosturas = document.getElementById("suplementoCosturas");
    const suplementoPosapies = document.getElementById("seccionPosapies");
    const suplementoRespaldos = document.querySelector(".suplemento-respaldos");
    const suplementoMotor = document.querySelector(".suplemento-motor");
    const suplementoBateria = document.querySelector(".suplemento-bateria");
    let materialesAgora = new Set();
    let materialesAlpha = new Set();
    let materialesAres = new Set();
    let materialesBarine = new Set();
    let materialesBertina = new Set();
    let materialesBertinaLit = new Set();
    let materialesBruma = new Set();
    let materialesCoral = new Set();
    let materialesCoralina = new Set();
    let materialesCrono = new Set();
    let materialesDana = new Set();
    let materialesDino = new Set();
    let materialesEros = new Set();
    let materialesGamma = new Set();
    let materialesGiant = new Set();
    let materialesGiantLit = new Set();
    let materialesKappa = new Set();
    let materialesLino = new Set();
    let materialesMemphis = new Set();
    let materialesMistral = new Set();
    let materialesNadir = new Set();
    let materialesOmega = new Set();
    let materialesPA = new Set();
    let materialesPB = new Set();
    let materialesSigma = new Set();
    let materialesSiroco = new Set();
    let materialesSisal = new Set();
    let materialesTassos = new Set();
    let materialesTita = new Set();
    let materialesTundra = new Set();
    let materialesTucson = new Set();
    let materialesZenith = new Set();
    let materialesZonda = new Set();
    let materialesAltano = new Set();
    let materialesYute = new Set();

    switch (modeloSeleccionado) {
      case "Yute":
        piezasAMostrar = piezasYute;
        suplementoRespaldos.style.display = "none";
        suplementoPosapies.style.display = "none";
        suplementoMotor.style.display = "block";
        suplementoCosturas.style.display = "none";
        piezasYute.forEach((pieza) => {
          if (pieza.price) {
            pieza.price.forEach((precio) => {
              materialesYute.add(precio.material);
            });
          }
        });
        break;

      case "Agora":
        piezasAMostrar = piezasAgora;
        respaldosAMostrar = respaldosAgora;
        posapiesAMostrar = posapiesAgora;
        suplementoCosturas.style.display = "flex";
        suplementoRespaldos.style.display = "flex";
        suplementoPatas.style.display = "none";
        suplementoPosapies.style.display = "flex";
        piezasAgora.forEach((pieza) => {
          if (pieza.price) {
            pieza.price.forEach((precio) => {
              materialesAgora.add(precio.material);
            });
          }
        });
        respaldosAgora.forEach((respaldo) => {
          if (respaldo.price) {
            respaldo.price.forEach((precio) => {
              materialesAgora.add(precio.material);
            });
          }
        });
        posapiesAgora.forEach((posapie) => {
          if (posapie.price) {
            posapie.price.forEach((precio) => {
              materialesAgora.add(precio.material);
            });
          }
        });

        break;
      case "Alpha":
        piezasAMostrar = piezasAlpha;
        posapiesAMostrar = posapiesAlpha;
        suplementoCosturas.style.display = "none";
        suplementoRespaldos.style.display = "none";
        suplementoPosapies.style.display = "flex";
        piezasAlpha.forEach((pieza) => {
          if (pieza.price) {
            pieza.price.forEach((precio) => {
              materialesAlpha.add(precio.material);
            });
          }
        });
        posapiesAlpha.forEach((posapie) => {
          if (posapie.price) {
            posapie.price.forEach((precio) => {
              materialesAlpha.add(precio.material);
            });
          }
        });

        break;
      case "Altano":
        piezasAMostrar = piezasAltano;
        posapiesAMostrar = posapiesAltano;
        suplementoCosturas.style.display = "none";
        suplementoRespaldos.style.display = "none";
        suplementoPosapies.style.display = "flex";
        // Poblar materiales específicos de "Altano"
        piezasAltano.forEach((pieza) => {
          if (pieza.price) {
            pieza.price.forEach((precio) => {
              materialesAltano.add(precio.material);
            });
          }
        });
        posapiesAltano.forEach((posapie) => {
          if (posapie.price) {
            posapie.price.forEach((precio) => {
              materialesAltano.add(precio.material);
            });
          }
        });

        break;
      case "Ares":
        piezasAMostrar = piezasAres;
        suplementoRespaldos.style.display = "none";
        suplementoCosturas.style.display = "none";
        suplementoPatas.style.display = "none";
        suplementoPosapies.style.display = "none";
        // Poblar materiales específicos de "Ares"
        piezasAres.forEach((pieza) => {
          if (pieza.price) {
            pieza.price.forEach((precio) => {
              materialesAres.add(precio.material);
            });
          }
        });

        break;
      case "Barine":
        piezasAMostrar = piezasBarine;
        posapiesAMostrar = posapiesBarine;
        suplementoCosturas.style.display = "none";
        suplementoRespaldos.style.display = "none";
        suplementoPatas.style.display = "none";
        suplementoPosapies.style.display = "flex";
        // Poblar materiales específicos de "Barine"
        piezasBarine.forEach((piezaBarine) => {
          if (piezaBarine.price) {
            piezaBarine.price.forEach((precio) => {
              materialesBarine.add(precio.material);
            });
          }
        });
        posapiesBarine.forEach((posapie) => {
          if (posapie.price) {
            posapie.price.forEach((precio) => {
              materialesBarine.add(precio.material);
            });
          }
        });

        break;
      case "Bertina":
        piezasAMostrar = piezasBertina;
        posapiesAMostrar = posapiesBertinas;
        suplementoCosturas.style.display = "none";
        suplementoRespaldos.style.display = "none";
        suplementoPosapies.style.display = "flex";
        // Poblar materiales específicos de "Bertina"
        piezasBertina.forEach((piezaBertina) => {
          if (piezaBertina.price) {
            piezaBertina.price.forEach((precio) => {
              materialesBertina.add(precio.material);
            });
          }
        });
        posapiesBertinas.forEach((posapies) => {
          if (posapies.price) {
            posapies.price.forEach((precio) => {
              materialesBertina.add(precio.material);
            });
          }
        });

        break;
      case "Bertina Little":
        piezasAMostrar = piezasBertinaLit;
        posapiesAMostrar = posapiesBertinas;
        suplementoCosturas.style.display = "none";
        suplementoRespaldos.style.display = "none";
        suplementoPosapies.style.display = "flex";
        // Poblar materiales específicos de "Bertina Lt"
        piezasBertinaLit.forEach((piezaBertinaLit) => {
          if (piezaBertinaLit.price) {
            piezaBertinaLit.price.forEach((precio) => {
              materialesBertinaLit.add(precio.material);
            });
          }
        });
        posapiesBertinas.forEach((posapies) => {
          if (posapies.price) {
            posapies.price.forEach((precio) => {
              materialesBertina.add(precio.material);
            });
          }
        });

        break;
      case "Bruma":
        piezasAMostrar = piezasBruma;
        suplementoRespaldos.style.display = "none";
        suplementoCosturas.style.display = "none";
        suplementoPatas.style.display = "none";
        suplementoPosapies.style.display = "none";
        // Poblar materiales específicos de "Bertina Lt"
        piezasBruma.forEach((piezaBruma) => {
          if (piezaBruma.price) {
            piezaBruma.price.forEach((precio) => {
              materialesBruma.add(precio.material);
            });
          }
        });

        break;
      case "Coral":
        piezasAMostrar = piezasCoral;
        suplementoRespaldos.style.display = "none";
        suplementoCosturas.style.display = "none";
        suplementoPatas.style.display = "none";
        suplementoPosapies.style.display = "none";
        // Poblar materiales específicos de "Coral"
        piezasCoral.forEach((piezaCoral) => {
          if (piezaCoral.price) {
            piezaCoral.price.forEach((precio) => {
              materialesCoral.add(precio.material);
            });
          }
        });

        break;
      case "Coralina":
        piezasAMostrar = piezasCoralina;
        suplementoRespaldos.style.display = "none";
        suplementoCosturas.style.display = "none";
        suplementoPatas.style.display = "none";
        suplementoPosapies.style.display = "none";
        // Poblar materiales específicos de "Coralina"
        piezasCoralina.forEach((piezaCoralina) => {
          if (piezaCoralina.price) {
            piezaCoralina.price.forEach((precio) => {
              materialesCoralina.add(precio.material);
            });
          }
        });

        break;
      case "Crono":
        piezasAMostrar = piezasCronos;
        suplementoRespaldos.style.display = "none";
        suplementoCosturas.style.display = "none";
        suplementoPatas.style.display = "none";
        suplementoPosapies.style.display = "none";
        // Poblar materiales específicos de "Crono"
        piezasCronos.forEach((piezaCronos) => {
          if (piezaCronos.price) {
            piezaCronos.price.forEach((precio) => {
              materialesCrono.add(precio.material);
            });
          }
        });

        break;
      case "Dana":
        piezasAMostrar = piezasDana;
        suplementoRespaldos.style.display = "none";
        suplementoCosturas.style.display = "none";
        suplementoPosapies.style.display = "none";
        // Poblar materiales específicos de "Dana"
        piezasDana.forEach((piezaDana) => {
          if (piezaDana.price) {
            piezaDana.price.forEach((precio) => {
              materialesDana.add(precio.material);
            });
          }
        });

        break;
      case "Dino":
        piezasAMostrar = piezasDino;
        suplementoRespaldos.style.display = "none";
        suplementoCosturas.style.display = "none";
        suplementoPosapies.style.display = "none";
        // Poblar materiales específicos de "Dino"
        piezasDino.forEach((piezaDino) => {
          if (piezaDino.price) {
            piezaDino.price.forEach((precio) => {
              materialesDino.add(precio.material);
            });
          }
        });

        break;
      case "Eros":
        piezasAMostrar = piezasEros;
        suplementoRespaldos.style.display = "none";
        suplementoCosturas.style.display = "none";
        suplementoPosapies.style.display = "none";
        suplementoBateria.style.display = "flex";
        // Poblar materiales específicos de "Eros"
        piezasEros.forEach((piezaEros) => {
          if (piezaEros.price) {
            piezaEros.price.forEach((precio) => {
              materialesEros.add(precio.material);
            });
          }
        });

        break;
      case "Gamma":
        piezasAMostrar = piezasGamma;
        posapiesAMostrar = posapiesGamma;
        suplementoRespaldos.style.display = "none";
        suplementoCosturas.style.display = "none";
        suplementoPatas.style.display = "none";
        suplementoPosapies.style.display = "flex";
        // Poblar materiales específicos de "Gamma"
        piezasGamma.forEach((piezaGamma) => {
          if (piezaGamma.price) {
            piezaGamma.price.forEach((precio) => {
              materialesGamma.add(precio.material);
            });
          }
        });
        posapiesGamma.forEach((posapie) => {
          if (posapie.price) {
            posapie.price.forEach((precio) => {
              materialesGamma.add(precio.material);
            });
          }
        });

        break;
      case "Giant":
        piezasAMostrar = piezasGiant;
        posapiesAMostrar = posapiesGiant;
        suplementoCosturas.style.display = "flex";
        suplementoRespaldos.style.display = "none";
        suplementoPosapies.style.display = "flex";
        // Poblar materiales específicos de "Giant"
        piezasGiant.forEach((piezaGiant) => {
          if (piezaGiant.price) {
            piezaGiant.price.forEach((precio) => {
              materialesGiant.add(precio.material);
            });
          }
        });
        posapiesGiant.forEach((posapie) => {
          if (posapie.price) {
            posapie.price.forEach((precio) => {
              materialesGiant.add(precio.material);
            });
          }
        });

        break;
      case "Giant Little":
        piezasAMostrar = piezasGiantLit;
        posapiesAMostrar = posapiesGiant;
        suplementoCosturas.style.display = "flex";
        suplementoRespaldos.style.display = "none";
        suplementoPosapies.style.display = "flex";
        // Poblar materiales específicos de "Giant Little"
        piezasGiantLit.forEach((piezaGiantLit) => {
          if (piezaGiantLit.price) {
            piezaGiantLit.price.forEach((precio) => {
              materialesGiantLit.add(precio.material);
            });
          }
        });
        posapiesGiant.forEach((posapie) => {
          if (posapie.price) {
            posapie.price.forEach((precio) => {
              materialesGiant.add(precio.material);
            });
          }
        });
        break;
      case "Kappa":
        piezasAMostrar = piezasKappa;
        suplementoCosturas.style.display = "none";
        suplementoRespaldos.style.display = "none";
        suplementoPosapies.style.display = "none";
        // Poblar materiales específicos de "Kappa"
        piezasKappa.forEach((piezaKappa) => {
          if (piezaKappa.price) {
            piezaKappa.price.forEach((precio) => {
              materialesKappa.add(precio.material);
            });
          }
        });

        break;
      case "Lino":
        piezasAMostrar = piezasLino;
        suplementoCosturas.style.display = "none";
        suplementoRespaldos.style.display = "none";
        suplementoPatas.style.display = "none";
        suplementoPosapies.style.display = "none";
        suplementoMotor.style.display = "flex";
        suplementoBateria.style.display = "flex";
        // Poblar materiales específicos de "Lino"
        piezasLino.forEach((pieza) => {
          if (pieza.price) {
            pieza.price.forEach((precio) => {
              materialesLino.add(precio.material);
            });
          }
        });

        break;
      case "Memphis":
        piezasAMostrar = piezasMemphis;
        posapiesAMostrar = posapiesMemphis;
        suplementoCosturas.style.display = "none";
        suplementoRespaldos.style.display = "none";
        suplementoPosapies.style.display = "flex";
        // Poblar materiales específicos de "Memphis"
        piezasMemphis.forEach((piezaMemphis) => {
          if (piezaMemphis.price) {
            piezaMemphis.price.forEach((precio) => {
              materialesMemphis.add(precio.material);
            });
          }
        });
        posapiesMemphis.forEach((posapieMemphis) => {
          if (posapieMemphis.price) {
            posapieMemphis.price.forEach((precio) => {
              materialesMemphis.add(precio.material);
            });
          }
        });

        break;
      case "Mistral":
        piezasAMostrar = piezasMistral;
        suplementoCosturas.style.display = "none";
        suplementoRespaldos.style.display = "none";
        suplementoBateria.style.display = "flex";
        suplementoPosapies.style.display = "none";
        // Poblar materiales específicos de "Mistral"
        piezasMistral.forEach((piezaMistral) => {
          if (piezaMistral.price) {
            piezaMistral.price.forEach((precio) => {
              materialesMistral.add(precio.material);
            });
          }
        });

        break;
      case "Nadir":
        piezasAMostrar = piezasNadir;
        posapiesAMostrar = posapiesNadir;
        suplementoCosturas.style.display = "none";
        suplementoRespaldos.style.display = "none";
        suplementoPatas.style.display = "none";
        suplementoPosapies.style.display = "flex";
        // Poblar materiales específicos de "Nadir"
        piezasNadir.forEach((piezaNadir) => {
          if (piezaNadir.price) {
            piezaNadir.price.forEach((precio) => {
              materialesNadir.add(precio.material);
            });
          }
        });
        posapiesNadir.forEach((posapies) => {
          if (posapies.price) {
            posapies.price.forEach((precio) => {
              materialesNadir.add(precio.material);
            });
          }
        });

        break;
      case "Omega":
        piezasAMostrar = piezasOmega;
        suplementoCosturas.style.display = "none";
        suplementoRespaldos.style.display = "none";
        suplementoBateria.style.display = "flex";
        suplementoPosapies.style.display = "none";
        // Poblar materiales específicos de "Omega"
        piezasOmega.forEach((piezaOmega) => {
          if (piezaOmega.price) {
            piezaOmega.price.forEach((precio) => {
              materialesOmega.add(precio.material);
            });
          }
        });

        break;
      case "Platea Alta":
        piezasAMostrar = piezasPlateaAlta;
        respaldosAMostrar = respaldosPlateaBaja;
        posapiesAMostrar = posapiesPA;
        suplementoCosturas.style.display = "none";
        suplementoRespaldos.style.display = "flex";
        suplementoPatas.style.display = "none";
        suplementoPosapies.style.display = "flex";
        // Poblar materiales específicos de "Platea Alta"
        piezasPlateaAlta.forEach((piezaPlateaAlta) => {
          if (piezaPlateaAlta.price) {
            piezaPlateaAlta.price.forEach((precio) => {
              materialesPA.add(precio.material);
            });
          }
        });
        respaldosPlateaBaja.forEach((respaldo) => {
          if (respaldo.price) {
            respaldo.price.forEach((precio) => {
              materialesPB.add(precio.material);
            });
          }
        });
        posapiesPA.forEach((posapie) => {
          if (posapie.price) {
            posapie.price.forEach((precio) => {
              materialesPA.add(precio.material);
            });
          }
        });

        break;
      case "Platea Baja":
        piezasAMostrar = piezasPlateaBaja;
        respaldosAMostrar = respaldosPlateaBaja;
        posapiesAMostrar = posapiesPB;
        suplementoCosturas.style.display = "none";
        suplementoRespaldos.style.display = "flex";
        suplementoPatas.style.display = "none";
        suplementoPosapies.style.display = "flex";
        // Poblar materiales específicos de "Platea Baja"
        piezasPlateaBaja.forEach((piezaPlateaBaja) => {
          if (piezaPlateaBaja.price) {
            piezaPlateaBaja.price.forEach((precio) => {
              materialesPB.add(precio.material);
            });
          }
        });
        respaldosPlateaBaja.forEach((respaldo) => {
          if (respaldo.price) {
            respaldo.price.forEach((precio) => {
              materialesPB.add(precio.material);
            });
          }
        });
        posapiesPB.forEach((posapie) => {
          if (posapie.price) {
            posapie.price.forEach((precio) => {
              materialesPB.add(precio.material);
            });
          }
        });
        break;
      case "Sigma":
        piezasAMostrar = piezasSigma;
        suplementoCosturas.style.display = "none";
        suplementoRespaldos.style.display = "none";
        suplementoPosapies.style.display = "none";
        // Poblar materiales específicos de "Sigma"
        piezasSigma.forEach((piezaSigma) => {
          if (piezaSigma.price) {
            piezaSigma.price.forEach((precio) => {
              materialesSigma.add(precio.material);
            });
          }
        });

        break;
      case "Sirocco Eco":
        piezasAMostrar = piezasSiroco;
        suplementoCosturas.style.display = "none";
        suplementoRespaldos.style.display = "none";
        suplementoPatas.style.display = "none";
        suplementoPosapies.style.display = "none";
        // Poblar materiales específicos de "Siroco"
        piezasSiroco.forEach((piezaSiroco) => {
          if (piezaSiroco.price) {
            piezaSiroco.price.forEach((precio) => {
              materialesSiroco.add(precio.material);
            });
          }
        });

        break;

      case "Sisal":
        piezasAMostrar = piezasSisal;
        suplementoCosturas.style.display = "none";
        suplementoRespaldos.style.display = "none";
        suplementoPosapies.style.display = "none";
        // Poblar materiales específicos de "Sisal"
        piezasSisal.forEach((piezaSisal) => {
          if (piezaSisal.price) {
            piezaSisal.price.forEach((precio) => {
              materialesSisal.add(precio.material);
            });
          }
        });

        break;
      case "Tassos":
        piezasAMostrar = piezasTassos;
        suplementoCosturas.style.display = "none";
        suplementoRespaldos.style.display = "none";
        suplementoPosapies.style.display = "none";
        suplementoBateria.style.display = "flex";
        // Poblar materiales específicos de "Tassos"
        piezasTassos.forEach((piezaTassos) => {
          if (piezaTassos.price) {
            piezaTassos.price.forEach((precio) => {
              materialesTassos.add(precio.material);
            });
          }
        });

        break;
      case "Tita":
        piezasAMostrar = piezasTita;
        suplementoCosturas.style.display = "none";
        suplementoRespaldos.style.display = "none";
        suplementoPosapies.style.display = "none";
        // Poblar materiales específicos de "Tita"
        piezasTita.forEach((piezaTita) => {
          if (piezaTita.price) {
            piezaTita.price.forEach((precio) => {
              materialesTita.add(precio.material);
            });
          }
        });

        break;
      case "Tundra":
        piezasAMostrar = piezasTundra;
        suplementoCosturas.style.display = "none";
        suplementoRespaldos.style.display = "none";
        suplementoPosapies.style.display = "none";
        suplementoPatas.style.display = "none";
        suplementoBateria.style.display = "flex";
        // Poblar materiales específicos de "Tundra"
        piezasTundra.forEach((piezaTundra) => {
          if (piezaTundra.price) {
            piezaTundra.price.forEach((precio) => {
              materialesTundra.add(precio.material);
            });
          }
        });

        break;
      case "Tucson":
        piezasAMostrar = piezasTucson;
        posapiesAMostrar = posapiesTucson;
        suplementoCosturas.style.display = "none";
        suplementoRespaldos.style.display = "none";
        suplementoPatas.style.display = "none";
        suplementoPosapies.style.display = "flex";
        // Poblar materiales específicos de "Tucson"
        piezasTucson.forEach((piezaTucson) => {
          if (piezaTucson.price) {
            piezaTucson.price.forEach((precio) => {
              materialesTucson.add(precio.material);
            });
          }
        });
        posapiesTucson.forEach((posapie) => {
          if (posapie.price) {
            posapie.price.forEach((precio) => {
              materialesTucson.add(precio.material);
            });
          }
        });

        break;
      case "Zenith":
        piezasAMostrar = piezasZenith;
        suplementoCosturas.style.display = "none";
        suplementoRespaldos.style.display = "none";
        suplementoPatas.style.display = "none";
        suplementoPosapies.style.display = "none";
        // Poblar materiales específicos de "Zenith"
        piezasZenith.forEach((piezaZenith) => {
          if (piezaZenith.price) {
            piezaZenith.price.forEach((precio) => {
              materialesZenith.add(precio.material);
            });
          }
        });

        break;
      case "Zonda":
        piezasAMostrar = piezasZonda;
        suplementoCosturas.style.display = "none";
        suplementoRespaldos.style.display = "none";
        suplementoPatas.style.display = "none";
        suplementoPosapies.style.display = "none";
        // Poblar materiales específicos de "Zonda"
        piezasZonda.forEach((piezaZonda) => {
          if (piezaZonda.price) {
            piezaZonda.price.forEach((precio) => {
              materialesZonda.add(precio.material);
            });
          }
        });

        break;
      default:
        piezasAMostrar = [];
    }
    /*-------PIEZAS DROPDOWNS Y CATEGORIAS---------*/
    const coleccionPiezas = {
      Agora: piezasAgora,
      Alpha: piezasAlpha,
      Altano: piezasAltano,
      Barine: piezasBarine,
      Bertina: piezasBertina,
      "Bertina Little": piezasBertinaLit,
      Gamma: piezasGamma,
      Giant: piezasGiant,
      "Giant Little": piezasGiantLit,
      Kappa: piezasKappa,
      Lino: piezasLino,
      Memphis: piezasMemphis,
      Mistral: piezasMistral,
      Nadir: piezasNadir,
      "Platea Alta": piezasPlateaAlta,
      "Platea Baja": piezasPlateaBaja,
      Sigma: piezasSigma,
      "Sirocco Eco": piezasSiroco,
      Sisal: piezasSisal,
      Tucson: piezasTucson,
      Tundra: piezasTundra,
      Yute: piezasYute,
      Zenith: piezasZenith,
      Zonda: piezasZonda,
      Ares: piezasAres,
      Bruma: piezasBruma,
      Coral: piezasCoral,
      Coralina: piezasCoralina,
      Crono: piezasCronos,
      Dana: piezasDana,
      Dino: piezasDino,
      Eros: piezasEros,
      Omega: piezasOmega,
      Tassos: piezasTassos,
      Tita: piezasTita,
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

    /*--------------POSAPIES------*/

    // Actualizar los dropdowns de posapies
    for (let i = 1; i <= 8; i++) {
      const dropdown = document.getElementById(`posapies${i}`);
      dropdown.innerHTML = ""; // Limpiar las opciones existentes

      // Agregar las nuevas opciones
      posapiesAMostrar.forEach((posapie) => {
        const option = document.createElement("option");
        option.value = posapie.id;
        option.textContent = `${posapie.title.toUpperCase()}`;
        option.dataset.price = JSON.stringify(posapie.price);
        dropdown.appendChild(option);
      });
    }

    //--------------------RESPALDOS
    // Actualizar los dropdowns de RESPALDOS
    for (let i = 1; i <= 8; i++) {
      const dropdown = document.getElementById(`outputR${i}`);
      dropdown.innerHTML = "";

      respaldosAMostrar.forEach((respaldo) => {
        const option = document.createElement("option");
        option.value = respaldo.id;
        option.textContent = `${respaldo.title.toUpperCase()}`;
        option.dataset.price = JSON.stringify(respaldo.price);
        dropdown.appendChild(option);
      });
    }

    // Actualizar el dropdown de tela según el modelo
    const telaDropdown = document.getElementById("tela");
    telaDropdown.innerHTML = ""; // Limpiar las opciones existentes

    if (modeloSeleccionado === "Agora") {
      // Agregar materiales del modelo Agora
      materialesAgora.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Altano") {
      // Agregar materiales del modelo Altano
      materialesAltano.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
        suplementoPatas.style.display = "flex";
      });
    } else if (modeloSeleccionado === "Alpha") {
      // Agregar materiales del modelo Alpha
      materialesAlpha.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
        suplementoPatas.style.display = "flex";
      });
    } else if (modeloSeleccionado === "Ares") {
      // Agregar materiales del modelo Ares
      materialesAres.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Barine") {
      // Agregar materiales del modelo Barine
      materialesBarine.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Bertina") {
      // Agregar materiales del modelo Bertina
      materialesBertina.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
        suplementoPatas.style.display = "flex";
      });
    } else if (modeloSeleccionado === "Bertina Little") {
      // Agregar materiales del modelo Bertina Lt
      materialesBertinaLit.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
        suplementoPatas.style.display = "flex";
      });
    } else if (modeloSeleccionado === "Bruma") {
      // Agregar materiales del modelo Bruma
      materialesBruma.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Coral") {
      // Agregar materiales del modelo Coral
      materialesCoral.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Coralina") {
      // Agregar materiales del modelo Coralina
      materialesCoralina.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Crono") {
      // Agregar materiales del modelo Crono
      materialesCrono.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Dana") {
      // Agregar materiales del modelo Dana
      materialesDana.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Dino") {
      // Agregar materiales del modelo Dino
      materialesDino.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Eros") {
      // Agregar materiales del modelo Eros
      materialesEros.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Gamma") {
      // Agregar materiales del modelo Gamma
      materialesGamma.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Giant") {
      // Agregar materiales del modelo Giant
      materialesGiant.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
        suplementoPatas.style.display = "flex";
      });
    } else if (modeloSeleccionado === "Giant Little") {
      // Agregar materiales del modelo Giant Lt
      materialesGiantLit.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
        suplementoPatas.style.display = "flex";
      });
    } else if (modeloSeleccionado === "Kappa") {
      // Agregar materiales del modelo Kappa
      materialesKappa.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
        suplementoPatas.style.display = "flex";
      });
    } else if (modeloSeleccionado === "Lino") {
      // Agregar materiales del modelo Lino
      materialesLino.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Memphis") {
      // Agregar materiales del modelo Memphis
      materialesMemphis.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
        suplementoPatas.style.display = "flex";
      });
    } else if (modeloSeleccionado === "Mistral") {
      // Agregar materiales del modelo Mistral
      materialesMistral.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
        suplementoPatas.style.display = "flex";
      });
    } else if (modeloSeleccionado === "Nadir") {
      // Agregar materiales del modelo Nadir
      materialesNadir.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Omega") {
      // Agregar materiales del modelo Omega
      materialesOmega.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Platea Alta") {
      // Agregar materiales del modelo Nadir
      materialesPA.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Platea Baja") {
      // Agregar materiales del modelo Nadir
      materialesPB.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
        // Establecer display flex para el elemento con id
        const suplementoRespaldo = document.getElementById(
          "suplementoRespaldos"
        );
        suplementoRespaldo.style.display = "flex";
      });
    } else if (modeloSeleccionado === "Sirocco Eco") {
      // Agregar materiales del modelo Siroco
      materialesSiroco.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Sigma") {
      // Agregar materiales del modelo Sigma
      materialesSigma.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
        suplementoPatas.style.display = "flex";
      });
    } else if (modeloSeleccionado === "Sisal") {
      // Agregar materiales del modelo Sisal
      materialesSisal.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Tassos") {
      // Agregar materiales del modelo Tassos
      materialesTassos.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Tita") {
      // Agregar materiales del modelo Tita
      materialesTita.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Tucson") {
      materialesTucson.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
        suplementoPatas.style.display = "flex";
      });
    } else if (modeloSeleccionado === "Tundra") {
      // Agregar materiales del modelo Tundra
      materialesTundra.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Yute") {
      suplementoBateria.style.display = "flex";
      // Agregar materiales del modelo Yute
      materialesYute.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Zonda") {
      suplementoBateria.style.display = "flex";
      // Agregar materiales del modelo Zonda
      materialesZonda.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Zenith") {
      suplementoBateria.style.display = "flex";
      // Agregar materiales del modelo Zenith
      materialesZenith.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    }

    // Actualizar las imágenes y el resumen después de cambiar el modelo
    mostrarImagenes();
    generarResumen();
  }

  /*--------------COJINES-------------*/

  const dropdownCjs = ["cojin1", "cojin2", "cojin3", "cojin4"];

  function populateDropdownsCojines(options) {
    dropdownCjs.forEach((selectId) => {
      const select = document.getElementById(selectId);
      options.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.value = option.id;
        optionElement.textContent = option.title.toUpperCase();
        select.appendChild(optionElement);
      });
    });
  }

  populateDropdownsCojines(cojines);
});
