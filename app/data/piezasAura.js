/*---------------PRECIOS AURA----------------------*/
const preciosAura = {
  comunAURM110D: [
    { material: "SERIE 2", precio: 985 },
    { material: "SERIE 3", precio: 1055 },
    { material: "SERIE 4", precio: 1126 },
    { material: "SERIE 5", precio: 1213 },
  ],
  comunAURM100D: [
    { material: "SERIE 2", precio: 954 },
    { material: "SERIE 3", precio: 1020 },
    { material: "SERIE 4", precio: 1086 },
    { material: "SERIE 5", precio: 1168 },
  ],
  comunAURM90D: [
    { material: "SERIE 2", precio: 926 },
    { material: "SERIE 3", precio: 987 },
    { material: "SERIE 4", precio: 1049 },
    { material: "SERIE 5", precio: 1126 },
  ],
  comunAURM80D: [
    { material: "SERIE 2", precio: 880 },
    { material: "SERIE 3", precio: 938 },
    { material: "SERIE 4", precio: 996 },
    { material: "SERIE 5", precio: 1070 },
  ],
  comunAURM110S: [
    { material: "SERIE 2", precio: 766 },
    { material: "SERIE 3", precio: 825 },
    { material: "SERIE 4", precio: 885 },
    { material: "SERIE 5", precio: 959 },
  ],
  comunAURM100S: [
    { material: "SERIE 2", precio: 734 },
    { material: "SERIE 3", precio: 789 },
    { material: "SERIE 4", precio: 844 },
    { material: "SERIE 5", precio: 913 },
  ],
  comunAURM90S: [
    { material: "SERIE 2", precio: 706 },
    { material: "SERIE 3", precio: 757 },
    { material: "SERIE 4", precio: 808 },
    { material: "SERIE 5", precio: 871 },
  ],
  comunAURM80S: [
    { material: "SERIE 2", precio: 671 },
    { material: "SERIE 3", precio: 719 },
    { material: "SERIE 4", precio: 767 },
    { material: "SERIE 5", precio: 827 },
  ],
  comunAURT110D: [
    { material: "SERIE 2", precio: 1103 },
    { material: "SERIE 3", precio: 1187 },
    { material: "SERIE 4", precio: 1271 },
    { material: "SERIE 5", precio: 1376 },
  ],
  comunAURT100D: [
    { material: "SERIE 2", precio: 1070 },
    { material: "SERIE 3", precio: 1151 },
    { material: "SERIE 4", precio: 1232 },
    { material: "SERIE 5", precio: 1333 },
  ],
  comunAURT90D: [
    { material: "SERIE 2", precio: 1044 },
    { material: "SERIE 3", precio: 1123 },
    { material: "SERIE 4", precio: 1202 },
    { material: "SERIE 5", precio: 1300 },
  ],
  comunAURT80D: [
    { material: "SERIE 2", precio: 992 },
    { material: "SERIE 3", precio: 1067 },
    { material: "SERIE 4", precio: 1142 },
    { material: "SERIE 5", precio: 1235 },
  ],
  comunAURC110D: [
    { material: "SERIE 2", precio: 1159 },
    { material: "SERIE 3", precio: 1243 },
    { material: "SERIE 4", precio: 1327 },
    { material: "SERIE 5", precio: 1433 },
  ],
  comunAURC100D: [
    { material: "SERIE 2", precio: 1124 },
    { material: "SERIE 3", precio: 1205 },
    { material: "SERIE 4", precio: 1286 },
    { material: "SERIE 5", precio: 1387 },
  ],
  comunAURC90D: [
    { material: "SERIE 2", precio: 1103 },
    { material: "SERIE 3", precio: 1181 },
    { material: "SERIE 4", precio: 1260 },
    { material: "SERIE 5", precio: 1359 },
  ],
  comunAURC80D: [
    { material: "SERIE 2", precio: 1047 },
    { material: "SERIE 3", precio: 1122 },
    { material: "SERIE 4", precio: 1197 },
    { material: "SERIE 5", precio: 1291 },
  ],
  comunAURR108S: [
    { material: "SERIE 2", precio: 930 },
    { material: "SERIE 3", precio: 995 },
    { material: "SERIE 4", precio: 1059 },
    { material: "SERIE 5", precio: 1140 },
  ],
  comunAURP60S: [
    { material: "SERIE 2", precio: 415 },
    { material: "SERIE 3", precio: 442 },
    { material: "SERIE 4", precio: 469 },
    { material: "SERIE 5", precio: 502 },
  ],
};
const piezasAura = [
  {
    id: "None",
    title: "Sin pieza seleccionada",
    imageUrl: "..",
    categoria: "AURA",
    medida: 0,
  },
  {
    id: "AURM110D",
    title: "AURM110D Mód. 110 con brazo der. (136 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURM110D.png",
    price: preciosAura.comunAURM110D,
    medida: 136,
    categoria: "MODULOS",
    medidap: 108,
  },
  {
    id: "AURM110I",
    title: "AURM110I Mód. 110 con brazo izq. (136 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURM110I.png",
    price: preciosAura.comunAURM110D,
    medida: 136,
    categoria: "MODULOS",
    medidap: 108,
  },
  {
    id: "AURM100D",
    title: "AURM100D Mód. 100 con brazo der. (126 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURM100D.png",
    price: preciosAura.comunAURM100D,
    medida: 126,
    categoria: "MODULOS",
    medidap: 108,
  },
  {
    id: "AURM100I",
    title: "AURM100I Mód. 100 con brazo izq. (126 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURM100I.png",
    price: preciosAura.comunAURM100D,
    medida: 126,
    categoria: "MODULOS",
    medidap: 108,
  },
  {
    id: "AURM90D",
    title: "AURM90D Mód. 90 con brazo der. (116 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURM90D.png",
    price: preciosAura.comunAURM90D,
    medida: 116,
    categoria: "MODULOS",
    medidap: 108,
  },
  {
    id: "AURM90I",
    title: "AURM90I Mód. 90 con brazo izq. (116 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURM90I.png",
    price: preciosAura.comunAURM90D,
    medida: 116,
    categoria: "MODULOS",
    medidap: 108,
  },
  {
    id: "AURM80D",
    title: "AURM80D Mód. 80 con brazo der. (106 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURM80D.png",
    price: preciosAura.comunAURM80D,
    medida: 106,
    categoria: "MODULOS",
    medidap: 108,
  },
  {
    id: "AURM80I",
    title: "AURM80I Mód. 80 con brazo izq. (106 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURM80I.png",
    price: preciosAura.comunAURM80D,
    medida: 106,
    categoria: "MODULOS",
    medidap: 108,
  },
  {
    id: "AURM110S",
    title: "AURM110S Mód. 110 sin brazo (110 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURM110S.png",
    price: preciosAura.comunAURM110S,
    medida: 110,
    categoria: "MODULOS",
    medidap: 108,
  },
  {
    id: "AURM100S",
    title: "AURM100S Mód. 100 sin brazo (100 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURM100S.png",
    price: preciosAura.comunAURM100S,
    medida: 100,
    categoria: "MODULOS",
    medidap: 108,
  },
  {
    id: "AURM90S",
    title: "AURM90S Mód. 90 sin brazo (90 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURM90S.png",
    price: preciosAura.comunAURM90S,
    medida: 90,
    categoria: "MODULOS",
    medidap: 108,
  },
  {
    id: "AURM80S",
    title: "AURM80S Mód. 80 sin brazo (80 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURM80S.png",
    price: preciosAura.comunAURM80S,
    medida: 80,
    categoria: "MODULOS",
    medidap: 108,
  },
  {
    id: "AURT110D",
    title: "AURT110D Terminal 110 derecho (160 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURT110D.png",
    price: preciosAura.comunAURT110D,
    medida: 160,
    categoria: "TERMINAL",
    medidap: 108,
  },
  {
    id: "AURT110I",
    title: "AURT110I Terminal 110 izquierdo (160 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURT110I.png",
    price: preciosAura.comunAURT110D,
    medida: 160,
    categoria: "TERMINAL",
    medidap: 108,
  },
  {
    id: "AURT100D",
    title: "AURT100D Terminal 100 derecho (150 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURT100D.png",
    price: preciosAura.comunAURT100D,
    medida: 150,
    categoria: "TERMINAL",
    medidap: 108,
  },
  {
    id: "AURT100I",
    title: "AURT100I Terminal 100 izquierdo (150 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURT100I.png",
    price: preciosAura.comunAURT100D,
    medida: 150,
    categoria: "TERMINAL",
    medidap: 108,
  },
  {
    id: "AURT90D",
    title: "AURT90D Terminal 90 derecho (140 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURT90D.png",
    price: preciosAura.comunAURT90D,
    medida: 140,
    categoria: "TERMINAL",
    medidap: 108,
  },
  {
    id: "AURT90I",
    title: "AURT90I Terminal 90 izquierdo (140 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURT90I.png",
    price: preciosAura.comunAURT90D,
    medida: 140,
    categoria: "TERMINAL",
    medidap: 108,
  },
  {
    id: "AURT80D",
    title: "AURT80D Terminal 80 derecho (130 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURT80D.png",
    price: preciosAura.comunAURT80D,
    medida: 130,
    categoria: "TERMINAL",
    medidap: 108,
  },
  {
    id: "AURT80I",
    title: "AURT80I Terminal 80 izquierdo (130 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURT80I.png",
    price: preciosAura.comunAURT80D,
    medida: 130,
    categoria: "TERMINAL",
    medidap: 108,
  },
  {
    id: "AURC110D",
    title: "AURC110D Chaise longue 110 der. (136 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURC110D.png",
    price: preciosAura.comunAURC110D,
    medida: 136,
    categoria: "CHAISE LONGUE",
    medidap: 165,
  },
  {
    id: "AURC110I",
    title: "AURC110I Chaise longue 110 izq. (136 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURC110I.png",
    price: preciosAura.comunAURC110D,
    medida: 136,
    categoria: "CHAISE LONGUE",
    medidap: 165,
  },
  {
    id: "AURC100D",
    title: "AURC100D Chaise longue 100 der. (126 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURC100D.png",
    price: preciosAura.comunAURC100D,
    medida: 126,
    categoria: "CHAISE LONGUE",
    medidap: 165,
  },
  {
    id: "AURC100I",
    title: "AURC100I Chaise longue 100 izq. (126 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURC100I.png",
    price: preciosAura.comunAURC100D,
    medida: 126,
    categoria: "CHAISE LONGUE",
    medidap: 165,
  },
  {
    id: "AURC90D",
    title: "AURC90D Chaise longue 90 der. (116 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURC90D.png",
    price: preciosAura.comunAURC90D,
    medida: 116,
    categoria: "CHAISE LONGUE",
    medidap: 165,
  },
  {
    id: "AURC90I",
    title: "AURC90I Chaise longue 90 izq. (116 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURC90I.png",
    price: preciosAura.comunAURC90D,
    medida: 116,
    categoria: "CHAISE LONGUE",
    medidap: 165,
  },
  {
    id: "AURC80D",
    title: "AURC80D Chaise longue 80 der. (106 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURC80D.png",
    price: preciosAura.comunAURC80D,
    medida: 106,
    categoria: "CHAISE LONGUE",
    medidap: 165,
  },
  {
    id: "AURC80I",
    title: "AURC80I Chaise longue 80 izq. (106 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURC80I.png",
    price: preciosAura.comunAURC80D,
    medida: 106,
    categoria: "CHAISE LONGUE",
    medidap: 165,
  },
  {
    id: "AURP60S",
    title: "AURP60S Pouff (60 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURP60S.png",
    price: preciosAura.comunAURP60S,
    medida: 60,
    categoria: "RINCÓN",
    medidap: 108,
  },
  {
    id: "AURR108S",
    title: "AURR108S Rincón cerrado (108 cm) *incluye 3 cojínes 45x45",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/AURA/AURR108S.png",
    price: preciosAura.comunAURR108S,
    medida: 108,
    categoria: "RINCÓN",
    medidap: 108,
  },
];
