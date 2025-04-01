/*-----------SWITCH DE PRECIOS SEGUN MODELO----------*/
function cambiarPreciosPorModelo(modelo) {
  let nuevosPrecios;

  switch (modelo) {
    case "Agora":
      nuevosPrecios = preciosAgora;
      break;
    case "Altano":
      nuevosPrecios = preciosAltano;
      break;
    case "Alpha":
      nuevosPrecios = preciosAlpha;
      break;
    case "Ares":
      nuevosPrecios = preciosAres;
      break;
    case "Barine":
      nuevosPrecios = preciosBarine;
      break;
    case "Bertina":
      nuevosPrecios = preciosBertina;
      break;
    case "Bertina Little":
      nuevosPrecios = preciosBertinaLit;
      break;
    case "Bruma":
      nuevosPrecios = preciosBruma;
      break;
    case "Coral":
      nuevosPrecios = preciosCoral;
      break;
    case "Coralina":
      nuevosPrecios = preciosCoralina;
      break;
    case "Coral":
      nuevosPrecios = preciosCoral;
      break;
    case "Dana":
      nuevosPrecios = preciosDana;
      break;
    case "Dino":
      nuevosPrecios = preciosDino;
      break;
    case "Eros":
      nuevosPrecios = preciosEros;
      break;
    case "Gamma":
      nuevosPrecios = preciosGamma;
      break;
    case "Giant":
      nuevosPrecios = preciosGiant;
      break;
    case "Giant Little":
      nuevosPrecios = preciosGiantLit;
      break;
    case "Kappa":
      nuevosPrecios = preciosKappa;
      break;
    case "Lino":
      nuevosPrecios = preciosLino;
      break;
    case "Memphis":
      nuevosPrecios = preciosMemphis;
      break;
    case "Mistral":
      nuevosPrecios = preciosMistral;
      break;
    case "Lino":
      nuevosPrecios = preciosLino;
      break;
    case "Nadir":
      nuevosPrecios = preciosNadir;
      break;
    case "Omega":
      nuevosPrecios = preciosOmega;
      break;
    case "Platea Alta":
      nuevosPrecios = preciosPlateaAlta;
      break;
    case "Platea Baja":
      nuevosPrecios = preciosPlateaBaja;
      break;
    case "Sigma":
      nuevosPrecios = preciosSigma;
      break;
    case "Sisal":
      nuevosPrecios = preciosSisal;
      break;
    case "Sirocco Eco":
      nuevosPrecios = preciosSiroco;
      break;
    case "Tassos":
      nuevosPrecios = preciosTassos;
      break;
    case "Tita":
      nuevosPrecios = preciosTita;
      break;
    case "Tundra":
      nuevosPrecios = preciosTundra;
      break;
    case "Tucson":
      nuevosPrecios = preciosTucson;
      break;
    case "Yute":
      nuevosPrecios = precios;
      break;
    case "Zenith":
      nuevosPrecios = preciosZenith;
      break;
    case "Zonda":
      nuevosPrecios = preciosZonda;
      break;
    default:
      nuevosPrecios = precios;
  }

  if (!Array.isArray(nuevosPrecios)) {
    console.error("Error: nuevosPrecios no es un array");
    return;
  }
  /*-----------PRECIO POR PIEZA------*/
  piezasYute.forEach((piezaYute) => {
    piezaYute.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((precio) => precio.id === piezaYute.id)
      : [];
  });
  piezasAgora.forEach((piezaAgora) => {
    piezaAgora.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((precioAgora) => precioAgora.id === piezaAgora.id)
      : [];
  });
  piezasAltano.forEach((piezaAltano) => {
    piezaAltano.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter(
          (precioAltano) => precioAltano.id === piezaAltano.id
        )
      : [];
  });
  piezasAlpha.forEach((piezaAlpha) => {
    piezaAlpha.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((precioAlpha) => precioAlpha.id === piezaAlpha.id)
      : [];
  });
  piezasAres.forEach((piezaAres) => {
    piezaAres.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((precioAres) => precioAres.id === piezaAres.id)
      : [];
  });
  piezasBarine.forEach((piezaBarine) => {
    piezaBarine.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter(
          (precioBarine) => precioBarine.id === piezaBarine.id
        )
      : [];
  });
  piezasBertina.forEach((piezaBertina) => {
    piezaBertina.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter(
          (precioBertina) => precioBertina.id === piezaBertina.id
        )
      : [];
  });
  piezasBertinaLit.forEach((piezaBertinaLit) => {
    piezaBertinaLit.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter(
          (precioBertinaLit) => precioBertinaLit.id === piezaBertinaLit.id
        )
      : [];
  });
  piezasBruma.forEach((piezaBruma) => {
    piezaBruma.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((precioBruma) => precioBruma.id === piezaBruma.id)
      : [];
  });
  piezasCoral.forEach((piezaCoral) => {
    piezaCoral.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((piezaCoral) => precioCoral.id === piezaCoral.id)
      : [];
  });
  piezasCoralina.forEach((piezaCoralina) => {
    piezaCoralina.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter(
          (piezaCoralina) => precioCoralina.id === piezaCoralina.id
        )
      : [];
  });
  piezasDana.forEach((piezaDana) => {
    piezaDana.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((piezaDana) => precioDana.id === piezaDana.id)
      : [];
  });
  piezasEros.forEach((piezaEros) => {
    piezaEros.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((piezaEros) => precioEros.id === piezaEros.id)
      : [];
  });
  piezasDino.forEach((piezaDino) => {
    piezaDino.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((piezaDino) => precioDino.id === piezaDino.id)
      : [];
  });
  piezasGiant.forEach((piezaGiant) => {
    piezaGiant.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((piezaGiant) => precioGiant.id === piezaGiant.id)
      : [];
  });
  piezasGiantLit.forEach((piezaGiantLit) => {
    piezaGiantLit.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter(
          (piezaGiantLit) => precioGiantLit.id === piezaGiantLit.id
        )
      : [];
  });
  piezasKappa.forEach((piezaKappa) => {
    piezaKappa.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((piezaKappa) => precioKappa.id === piezaKappa.id)
      : [];
  });
  piezasLino.forEach((piezaLino) => {
    piezaLino.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((precioLino) => precioLino.id === piezaLino.id)
      : [];
  });
  piezasMemphis.forEach((piezaMemphis) => {
    piezaMemphis.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter(
          (precioMemphis) => precioMemphis.id === piezaMemphis.id
        )
      : [];
  });
  piezasMistral.forEach((piezaMistral) => {
    piezaMistral.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter(
          (precioMistral) => precioMistral.id === piezaMistral.id
        )
      : [];
  });
  piezasLino.forEach((piezaLino) => {
    piezaLino.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((precioLino) => precioLino.id === piezaLino.id)
      : [];
  });
  piezasNadir.forEach((piezaNadir) => {
    piezaNadir.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((precioNadir) => precioNadir.id === piezaNadir.id)
      : [];
  });
  piezasOmega.forEach((piezaOmega) => {
    piezaOmega.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((precioOmega) => precioOmega.id === piezaOmega.id)
      : [];
  });
  piezasPlateaAlta.forEach((piezaPlateaAlta) => {
    piezaPlateaAlta.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter(
          (precioPlateaAlta) => precioPlateaAlta.id === piezaPlateaAlta.id
        )
      : [];
  });
  piezasPlateaBaja.forEach((piezaPlateaBaja) => {
    piezaPlateaBaja.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter(
          (precioPlateaBaja) => precioPlateaBaja.id === piezaPlateaBaja.id
        )
      : [];
  });
  piezasSigma.forEach((piezaSigma) => {
    piezaSigma.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((precioSigma) => precioSigma.id === piezaSigma.id)
      : [];
  });
  piezasSiroco.forEach((piezaSiroco) => {
    piezaSiroco.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter(
          (precioSiroco) => precioSiroco.id === piezaSiroco.id
        )
      : [];
  });
  piezasSisal.forEach((piezaSisal) => {
    piezaSisal.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((precioSisal) => precioSisal.id === piezaSisal.id)
      : [];
  });
  piezasTucson.forEach((piezaTucson) => {
    piezaTucson.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter(
          (precioTucson) => precioTucson.id === piezaTucson.id
        )
      : [];
  });
  piezasTassos.forEach((piezaTassos) => {
    piezaTassos.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter(
          (precioTassos) => precioTassos.id === piezaTassos.id
        )
      : [];
  });
  piezasTita.forEach((piezaTita) => {
    piezaTita.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((precioTita) => precioTita.id === piezaTita.id)
      : [];
  });
  piezasZenith.forEach((piezaZenith) => {
    piezaZenith.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter(
          (precioZenith) => precioZenith.id === piezaZenith.id
        )
      : [];
  });
  piezasZonda.forEach((piezaZonda) => {
    piezaZenith.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((precioZonda) => precioZonda.id === piezaZonda.id)
      : [];
  });

  actualizarUI();
}
