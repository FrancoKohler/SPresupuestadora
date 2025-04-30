/*---------------PRECIOS BIANCA----------------------*/
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
  comunBIAT110D: [
    { material: "SERIE 2", precio: 1047 },
    { material: "SERIE 3", precio: 1126 },
    { material: "SERIE 4", precio: 1204 },
    { material: "SERIE 5", precio: 1303 },
  ],
  comunBIAT100D: [
    { material: "SERIE 2", precio: 1002 },
    { material: "SERIE 3", precio: 1078 },
    { material: "SERIE 4", precio: 1153 },
    { material: "SERIE 5", precio: 1248 },
  ],
  comunBIAT90D: [
    { material: "SERIE 2", precio: 974 },
    { material: "SERIE 3", precio: 1048 },
    { material: "SERIE 4", precio: 1121 },
    { material: "SERIE 5", precio: 1213 },
  ],
  comunBIAT80D: [
    { material: "SERIE 2", precio: 926 },
    { material: "SERIE 3", precio: 995 },
    { material: "SERIE 4", precio: 1065 },
    { material: "SERIE 5", precio: 1152 },
  ],
  comunBIAC110D: [
    { material: "SERIE 2", precio: 1103 },
    { material: "SERIE 3", precio: 1182 },
    { material: "SERIE 4", precio: 1261 },
    { material: "SERIE 5", precio: 1359 },
  ],
  comunBIAC100D: [
    { material: "SERIE 2", precio: 1068 },
    { material: "SERIE 3", precio: 1143 },
    { material: "SERIE 4", precio: 1219 },
    { material: "SERIE 5", precio: 1313 },
  ],
  comunBIAC90D: [
    { material: "SERIE 2", precio: 1044 },
    { material: "SERIE 3", precio: 1118 },
    { material: "SERIE 4", precio: 1191 },
    { material: "SERIE 5", precio: 1283 },
  ],
  comunBIAC80D: [
    { material: "SERIE 2", precio: 992 },
    { material: "SERIE 3", precio: 1062 },
    { material: "SERIE 4", precio: 1132 },
    { material: "SERIE 5", precio: 1219 },
  ],
  comunBIAR108S: [
    { material: "SERIE 2", precio: 850 },
    { material: "SERIE 3", precio: 896 },
    { material: "SERIE 4", precio: 943 },
    { material: "SERIE 5", precio: 1001 },
  ],
  comunBIAP60S: [
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
    title: "Sin pieza seleccionada",
    imageUrl: "..",
    categoria: "BIANCA",
  },
  {
    id: "BIAM110D",
    title: "BIAM110D Mód. 110 con brazo der. (134 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM110D.svg",
    price: preciosBianca.comunBIAM110D,
    medida: 134,
    categoria: "MODULOS",
  },
  {
    id: "BIAM110I",
    title: "BIAM110I Mód. 110 con brazo izq. (134 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM110I.svg",
    price: preciosBianca.comunBIAM110D,
    medida: 134,
    categoria: "MODULOS",
  },
  {
    id: "BIAM100D",
    title: "BIAM100D Mód. 100 con brazo der. (124 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM100D.svg",
    price: preciosBianca.comunBIAM100D,
    medida: 124,
    categoria: "MODULOS",
  },
  {
    id: "BIAM100I",
    title: "BIAM100I Mód. 100 con brazo izq. (124 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM100I.svg",
    price: preciosBianca.comunBIAM100D,
    medida: 124,
    categoria: "MODULOS",
  },
  {
    id: "BIAM90D",
    title: "BIAM90D Mód. 90 con brazo der. (114 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM90D.svg",
    price: preciosBianca.comunBIAM90D,
    medida: 114,
    categoria: "MODULOS",
  },
  {
    id: "BIAM90I",
    title: "BIAM90I Mód. 90 con brazo izq. (114 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM90I.svg",
    price: preciosBianca.comunBIAM90D,
    medida: 114,
    categoria: "MODULOS",
  },
  {
    id: "BIAM80D",
    title: "BIAM80D Mód. 80 con brazo der. (104 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM80D.svg",
    price: preciosBianca.comunBIAM80D,
    medida: 104,
    categoria: "MODULOS",
  },
  {
    id: "BIAM80I",
    title: "BIAM80I Mód. 80 con brazo izq. (104 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM80I.svg",
    price: preciosBianca.comunBIAM80D,
    medida: 104,
    categoria: "MODULOS",
  },
  {
    id: "BIAM110S",
    title: "BIAM110S Mód. 110 sin brazo (110 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM110S.svg",
    price: preciosBianca.comunBIAM110S,
    medida: 110,
    categoria: "MODULOS",
  },
  {
    id: "BIAM100S",
    title: "BIAM100S Mód. 100 sin brazo (100 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM100S.svg",
    price: preciosBianca.comunBIAM100S,
    medida: 100,
    categoria: "MODULOS",
  },
  {
    id: "BIAM90S",
    title: "BIAM90S Mód. 90 sin brazo (90 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM90S.svg",
    price: preciosBianca.comunBIAM90S,
    medida: 90,
    categoria: "MODULOS",
  },
  {
    id: "BIAM80S",
    title: "BIAM80S Mód. 80 sin brazo (80 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM80S.svg",
    price: preciosBianca.comunBIAM80S,
    medida: 80,
    categoria: "MODULOS",
  },
  {
    id: "BIAC110D",
    title: "BIAC110D Chaise longue 110 der. (134 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAC110D.svg",
    price: preciosBianca.comunBIAC110D,
    medida: 134,
    categoria: "CHAISE LONGUE",
  },
  {
    id: "BIAC110I",
    title: "BIAC110I Chaise longue 110 izq. (134 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAC110I.svg",
    price: preciosBianca.comunBIAC110D,
    medida: 134,
    categoria: "CHAISE LONGUE",
  },
  {
    id: "BIAC100D",
    title: "BIAC100D Chaise longue 100 der. (124 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAC100D.svg",
    price: preciosBianca.comunBIAC100D,
    medida: 124,
    categoria: "CHAISE LONGUE",
  },
  {
    id: "BIAC100I",
    title: "BIAC100I Chaise longue 100 izq. (124 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAC100I.svg",
    price: preciosBianca.comunBIAC100D,
    medida: 124,
    categoria: "CHAISE LONGUE",
  },
  {
    id: "BIAC90D",
    title: "BIAC90D Chaise longue 90 der. (114 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAC90D.svg",
    price: preciosBianca.comunBIAC90D,
    medida: 114,
    categoria: "CHAISE LONGUE",
  },
  {
    id: "BIAC90I",
    title: "BIAC90I Chaise longue 90 izq. (114 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAC90I.svg",
    price: preciosBianca.comunBIAC90D,
    medida: 114,
    categoria: "CHAISE LONGUE",
  },
  {
    id: "BIAC80D",
    title: "BIAC80D Chaise longue 80 der. (104 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAC80D.svg",
    price: preciosBianca.comunBIAC80D,
    medida: 104,
    categoria: "CHAISE LONGUE",
  },
  {
    id: "BIAC80I",
    title: "BIAC80I Chaise longue 80 izq. (104 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAC80I.svg",
    price: preciosBianca.comunBIAC80D,
    medida: 104,
    categoria: "CHAISE LONGUE",
  },
  {
    id: "BIAR108S",
    title: "BIAR108S Rincón cerrado (108 cm) *incluye 3 cojínes 45x45",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAR108S.svg",
    price: preciosBianca.comunBIAR108S,
    medida: 108,
    categoria: "RINCÓN",
  },
  {
    id: "BIAP60S",
    title: "BIAP60S Pouff (60 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAP60S.svg",
    price: preciosBianca.comunBIAP60S,
    medida: 60,
    categoria: "RINCÓN",
  },
];
