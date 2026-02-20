import {db} from "../services/firebase"
import {addDoc, collection, getDocs} from "firebase/firebase"

export async function addProductFirebase (product={}){
    try{
        const docRef = await addDoc(collection(db, "kamiCollections"), product)
        console.log("Document written with ID: ", docRef.id);
    }catch(e){
        console.error("Error adding document: ", e)
    }
}



export async function getItems(){
    const querySnapshot = await getDocs(collection(db, 'kamiCollections'));
    querySnapshot.forEach(doc=> console.log(`${doc.id}=>${doc.data}`))
}



/* const productos_collection =[
  {
    "id": "FIG-001",
    "nombre": "Figura Goku Ultra Instinct 28 cm",
    "categoria": "Figura Anime",
    "anime": "Dragon Ball Super",
    "precio": 1899,
    "moneda": "MXN",
    "stock": 12,
    "sku": "KAMI-GOKU-UI-28",
    "imagen": "goku_ui.jpg",
    "detalle": "Figura premium de Goku en Ultra Instinct con efectos de energía translúcida y base rocosa temática.",
    "especificaciones": {
      "altura": "28 cm",
      "material": "PVC + ABS",
      "escala": "1/6",
      "marca": "Bandai",
      "edicion": "Estándar"
    },
    "contenido_caja": ["Figura", "Base", "Efectos de energía", "Caja ilustrada"],
    "condicion_empaque": "Caja nueva sellada",
    "rating": 4.9,
    "destacado": true
  },
  {
    "id": "FIG-002",
    "nombre": "Figura Naruto Modo Sabio 22 cm",
    "categoria": "Figura Anime",
    "anime": "Naruto Shippuden",
    "precio": 1650,
    "moneda": "MXN",
    "stock": 8,
    "sku": "KAMI-NARUTO-SM-22",
    "imagen": "naruto_sage.jpg",
    "detalle": "Naruto en Modo Sabio con base de roca y efecto de chakra dinámico.",
    "especificaciones": {
      "altura": "22 cm",
      "material": "PVC",
      "escala": "1/8",
      "marca": "Banpresto",
      "edicion": "Collector"
    },
    "contenido_caja": ["Figura", "Base temática", "Caja"],
    "condicion_empaque": "Caja con ventana",
    "rating": 4.8,
    "destacado": false
  },
  {
    "id": "FIG-003",
    "nombre": "Figura Luffy Gear 5 25 cm",
    "categoria": "Figura Anime",
    "anime": "One Piece",
    "precio": 1999,
    "moneda": "MXN",
    "stock": 5,
    "sku": "KAMI-LUFFY-G5-25",
    "imagen": "luffy_g5.jpg",
    "detalle": "Luffy Gear 5 con efecto de nubes y pose dinámica de ataque.",
    "especificaciones": {
      "altura": "25 cm",
      "material": "PVC + Resina",
      "escala": "1/7",
      "marca": "Bandai",
      "edicion": "Limitada"
    },
    "contenido_caja": ["Figura", "Base con efectos", "Caja premium"],
    "condicion_empaque": "Caja premium",
    "rating": 5.0,
    "destacado": true
  },
  {
    "id": "FIG-004",
    "nombre": "Figura Gojo Satoru 23 cm",
    "categoria": "Figura Anime",
    "anime": "Jujutsu Kaisen",
    "precio": 1750,
    "moneda": "MXN",
    "stock": 6,
    "sku": "KAMI-GOJO-23",
    "imagen": "gojo.jpg",
    "detalle": "Gojo con efecto de energía azul translúcida y base de roca.",
    "especificaciones": {
      "altura": "23 cm",
      "material": "PVC",
      "escala": "1/7",
      "marca": "SEGA",
      "edicion": "Estándar"
    },
    "contenido_caja": ["Figura", "Base", "Manual"],
    "condicion_empaque": "Caja ilustrada",
    "rating": 4.9,
    "destacado": true
  },
  {
    "id": "FIG-005",
    "nombre": "Figura Tanjiro Kamado 20 cm",
    "categoria": "Figura Anime",
    "anime": "Demon Slayer",
    "precio": 1499,
    "moneda": "MXN",
    "stock": 10,
    "sku": "KAMI-TANJIRO-20",
    "imagen": "tanjiro_20.jpg",
    "detalle": "Tanjiro en pose de ataque con efecto de llamas esculpidas.",
    "especificaciones": {
      "altura": "20 cm",
      "material": "PVC",
      "escala": "1/8",
      "marca": "Taito",
      "edicion": "Estándar"
    },
    "contenido_caja": ["Figura", "Base fuego", "Caja"],
    "condicion_empaque": "Caja nueva",
    "rating": 4.7,
    "destacado": false
  },
  {
    "id": "FIG-006",
    "nombre": "Figura Levi Ackerman 24 cm",
    "categoria": "Figura Anime",
    "anime": "Attack on Titan",
    "precio": 1850,
    "moneda": "MXN",
    "stock": 7,
    "sku": "KAMI-LEVI-24",
    "imagen": "levi_24.jpg",
    "detalle": "Levi en pose de combate con equipo tridimensional y capa.",
    "especificaciones": {
      "altura": "24 cm",
      "material": "PVC",
      "escala": "1/7",
      "marca": "Good Smile",
      "edicion": "Collector"
    },
    "contenido_caja": ["Figura", "Base urbana", "Caja premium"],
    "condicion_empaque": "Caja sellada",
    "rating": 4.9,
    "destacado": true
  },
  {
    "id": "FIG-007",
    "nombre": "Figura Itachi Uchiha 21 cm",
    "categoria": "Figura Anime",
    "anime": "Naruto Shippuden",
    "precio": 1599,
    "moneda": "MXN",
    "stock": 9,
    "sku": "KAMI-ITACHI-21",
    "imagen": "itachi_21.jpg",
    "detalle": "Itachi con capa Akatsuki y efecto Sharingan.",
    "especificaciones": {
      "altura": "21 cm",
      "material": "PVC",
      "escala": "1/8",
      "marca": "Banpresto",
      "edicion": "Estándar"
    },
    "contenido_caja": ["Figura", "Base Akatsuki"],
    "condicion_empaque": "Caja nueva",
    "rating": 4.8,
    "destacado": false
  },
  {
    "id": "FIG-008",
    "nombre": "Figura Mikasa Ackerman 23 cm",
    "categoria": "Figura Anime",
    "anime": "Attack on Titan",
    "precio": 1699,
    "moneda": "MXN",
    "stock": 6,
    "sku": "KAMI-MIKASA-23",
    "imagen": "mikasa_23.jpg",
    "detalle": "Mikasa en pose dinámica con espadas y efecto de movimiento.",
    "especificaciones": {
      "altura": "23 cm",
      "material": "PVC",
      "escala": "1/7",
      "marca": "SEGA",
      "edicion": "Estándar"
    },
    "contenido_caja": ["Figura", "Base efecto viento"],
    "condicion_empaque": "Caja ilustrada",
    "rating": 4.7,
    "destacado": false
  },
  {
    "id": "FIG-009",
    "nombre": "Figura Zoro Enma 26 cm",
    "categoria": "Figura Anime",
    "anime": "One Piece",
    "precio": 1899,
    "moneda": "MXN",
    "stock": 4,
    "sku": "KAMI-ZORO-26",
    "imagen": "zoro_26.jpg",
    "detalle": "Zoro con espada Enma y efecto de aura púrpura.",
    "especificaciones": {
      "altura": "26 cm",
      "material": "PVC + ABS",
      "escala": "1/6",
      "marca": "Bandai",
      "edicion": "Limitada"
    },
    "contenido_caja": ["Figura", "Base efecto energía"],
    "condicion_empaque": "Caja premium",
    "rating": 4.9,
    "destacado": true
  },
  {
    "id": "FIG-010",
    "nombre": "Figura Eren Titan 30 cm",
    "categoria": "Figura Anime",
    "anime": "Attack on Titan",
    "precio": 2499,
    "moneda": "MXN",
    "stock": 3,
    "sku": "KAMI-EREN-TITAN-30",
    "imagen": "eren_titan.jpg",
    "detalle": "Eren en forma Titán con escultura detallada y acabado texturizado.",
    "especificaciones": {
      "altura": "30 cm",
      "material": "Resina",
      "escala": "1/6",
      "marca": "Prime Studio",
      "edicion": "Limitada"
    },
    "contenido_caja": ["Estatua", "Base roca gigante"],
    "condicion_empaque": "Caja reforzada",
    "rating": 5.0,
    "destacado": true
  },
  {
    "id": "CARD-001",
    "nombre": "Carta Mewtwo GX Shiny",
    "categoria": "Carta Coleccionable",
    "coleccion": "Pokemon TCG",
    "precio": 950,
    "moneda": "MXN",
    "stock": 3,
    "sku": "KAMI-MEW-GX-SHINY",
    "imagen": "mewtwo_gx.jpg",
    "detalle": "Carta ultra rara holográfica versión Shiny.",
    "especificaciones": {
      "rareza": "Ultra Rare",
      "tipo": "Pokemon",
      "idioma": "Inglés",
      "condicion": "Near Mint",
      "año":"2019"
    },
    "contenido_caja": ["Carta", "Sleeve", "Toploader"],
    "condicion_empaque": "Protección rígida",
    "rating": 5.0,
    "destacado": true
  },
  {
    "id": "CARD-002",
    "nombre": "Carta Charizard VMAX Rainbow",
    "categoria": "Carta Coleccionable",
    "coleccion": "Pokemon TCG",
    "precio": 2200,
    "moneda": "MXN",
    "stock": 2,
    "sku": "KAMI-CHAR-VMAX",
    "imagen": "charizard_vmax.jpg",
    "detalle": "Carta Rainbow rara con acabado holográfico especial.",
    "especificaciones": {
      "rareza": "Secret Rare",
      "tipo": "Pokemon",
      "idioma": "Inglés",
      "condicion": "Near Mint",
      "año":"2021"
    },
    "contenido_caja": ["Carta", "Protector premium"],
    "condicion_empaque": "Sleeve + toploader",
    "rating": 5.0,
    "destacado": true
  },
  {
    "id": "CARD-003",
    "nombre": "Carta Blue-Eyes White Dragon",
    "categoria": "Carta Coleccionable",
    "coleccion": "Yu-Gi-Oh!",
    "precio": 1800,
    "moneda": "MXN",
    "stock": 4,
    "sku": "KAMI-BLUEEYES",
    "imagen": "blue_eyes.jpg",
    "detalle": "Carta clásica edición especial holográfica.",
    "especificaciones": {
      "rareza": "Ultra Rare",
      "condicion": "Excellent",
      "idioma": "Inglés",
      "año":"2002"
    },
    "contenido_caja": ["Carta", "Sleeve"],
    "condicion_empaque": "Protección estándar",
    "rating": 4.8,
    "destacado": false
  },
  {
    "id": "CARD-004",
    "nombre": "Carta Dark Magician Girl",
    "categoria": "Carta Coleccionable",
    "coleccion": "Yu-Gi-Oh!",
    "precio": 1450,
    "moneda": "MXN",
    "stock": 5,
    "sku": "KAMI-DMG",
    "imagen": "dark_magician_girl.jpg",
    "detalle": "Carta edición especial con ilustración alternativa.",
    "especificaciones": {
      "rareza": "Super Rare",
      "idioma": "Inglés",
      "condicion": "Near Mint",
      "año":"2003"
    },
    "contenido_caja": ["Carta", "Sleeve"],
    "condicion_empaque": "Protección estándar",
    "rating": 4.7,
    "destacado": false
  },
  {
    "id": "CARD-005",
    "nombre": "Carta Pikachu Illustrator Style",
    "categoria": "Carta Coleccionable",
    "coleccion": "Pokemon TCG",
    "precio": 3200,
    "moneda": "MXN",
    "stock": 1,
    "sku": "KAMI-PIKA-ILLUSTRATOR",
    "imagen": "pikachu_special.jpg",
    "detalle": "Carta edición especial estilo ilustrador, muy buscada por coleccionistas.",
    "especificaciones": {
      "rareza": "Promo Especial",
      "tipo": "Pokemon",
      "idioma": "Inglés",
      "condicion": "Near Mint",
      "año":"2020"
    },
    "contenido_caja": ["Carta", "Protector rígido premium"],
    "condicion_empaque": "Toploader reforzado",
    "rating": 5.0,
    "destacado": true
  },
  {
    "id": "CARD-006",
    "nombre": "Portgas D. Ace Manga Rare",
    "categoria": "Carta Coleccionable",
    "coleccion": "One Piece Card Game",
    "serie": "Paramount War",
    "precio": 1620,
    "moneda": "MXN",
    "stock": 1,
    "sku": "KAMI-OP-ACE-MANGA",
    "imagen": "ace_manga_rare.jpg",
    "detalle": "Carta Manga Rare de Portgas D. Ace con ilustración inspirada en paneles originales del manga. Edición extremadamente limitada y altamente coleccionable.",
    "especificaciones": {
      "rareza": "Manga Rare",
      "tipo": "Character",
      "idioma": "Inglés",
      "condicion": "Near Mint",
      "acabado": "Holográfico premium",
      "año": "2023"
    },
    "contenido_caja": [
      "Carta original",
      "Sleeve premium",
      "Toploader rígido",
      "Protección reforzada"
    ],
    "condicion_empaque": "Toploader + bolsa sellada",
    "rating": 5.0,
    "destacado": true
  },
  {
    "id": "CARD-007",
    "nombre": "Monkey D. Luffy Manga Rare",
    "categoria": "Carta Coleccionable",
    "coleccion": "One Piece Card Game",
    "serie": "Romance Dawn",
    "precio": 1850,
    "moneda": "MXN",
    "stock": 1,
    "sku": "KAMI-OP-LUFFY-MANGA",
    "imagen": "luffy_manga_rare.jpg",
    "detalle": "Carta ultra exclusiva Manga Rare de Monkey D. Luffy con ilustración estilo panel de manga en blanco y negro. Considerada una de las cartas más buscadas del One Piece Card Game.",
    "especificaciones": {
      "rareza": "Manga Rare",
      "tipo": "Leader",
      "idioma": "Inglés",
      "condicion": "Near Mint",
      "acabado": "Holográfico especial",
      "año": "2022"
    },
    "contenido_caja": [
      "Carta original",
      "Sleeve premium",
      "Toploader rígido",
      "Protección adicional para envío"
    ],
    "condicion_empaque": "Protección rígida sellada",
    "rating": 5.0,
    "destacado": true
  }
]

 */