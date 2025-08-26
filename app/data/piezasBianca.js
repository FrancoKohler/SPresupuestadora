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
    medida: 0,
  },
  {
    id: "BIAM110D",
    title: "BIAM110D Mód. 110 con brazo der. (134 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM110D.png",
    price: preciosBianca.comunBIAM110D,
    medida: 134,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "BIAM110I",
    title: "BIAM110I Mód. 110 con brazo izq. (134 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM110I.png",
    price: preciosBianca.comunBIAM110D,
    medida: 134,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "BIAM100D",
    title: "BIAM100D Mód. 100 con brazo der. (124 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM100D.png",
    price: preciosBianca.comunBIAM100D,
    medida: 124,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "BIAM100I",
    title: "BIAM100I Mód. 100 con brazo izq. (124 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM100I.png",
    price: preciosBianca.comunBIAM100D,
    medida: 124,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "BIAM90D",
    title: "BIAM90D Mód. 90 con brazo der. (114 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM90D.png",
    price: preciosBianca.comunBIAM90D,
    medida: 114,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "BIAM90I",
    title: "BIAM90I Mód. 90 con brazo izq. (114 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM90I.png",
    price: preciosBianca.comunBIAM90D,
    medida: 114,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "BIAM80D",
    title: "BIAM80D Mód. 80 con brazo der. (104 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM80D.png",
    price: preciosBianca.comunBIAM80D,
    medida: 104,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "BIAM80I",
    title: "BIAM80I Mód. 80 con brazo izq. (104 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM80I.png",
    price: preciosBianca.comunBIAM80D,
    medida: 104,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "BIAM110S",
    title: "BIAM110S Mód. 110 sin brazo (110 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM110S.png",
    price: preciosBianca.comunBIAM110S,
    medida: 110,
    categoria: "MÓDULOS SIN BRAZO",
    medidap: 108,
  },
  {
    id: "BIAM100S",
    title: "BIAM100S Mód. 100 sin brazo (100 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM100S.png",
    price: preciosBianca.comunBIAM100S,
    medida: 100,
    categoria: "MÓDULOS SIN BRAZO",
    medidap: 108,
  },
  {
    id: "BIAM90S",
    title: "BIAM90S Mód. 90 sin brazo (90 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM90S.png",
    price: preciosBianca.comunBIAM90S,
    medida: 90,
    categoria: "MÓDULOS SIN BRAZO",
    medidap: 108,
  },
  {
    id: "BIAM80S",
    title: "BIAM80S Mód. 80 sin brazo (80 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM80S.png",
    price: preciosBianca.comunBIAM80S,
    medida: 80,
    categoria: "MÓDULOS SIN BRAZO",
    medidap: 108,
  },
  /*-------REPISAS------*/
  {
    id: "BIAM110DM",
    title: "BIAM110DM Mód. 110 con repisa der. (160 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM110DM.png",
    price: preciosBianca.comunBIAM110DM,
    medida: 160,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "BIAM110IM",
    title: "BIAM110IM Mód. 110 con repisa iza. (160 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM110IM.png",
    price: preciosBianca.comunBIAM110DM,
    medida: 160,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "BIAM100DM",
    title: "BIAM100DM Mód. 100 con repisa der. (150 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM100DM.png",
    price: preciosBianca.comunBIAM100DM,
    medida: 150,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "BIAM100IM",
    title: "BIAM100IM Mód. 100 con repisa izq. (150 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM100DM.png",
    price: preciosBianca.comunBIAM100DM,
    medida: 150,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "BIAM90DM",
    title: "BIAM90DM Mód. 90 con repisa der. (140 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM90DM.png",
    price: preciosBianca.comunBIAM90DM,
    medida: 140,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "BIAM90IM",
    title: "BIAM90IM Mód. 90 con repisa izq. (140 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM90IM.png",
    price: preciosBianca.comunBIAM90DM,
    medida: 140,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "BIAM80DM",
    title: "BIAM80DM Mód. 80 con repisa der. (130 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM80DM.png",
    price: preciosBianca.comunBIAM80DM,
    medida: 140,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "BIAM80IM",
    title: "BIAM80IM Mód. 80 con repisa izq. (130 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAM80IM.png",
    price: preciosBianca.comunBIAM80DM,
    medida: 140,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  /*-------Terminal------*/

  {
    id: "BIAT110D",
    title: "BIAT110D Terminal 110 derecho (160 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAT110D.png",
    price: preciosBianca.comunBIAT110D,
    medida: 160,
    categoria: "TERMINAL",
    medidap: 108,
  },
  {
    id: "BIAT110I",
    title: "BIAT110I Terminal 110 izquierdo (160 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAT110I.png",
    price: preciosBianca.comunBIAT110D,
    medida: 160,
    categoria: "TERMINAL",
    medidap: 108,
  },
  {
    id: "BIAT100D",
    title: "BIAT100D Terminal 100 derecho (150 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAT100D.png",
    price: preciosBianca.comunBIAT100D,
    medida: 150,
    categoria: "TERMINAL",
    medidap: 108,
  },
  {
    id: "BIAT100I",
    title: "BIAT100I Terminal 100 izquierdo (150 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAT100I.png",
    price: preciosBianca.comunBIAT100D,
    medida: 150,
    categoria: "TERMINAL",
    medidap: 108,
  },
  {
    id: "BIAT90D",
    title: "BIAT90D Terminal 90 derecho (140 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAT90D.png",
    price: preciosBianca.comunBIAT90D,
    medida: 140,
    categoria: "TERMINAL",
    medidap: 108,
  },
  {
    id: "BIAT90I",
    title: "BIAT90I Terminal 90 izquierdo (140 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAT90I.png",
    price: preciosBianca.comunBIAT90D,
    medida: 140,
    categoria: "TERMINAL",
    medidap: 108,
  },
  {
    id: "BIAT80D",
    title: "BIAT80D Terminal 80 derecho (130 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAT80D.png",
    price: preciosBianca.comunBIAT80D,
    medida: 130,
    categoria: "TERMINAL",
    medidap: 108,
  },
  {
    id: "BIAT80I",
    title: "BIAT80I Terminal 80 izquierdo (130 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAT80I.png",
    price: preciosBianca.comunBIAT80D,
    medida: 130,
    categoria: "TERMINAL",
    medidap: 108,
  },
  {
    id: "BIAC110D",
    title: "BIAC110D Chaise longue 110 der. (134 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAC110D.png",
    price: preciosBianca.comunBIAC110D,
    medida: 134,
    categoria: "CHAISE LONGUE",
    medidap: 165,
  },
  {
    id: "BIAC110I",
    title: "BIAC110I Chaise longue 110 izq. (134 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAC110I.png",
    price: preciosBianca.comunBIAC110D,
    medida: 134,
    categoria: "CHAISE LONGUE",
    medidap: 165,
  },
  {
    id: "BIAC100D",
    title: "BIAC100D Chaise longue 100 der. (124 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAC100D.png",
    price: preciosBianca.comunBIAC100D,
    medida: 124,
    categoria: "CHAISE LONGUE",
    medidap: 165,
  },
  {
    id: "BIAC100I",
    title: "BIAC100I Chaise longue 100 izq. (124 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAC100I.png",
    price: preciosBianca.comunBIAC100D,
    medida: 124,
    categoria: "CHAISE LONGUE",
    medidap: 165,
  },
  {
    id: "BIAC90D",
    title: "BIAC90D Chaise longue 90 der. (114 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAC90D.png",
    price: preciosBianca.comunBIAC90D,
    medida: 114,
    categoria: "CHAISE LONGUE",
    medidap: 165,
  },
  {
    id: "BIAC90I",
    title: "BIAC90I Chaise longue 90 izq. (114 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAC90I.png",
    price: preciosBianca.comunBIAC90D,
    medida: 114,
    categoria: "CHAISE LONGUE",
    medidap: 165,
  },
  {
    id: "BIAC80D",
    title: "BIAC80D Chaise longue 80 der. (104 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAC80D.png",
    price: preciosBianca.comunBIAC80D,
    medida: 104,
    categoria: "CHAISE LONGUE",
    medidap: 165,
  },
  {
    id: "BIAC80I",
    title: "BIAC80I Chaise longue 80 izq. (104 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAC80I.png",
    price: preciosBianca.comunBIAC80D,
    medida: 104,
    categoria: "CHAISE LONGUE",
    medidap: 165,
  },
  {
    id: "BIAR108S",
    title: "BIAR108S Rincón cerrado (108 cm) *incluye 3 cojínes 45x45",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAR108S.png",
    price: preciosBianca.comunBIAR108S,
    medida: 108,
    categoria: "RINCÓN",
  },
  {
    id: "BIAP60S",
    title: "BIAP60S Pouff (60 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/BIANCA/BIAP60S.png",
    price: preciosBianca.comunBIAP60S,
    medida: 60,
    categoria: "RINCÓN",
    medidap: 108,
  },
];
