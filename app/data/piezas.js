/*---------------PRECIOS ALPHA----------------------*/
const preciosBianca = {
  comunBIAM110D: [
    { material: "SERIE 2", precio: 945 },
    { material: "SERIE 3", precio: 1012 },
    { material: "SERIE 4", precio: 1079 },
    { material: "SERIE 5", precio: 1163 },
  ],
  comunBIAM100D: [
    { material: "SERIE 2", precio: 904 },
    { material: "SERIE 3", precio: 968 },
    { material: "SERIE 4", precio: 1032 },
    { material: "SERIE 5", precio: 1111 },
  ],
  comunBIAM90D: [
    { material: "SERIE 2", precio: 878 },
    { material: "SERIE 3", precio: 940 },
    { material: "SERIE 4", precio: 1001 },
    { material: "SERIE 5", precio: 1078 },
  ],
  comunBIAM80D: [
    { material: "SERIE 2", precio: 834 },
    { material: "SERIE 3", precio: 893 },
    { material: "SERIE 4", precio: 951 },
    { material: "SERIE 5", precio: 1025 },
  ],
  comunBIAM110S: [
    { material: "SERIE 2", precio: 723 },
    { material: "SERIE 3", precio: 777 },
    { material: "SERIE 4", precio: 831 },
    { material: "SERIE 5", precio: 899 },
  ],
  comunBIAM100S: [
    { material: "SERIE 2", precio: 684 },
    { material: "SERIE 3", precio: 736 },
    { material: "SERIE 4", precio: 788 },
    { material: "SERIE 5", precio: 853 },
  ],
  comunBIAM90S: [
    { material: "SERIE 2", precio: 658 },
    { material: "SERIE 3", precio: 708 },
    { material: "SERIE 4", precio: 758 },
    { material: "SERIE 5", precio: 820 },
  ],
  comunBIAM80S: [
    { material: "SERIE 2", precio: 626 },
    { material: "SERIE 3", precio: 673 },
    { material: "SERIE 4", precio: 720 },
    { material: "SERIE 5", precio: 779 },
  ],
  comunBIAM110DM: [
    { material: "SERIE 2", precio: 922 },
    { material: "SERIE 3", precio: 984 },
    { material: "SERIE 4", precio: 1047 },
    { material: "SERIE 5", precio: 1125 },
  ],
  comunBIAM100DM: [
    { material: "SERIE 2", precio: 881 },
    { material: "SERIE 3", precio: 940 },
    { material: "SERIE 4", precio: 1000 },
    { material: "SERIE 5", precio: 1074 },
  ],
  comunBIAM90DM: [
    { material: "SERIE 2", precio: 855 },
    { material: "SERIE 3", precio: 912 },
    { material: "SERIE 4", precio: 969 },
    { material: "SERIE 5", precio: 1041 },
  ],
  comunBIAM80DM: [
    { material: "SERIE 2", precio: 812 },
    { material: "SERIE 3", precio: 867 },
    { material: "SERIE 4", precio: 921 },
    { material: "SERIE 5", precio: 989 },
  ],
  BIAT110D: [
    { material: "SERIE 2", precio: 1047 },
    { material: "SERIE 3", precio: 1126 },
    { material: "SERIE 4", precio: 1204 },
    { material: "SERIE 5", precio: 1303 },
  ],
  BIAT100D: [
    { material: "SERIE 2", precio: 1002 },
    { material: "SERIE 3", precio: 1078 },
    { material: "SERIE 4", precio: 1153 },
    { material: "SERIE 5", precio: 1248 },
  ],
  BIAT90D: [
    { material: "SERIE 2", precio: 974 },
    { material: "SERIE 3", precio: 1048 },
    { material: "SERIE 4", precio: 1121 },
    { material: "SERIE 5", precio: 1213 },
  ],
  BIAT80D: [
    { material: "SERIE 2", precio: 926 },
    { material: "SERIE 3", precio: 995 },
    { material: "SERIE 4", precio: 1065 },
    { material: "SERIE 5", precio: 1152 },
  ],
  BIAC110D: [
    { material: "SERIE 2", precio: 1103 },
    { material: "SERIE 3", precio: 1182 },
    { material: "SERIE 4", precio: 1261 },
    { material: "SERIE 5", precio: 1359 },
  ],
  BIAC100D: [
    { material: "SERIE 2", precio: 1068 },
    { material: "SERIE 3", precio: 1143 },
    { material: "SERIE 4", precio: 1219 },
    { material: "SERIE 5", precio: 1313 },
  ],
  BIAC90D: [
    { material: "SERIE 2", precio: 1044 },
    { material: "SERIE 3", precio: 1118 },
    { material: "SERIE 4", precio: 1191 },
    { material: "SERIE 5", precio: 1283 },
  ],
  BIAC80D: [
    { material: "SERIE 2", precio: 992 },
    { material: "SERIE 3", precio: 1062 },
    { material: "SERIE 4", precio: 1132 },
    { material: "SERIE 5", precio: 1219 },
  ],
  BIAR108S: [
    { material: "SERIE 2", precio: 850 },
    { material: "SERIE 3", precio: 896 },
    { material: "SERIE 4", precio: 943 },
    { material: "SERIE 5", precio: 1001 },
  ],
  BIAR108S: [
    { material: "SERIE 2", precio: 385 },
    { material: "SERIE 3", precio: 412 },
    { material: "SERIE 4", precio: 439 },
    { material: "SERIE 5", precio: 473 },
  ],
};

/*-------------------PIEZAS BIANCA--------------------*/
const piezasBianca = [
  {
    id: "None",
    title: "---Sin pieza seleccionada--",
    imageUrl: "..",
    categoria: "BIANCA",
  },
  // Módulos con brazo
  {
    id: "BIAM110D",
    title: "Mód. 110 con brazo der. (134 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM110D.png",
    price: preciosBianca.comunBIAM110D,
    medida: 134,
    categoria: "MODULOS",
  },
  {
    id: "BIAM110I",
    title: "Mód. 110 con brazo izq. (134 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM110I.png",
    price: preciosBianca.comunBIAM110D,
    medida: 134,
    categoria: "MODULOS",
  },
  {
    id: "BIAM100D",
    title: "Mód. 100 con brazo der. (124 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM100D.png",
    price: preciosBianca.comunBIAM100D,
    medida: 124,
    categoria: "MODULOS",
  },
  {
    id: "BIAM100I",
    title: "Mód. 100 con brazo izq. (124 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM100I.png",
    price: preciosBianca.comunBIAM100D,
    medida: 124,
    categoria: "MODULOS",
  },
  {
    id: "BIAM90D",
    title: "Mód. 90 con brazo der. (114 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM90D.png",
    price: preciosBianca.comunBIAM90D,
    medida: 114,
    categoria: "MODULOS",
  },
  {
    id: "BIAM90I",
    title: "Mód. 90 con brazo izq. (114 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM90I.png",
    price: preciosBianca.comunBIAM90D,
    medida: 114,
    categoria: "MODULOS",
  },
  {
    id: "BIAM80D",
    title: "Mód. 80 con brazo der. (104 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM80D.png",
    price: preciosBianca.comunBIAM80D,
    medida: 104,
    categoria: "MODULOS",
  },
  {
    id: "BIAM80I",
    title: "Mód. 80 con brazo izq. (104 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM80I.png",
    price: preciosBianca.comunBIAM80D,
    medida: 104,
    categoria: "MODULOS",
  },
  // Módulos sin brazo
  {
    id: "BIAM110S",
    title: "Mód. 110 sin brazo (110 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM110S.png",
    price: preciosBianca.comunBIAM110S,
    medida: 110,
    categoria: "MODULOS",
  },
  {
    id: "BIAM100S",
    title: "Mód. 100 sin brazo (100 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM100S.png",
    price: preciosBianca.comunBIAM100S,
    medida: 100,
    categoria: "MODULOS",
  },
  {
    id: "BIAM90S",
    title: "Mód. 90 sin brazo (90 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM90S.png",
    price: preciosBianca.comunBIAM90S,
    medida: 90,
    categoria: "MODULOS",
  },
  {
    id: "BIAM80S",
    title: "Mód. 80 sin brazo (80 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM80S.png",
    price: preciosBianca.comunBIAM80S,
    medida: 80,
    categoria: "MODULOS",
  },
  // Módulos con repisa
  {
    id: "BIAM110DM",
    title: "Mód. 110 con repisa (160 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM110DM.png",
    price: preciosBianca.comunBIAM110DM,
    medida: 160,
    categoria: "MODULOS",
  },
  {
    id: "BIAM100DM",
    title: "Mód. 100 con repisa (150 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM100DM.png",
    price: preciosBianca.comunBIAM100DM,
    medida: 150,
    categoria: "MODULOS",
  },
  {
    id: "BIAM90DM",
    title: "Mód. 90 con repisa (140 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM90DM.png",
    price: preciosBianca.comunBIAM90DM,
    medida: 140,
    categoria: "MODULOS",
  },
  {
    id: "BIAM80DM",
    title: "Mód. 80 con repisa (130 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM80DM.png",
    price: preciosBianca.comunBIAM80DM,
    medida: 130,
    categoria: "MODULOS",
  },
];
