const products = [
  {
    id: 1,
    name: "Figura Conejo Donut Edition",
    category: "Figuras",
    stock: 12,
    price: 799,
    description: "Figura coleccionable de un conejo sosteniendo una dona rosa, edición especial para vitrinas.",
    img: "/img/conejo-donut.png"
  },
  {
    id: 2,
    name: "Figura Gato Skate Rebel",
    category: "Figuras",
    stock: 8,
    price: 749,
    description: "Gato sobre su patineta, con pose rebelde y detalles pintados a mano.",
    img: "/img/cat-skate.png"
  },
  {
    id: 3,
    name: "Figura Oso Saxofón Deluxe",
    category: "Figuras",
    stock: 6,
    price: 820,
    description: "Oso tocando el saxofón, ideal para coleccionistas premium.",
    img: "/img/oso-sax.png"
  },
  {
    id: 4,
    name: "Peluche Pinguino Clásico",
    category: "Peluches",
    stock: 15,
    price: 599,
    description: "Peluche suave de pinguino",
    img: "/img/peluche-pinguino.png"
  },
  {
    id: 5,
    name: "Peluche Oso Bebe",
    category: "Peluches",
    stock: 10,
    price: 499,
    description: "Peluche de oso con su chupón, ideal para regalo.",
    img: "/img/oso-peluche.png"
  },
  {
    id: 6,
    name: "Playera Dona",
    category: "Ropa",
    stock: 20,
    price: 429,
    description: "Playera negra con el logo de una dona.",
    img: "/img/playera-dona.png"
  },
  {
    id: 7,
    name: "Sudadera Castillo",
    category: "Ropa",
    stock: 9,
    price: 899,
    description: "Sudadera gris con ilustración de un castillo",
    img: "/img/sudadera-castillo.png"
  },
  {
    id: 8,
    name: "Taza Oso Perezoso",
    category: "Accesorios",
    stock: 18,
    price: 299,
    description: "Taza blanca con ilustración de un oso perezoso pensando en donas.",
    img: "/img/taza-perezoso.png"
  },
  {
    id: 9,
    name: "Llavero Perrito",
    category: "Accesorios",
    stock: 25,
    price: 199,
    description: "Llavero de goma de un perrito",
    img: "/img/llavero-perro.png"
  },
  {
    id: 10,
    name: "Mochila Hamburguesa",
    category: "Accesorios",
    stock: 7,
    price: 1099,
    description: "Mochila de la escuela con el logo de una hamburguesa",
    img: "/img/mochila-burger.png"
  }
];

const filtrarProductos = (type)=>{
  return products.filter((prod)=>prod.category===type)
}

let error = false;
export const getProducts = (type)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject("Hubo un error, intente mas tarde");
            }
            else{
                let filterP = type ? filtrarProductos(type) : products
                resolve(filterP);
            }

        },2000)
    })

}

export const getOneProduct = (id)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject("Hubo un error, intente mas tarde");
            }
            else{
                let product = products.find((prod)=>prod.id==id);
                resolve(product);
            }

        },2000)
    })

}
