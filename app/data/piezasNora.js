/---------------PRECIOS NORA----------------------/;
const preciosNora = {
  comunNORM110D: [
    { material: "SERIE 2", precio: 884 },
    { material: "SERIE 3", precio: 951 },
    { material: "SERIE 4", precio: 1018 },
    { material: "SERIE 5", precio: 1101 },
  ],
  comunNORM100D: [
    { material: "SERIE 2", precio: 846 },
    { material: "SERIE 3", precio: 910 },
    { material: "SERIE 4", precio: 973 },
    { material: "SERIE 5", precio: 1053 },
  ],
  comunNORM90D: [
    { material: "SERIE 2", precio: 823 },
    { material: "SERIE 3", precio: 885 },
    { material: "SERIE 4", precio: 947 },
    { material: "SERIE 5", precio: 1024 },
  ],
  comunNORM80D: [
    { material: "SERIE 2", precio: 782 },
    { material: "SERIE 3", precio: 841 },
    { material: "SERIE 4", precio: 899 },
    { material: "SERIE 5", precio: 972 },
  ],
  comunNORM110S: [
    { material: "SERIE 2", precio: 673 },
    { material: "SERIE 3", precio: 727 },
    { material: "SERIE 4", precio: 781 },
    { material: "SERIE 5", precio: 849 },
  ],
  comunNORM100S: [
    { material: "SERIE 2", precio: 638 },
    { material: "SERIE 3", precio: 689 },
    { material: "SERIE 4", precio: 741 },
    { material: "SERIE 5", precio: 806 },
  ],
  comunNORM90S: [
    { material: "SERIE 2", precio: 615 },
    { material: "SERIE 3", precio: 665 },
    { material: "SERIE 4", precio: 714 },
    { material: "SERIE 5", precio: 776 },
  ],
  comunNORM80S: [
    { material: "SERIE 2", precio: 584 },
    { material: "SERIE 3", precio: 631 },
    { material: "SERIE 4", precio: 679 },
    { material: "SERIE 5", precio: 738 },
  ],
  comunNORM110DM: [
    { material: "SERIE 2", precio: 872 },
    { material: "SERIE 3", precio: 934 },
    { material: "SERIE 4", precio: 997 },
    { material: "SERIE 5", precio: 1075 },
  ],
  comunNORM100DM: [
    { material: "SERIE 2", precio: 834 },
    { material: "SERIE 3", precio: 893 },
    { material: "SERIE 4", precio: 953 },
    { material: "SERIE 5", precio: 1027 },
  ],
  comunNORM90DM: [
    { material: "SERIE 2", precio: 812 },
    { material: "SERIE 3", precio: 869 },
    { material: "SERIE 4", precio: 926 },
    { material: "SERIE 5", precio: 998 },
  ],
  comunNORM80DM: [
    { material: "SERIE 2", precio: 771 },
    { material: "SERIE 3", precio: 825 },
    { material: "SERIE 4", precio: 880 },
    { material: "SERIE 5", precio: 948 },
  ],
  comunNORT110D: [
    { material: "SERIE 2", precio: 971 },
    { material: "SERIE 3", precio: 1050 },
    { material: "SERIE 4", precio: 1129 },
    { material: "SERIE 5", precio: 1227 },
  ],
  comunNORT100D: [
    { material: "SERIE 2", precio: 932 },
    { material: "SERIE 3", precio: 1007 },
    { material: "SERIE 4", precio: 1083 },
    { material: "SERIE 5", precio: 1177 },
  ],
  comunNORT90D: [
    { material: "SERIE 2", precio: 908 },
    { material: "SERIE 3", precio: 981 },
    { material: "SERIE 4", precio: 1055 },
    { material: "SERIE 5", precio: 1147 },
  ],
  comunNORT80D: [
    { material: "SERIE 2", precio: 863 },
    { material: "SERIE 3", precio: 932 },
    { material: "SERIE 4", precio: 1002 },
    { material: "SERIE 5", precio: 1089 },
  ],
  comunNORC110D: [
    { material: "SERIE 2", precio: 1048 },
    { material: "SERIE 3", precio: 1127 },
    { material: "SERIE 4", precio: 1205 },
    { material: "SERIE 5", precio: 1304 },
  ],
  comunNORC100D: [
    { material: "SERIE 2", precio: 1009 },
    { material: "SERIE 3", precio: 1085 },
    { material: "SERIE 4", precio: 1161 },
    { material: "SERIE 5", precio: 1255 },
  ],
  comunNORC90D: [
    { material: "SERIE 2", precio: 994 },
    { material: "SERIE 3", precio: 1068 },
    { material: "SERIE 4", precio: 1141 },
    { material: "SERIE 5", precio: 1233 },
  ],
  comunNORC80D: [
    { material: "SERIE 2", precio: 944 },
    { material: "SERIE 3", precio: 1014 },
    { material: "SERIE 4", precio: 1084 },
    { material: "SERIE 5", precio: 1171 },
  ],
  comunNORR108S: [
    { material: "SERIE 2", precio: 814 },
    { material: "SERIE 3", precio: 860 },
    { material: "SERIE 4", precio: 907 },
    { material: "SERIE 5", precio: 965 },
  ],
  comunNORP60S: [
    { material: "SERIE 2", precio: 350 },
    { material: "SERIE 3", precio: 377 },
    { material: "SERIE 4", precio: 404 },
    { material: "SERIE 5", precio: 438 },
  ],
};

/*-------------------PIEZAS NORA--------------------*/
const piezasNora = [
  {
    id: "None",
    title: "Sin pieza seleccionada",
    imageUrl: "..",
    categoria: "NORA",
  },
  {
    id: "NORM110D",
    title: "NORM110D Mód. 110 con brazo der. (134 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORM110D.png",
    price: preciosNora.comunNORM110D,
    medida: 134,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "NORM110I",
    title: "NORM110I Mód. 110 con brazo izq. (134 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORM110I.png",
    price: preciosNora.comunNORM110D,
    medida: 134,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "NORM100D",
    title: "NORM100D Mód. 100 con brazo der. (124 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORM100D.png",
    price: preciosNora.comunNORM100D,
    medida: 124,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "NORM100I",
    title: "NORM100I Mód. 100 con brazo izq. (124 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORM100I.png",
    price: preciosNora.comunNORM100D,
    medida: 124,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "NORM90D",
    title: "NORM90D Mód. 90 con brazo der. (114 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORM90D.png",
    price: preciosNora.comunNORM90D,
    medida: 114,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "NORM90I",
    title: "NORM90I Mód. 90 con brazo izq. (114 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORM90I.png",
    price: preciosNora.comunNORM90D,
    medida: 114,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "NORM80D",
    title: "NORM80D Mód. 80 con brazo der. (104 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORM80D.png",
    price: preciosNora.comunNORM80D,
    medida: 104,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "NORM80I",
    title: "NORM80I Mód. 80 con brazo izq. (104 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORM80I.png",
    price: preciosNora.comunNORM80D,
    medida: 104,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "NORM110S",
    title: "NORM110S Mód. 110 sin brazo (110 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORM110S.png",
    price: preciosNora.comunNORM110S,
    medida: 110,
    categoria: "MÓDULOS SIN BRAZO",
    medidap: 108,
  },
  {
    id: "NORM100S",
    title: "NORM100S Mód. 100 sin brazo (100 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORM100S.png",
    price: preciosNora.comunNORM100S,
    medida: 100,
    categoria: "MÓDULOS SIN BRAZO",
    medidap: 108,
  },
  {
    id: "NORM90S",
    title: "NORM90S Mód. 90 sin brazo (90 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORM90S.png",
    price: preciosNora.comunNORM90S,
    medida: 90,
    categoria: "MÓDULOS SIN BRAZO",
    medidap: 108,
  },
  {
    id: "NORM80S",
    title: "NORM80S Mód. 80 sin brazo (80 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORM80S.png",
    price: preciosNora.comunNORM80S,
    medida: 80,
    categoria: "MÓDULOS SIN BRAZO",
    medidap: 108,
  },
  {
    id: "NORM110DM",
    title: "NORM110DM Mód. 110 con repisa der. (160 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORM110DM.png",
    price: preciosNora.comunNORM110DM,
    medida: 160,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "NORM110IM",
    title: "NORM110IM Mód. 110 con repisa izq. (160 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORM110IM.png",
    price: preciosNora.comunNORM110DM,
    medida: 160,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "NORM100DM",
    title: "NORM100DM Mód. 100 con repisa der. (150 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORM100DM.png",
    price: preciosNora.comunNORM100DM,
    medida: 150,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "NORM100IM",
    title: "NORM100IM Mód. 100 con repisa izq. (150 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORM100IM.png",
    price: preciosNora.comunNORM100DM,
    medida: 150,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "NORM90DM",
    title: "NORM90DM Mód. 90 con repisa der. (140 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORM90DM.png",
    price: preciosNora.comunNORM90DM,
    medida: 140,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "NORM90IM",
    title: "NORM90IM Mód. 90 con repisa izq. (140 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORM90IM.png",
    price: preciosNora.comunNORM90DM,
    medida: 140,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "NORM80DM",
    title: "NORM80DM Mód. 80 con repisa der. (130 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORM80DM.png",
    price: preciosNora.comunNORM80DM,
    medida: 130,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "NORM80IM",
    title: "NORM80IM Mód. 80 con repisa izq. (130 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORM80IM.png",
    price: preciosNora.comunNORM80DM,
    medida: 130,
    categoria: "MÓDULOS CON BRAZO",
    medidap: 108,
  },
  {
    id: "NORT110D",
    title: "NORT110D Terminal 110 derecho (160 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORT110D.png",
    price: preciosNora.comunNORT110D,
    medida: 160,
    categoria: "TERMINAL",
    medidap: 108,
  },
  {
    id: "NORT110I",
    title: "NORT110I Terminal 110 izquierdo (160 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORT110I.png",
    price: preciosNora.comunNORT110D,
    medida: 160,
    categoria: "TERMINAL",
    medidap: 108,
  },
  {
    id: "NORT100D",
    title: "NORT100D Terminal 100 derecho (150 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORT100D.png",
    price: preciosNora.comunNORT100D,
    medida: 150,
    categoria: "TERMINAL",
    medidap: 108,
  },
  {
    id: "NORT100I",
    title: "NORT100I Terminal 100 izquierdo (150 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORT100I.png",
    price: preciosNora.comunNORT100D,
    medida: 150,
    categoria: "TERMINAL",
    medidap: 108,
  },
  {
    id: "NORT90D",
    title: "NORT90D Terminal 90 derecho (140 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORT90D.png",
    price: preciosNora.comunNORT90D,
    medida: 140,
    categoria: "TERMINAL",
    medidap: 108,
  },
  {
    id: "NORT90I",
    title: "NORT90I Terminal 90 izquierdo (140 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORT90I.png",
    price: preciosNora.comunNORT90D,
    medida: 140,
    categoria: "TERMINAL",
    medidap: 108,
  },
  {
    id: "NORT80D",
    title: "NORT80D Terminal 80 derecho (130 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORT80D.png",
    price: preciosNora.comunNORT80D,
    medida: 130,
    categoria: "TERMINAL",
    medidap: 108,
  },
  {
    id: "NORT80I",
    title: "NORT80I Terminal 80 izquierdo (130 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORT80I.png",
    price: preciosNora.comunNORT80D,
    medida: 130,
    categoria: "TERMINAL",
    medidap: 108,
  },
  {
    id: "NORC110D",
    title: "NORC110D Chaise longue 110 der. (134 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORC110D.png",
    price: preciosNora.comunNORC110D,
    medida: 134,
    categoria: "CHAISE LONGUE",
    medidap: 165,
  },
  {
    id: "NORC110I",
    title: "NORC110I Chaise longue 110 izq. (134 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORC110I.png",
    price: preciosNora.comunNORC110D,
    medida: 134,
    categoria: "CHAISE LONGUE",
    medidap: 165,
  },
  {
    id: "NORC100D",
    title: "NORC100D Chaise longue 100 der. (124 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORC100D.png",
    price: preciosNora.comunNORC100D,
    medida: 124,
    categoria: "CHAISE LONGUE",
    medidap: 165,
  },
  {
    id: "NORC100I",
    title: "NORC100I Chaise longue 100 izq. (124 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORC100I.png",
    price: preciosNora.comunNORC100D,
    medida: 124,
    categoria: "CHAISE LONGUE",
    medidap: 165,
  },
  {
    id: "NORC90D",
    title: "NORC90D Chaise longue 90 der. (114 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORC90D.png",
    price: preciosNora.comunNORC90D,
    medida: 114,
    categoria: "CHAISE LONGUE",
    medidap: 165,
  },
  {
    id: "NORC90I",
    title: "NORC90I Chaise longue 90 izq. (114 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORC90I.png",
    price: preciosNora.comunNORC90D,
    medida: 114,
    categoria: "CHAISE LONGUE",
    medidap: 165,
  },
  {
    id: "NORC80D",
    title: "NORC80D Chaise longue 80 der. (104 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORC80D.png",
    price: preciosNora.comunNORC80D,
    medida: 104,
    categoria: "CHAISE LONGUE",
    medidap: 165,
  },
  {
    id: "NORC80I",
    title: "NORC80I Chaise longue 80 izq. (104 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORC80I.png",
    price: preciosNora.comunNORC80D,
    medida: 104,
    categoria: "CHAISE LONGUE",
    medidap: 165,
  },
  {
    id: "NORR108S",
    title: "NORR108S Rincón cerrado (108 cm) *incluye 3 cojínes 45x46",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORR108S.png",
    price: preciosNora.comunNORR108S,
    categoria: "RINCÓN",
    medida: 108,
  },
  {
    id: "NORP60S",
    title: "NORP60S Pouff (60 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadoraImg/MODELOS/NORA/NORP60S.png",
    price: preciosNora.comunNORP60S,
    categoria: "RINCÓN",
    medidap: 108,
    medida: 60,
  },
];
