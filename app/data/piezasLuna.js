const preciosLuna = {
  comunPROM100D: [
    { material: "SERIE 2", precio: 1110 },
    { material: "SERIE 3", precio: 1188 },
    { material: "SERIE 4", precio: 1267 },
    { material: "SERIE 5", precio: 1365 },
  ],
  comunPROM80D: [
    { material: "SERIE 2", precio: 1031 },
    { material: "SERIE 3", precio: 1103 },
    { material: "SERIE 4", precio: 1176 },
    { material: "SERIE 5", precio: 1266 },
  ],
  comunPROM100S: [
    { material: "SERIE 2", precio: 849 },
    { material: "SERIE 3", precio: 913 },
    { material: "SERIE 4", precio: 976 },
    { material: "SERIE 5", precio: 1055 },
  ],
  comunPROM80S: [
    { material: "SERIE 2", precio: 773 },
    { material: "SERIE 3", precio: 831 },
    { material: "SERIE 4", precio: 890 },
    { material: "SERIE 5", precio: 962 },
  ],
  comunPROT100D: [
    { material: "SERIE 2", precio: 1174 },
    { material: "SERIE 3", precio: 1269 },
    { material: "SERIE 4", precio: 1365 },
    { material: "SERIE 5", precio: 1483 },
  ],
  comunPROT80D: [
    { material: "SERIE 2", precio: 1083 },
    { material: "SERIE 3", precio: 1166 },
    { material: "SERIE 4", precio: 1248 },
    { material: "SERIE 5", precio: 1351 },
  ],
  comunPROC100D: [
    { material: "SERIE 2", precio: 1295 },
    { material: "SERIE 3", precio: 1387 },
    { material: "SERIE 4", precio: 1480 },
    { material: "SERIE 5", precio: 1596 },
  ],
  comunPROC80D: [
    { material: "SERIE 2", precio: 1226 },
    { material: "SERIE 3", precio: 1312 },
    { material: "SERIE 4", precio: 1398 },
    { material: "SERIE 5", precio: 1506 },
  ],
  comunPROR105S: [
    { material: "SERIE 2", precio: 1121 },
    { material: "SERIE 3", precio: 1177 },
    { material: "SERIE 4", precio: 1234 },
    { material: "SERIE 5", precio: 1304 },
  ],
  comunPROP60S: [
    { material: "SERIE 2", precio: 452 },
    { material: "SERIE 3", precio: 483 },
    { material: "SERIE 4", precio: 515 },
    { material: "SERIE 5", precio: 555 },
  ],
};

/*-------------------PIEZAS LUNA--------------------*/
const piezasLuna = [
  {
    id: "None",
    title: "Sin pieza seleccionada",
    imageUrl: "..",
    categoria: "LUNA",
    medida: 0,
  },
  {
    id: "PROM100D",
    title: "PROM100D Mód. 100 con brazo der. (134 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/LUNA/PROM100D.png",
    price: preciosLuna.comunPROM100D,
    medida: 134,
    categoria: "MODULOS",
    medidap: 105,
  },
  {
    id: "PROM100I",
    title: "PROM100I Mód. 100 con brazo izq. (134 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/LUNA/PROM100I.png",
    price: preciosLuna.comunPROM100D,
    medida: 134,
    categoria: "MODULOS",
    medidap: 105,
  },
  {
    id: "PROM80D",
    title: "PROM80D Mód. 80 con brazo der. (114 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/LUNA/PROM80D.png",
    price: preciosLuna.comunPROM80D,
    medida: 114,
    categoria: "MODULOS",
    medidap: 105,
  },
  {
    id: "PROM80I",
    title: "PROM80I Mód. 80 con brazo izq. (114 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/LUNA/PROM80I.png",
    price: preciosLuna.comunPROM80D,
    medida: 114,
    categoria: "MODULOS",
    medidap: 105,
  },
  {
    id: "PROM100S",
    title: "PROM100S Mód. 100 sin brazo (100 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/LUNA/PROM100S.png",
    price: preciosLuna.comunPROM100S,
    medida: 100,
    categoria: "MODULOS",
    medidap: 105,
  },
  {
    id: "PROM80S",
    title: "PROM80S Mód. 80 sin brazo (80 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/LUNA/PROM80S.png",
    price: preciosLuna.comunPROM80S,
    medida: 80,
    categoria: "MODULOS",
    medidap: 105,
  },
  {
    id: "PROT100D",
    title: "PROT100D Terminal 100 der. (150 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/LUNA/PROT100D.png",
    price: preciosLuna.comunPROT100D,
    medida: 150,
    categoria: "TERMINAL",
    medidap: 105,
  },
  {
    id: "PROT100I",
    title: "PROT100I Terminal 100 izq. (150 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/LUNA/PROT100I.png",
    price: preciosLuna.comunPROT100D,
    medida: 150,
    categoria: "TERMINAL",
    medidap: 105,
  },
  {
    id: "PROT80D",
    title: "PROT80D Terminal 80 der. (130 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/LUNA/PROT80D.png",
    price: preciosLuna.comunPROT80D,
    medida: 130,
    categoria: "TERMINAL",
    medidap: 105,
  },
  {
    id: "PROT80I",
    title: "PROT80I Terminal 80 izq. (130 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/LUNA/PROT80I.png",
    price: preciosLuna.comunPROT80D,
    medida: 130,
    categoria: "TERMINAL",
    medidap: 105,
  },
  {
    id: "PROC100D",
    title: "PROC100D Chaise longue 100 der. (134 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/LUNA/PROC100D.png",
    price: preciosLuna.comunPROC100D,
    medida: 134,
    categoria: "CHAISE LONGUE",
    medidap: 150,
  },
  {
    id: "PROC100I",
    title: "PROC100I Chaise longue 100 izq. (134 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/LUNA/PROC100I.png",
    price: preciosLuna.comunPROC100D,
    medida: 134,
    categoria: "CHAISE LONGUE",
    medidap: 150,
  },
  {
    id: "PROC80D",
    title: "PROC80D Chaise longue 80 der. (114 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/LUNA/PROC80D.png",
    price: preciosLuna.comunPROC80D,
    medida: 114,
    categoria: "CHAISE LONGUE",
    medidap: 150,
  },
  {
    id: "PROC80I",
    title: "PROC80I Chaise longue 80 izq. (114 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/LUNA/PROC80I.png",
    price: preciosLuna.comunPROC80D,
    medida: 114,
    categoria: "CHAISE LONGUE",
    medidap: 150,
  },
  {
    id: "PROR105S",
    title: "PROR105S Rincón cerrado (105 cm) *incluye 3 cojínes 45x45",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/LUNA/PROR105S.png",
    price: preciosLuna.comunPROR105S,
    medida: 105,
    categoria: "RINCÓN",
  },
  {
    id: "PROP60S",
    title: "PROP60S Pouff (60 cm)",
    imageUrl:
      "https://francokohler.github.io/SPresupuestadora/assets/MODELOS/LUNA/PROP60S.png",
    price: preciosLuna.comunPROP60S,
    medida: 60,
    categoria: "RINCÓN",
    medidap: 105,
  },
];
