import { createContext, useContext, useEffect, useState } from "react";

//creo el context
export const ProductosContext = createContext();

const grillaShop = [
  {
    id: 0,
    title: "Iron Man",
    subTitle: "Marvel",
    img: "https://i5.walmartimages.com/asr/33fb6837-0de6-4940-a946-67762e862fa9_1.ebd0709f03d53a1283b55731b68068a5.png",
    precio: 5000,
    cuotas: "12 cuotas sin interés",
    tag1: "AVENGERS",
    tag2: "TONY STARK",
  },

  {
    id: 1,
    title: "Storm Trooper",
    subTitle: "Star Wars",
    img: "https://media.forbiddenplanet.com/products/7e/c9/1a152ab3a5c918621fd254eee616cc310ec6.png",
    precio: 4200.0,
    cuotas: "6 cuotas sin interés",
    tag1: "imperio",
    tag2: "destructor",
  },

  {
    id: 2,
    title: "Dragonite",
    subTitle: "Pokemón",
    img: "https://firebasestorage.googleapis.com/v0/b/react-funko-819d3.appspot.com/o/pokemon%2Fdragonite-1.webp?alt=media&token=e49d0204-2f5f-427d-98c7-9943f88025cd",
    precio: 8000.0,
    cuotas: "3 cuotas sin interés",
    tag1: "ROCKET",
    tag2: "ATRAPALOS YA",
  },
  {
    id: 3,
    title: "Pidgeotto",
    subTitle: "Pokemón",
    img: "https://firebasestorage.googleapis.com/v0/b/react-funko-819d3.appspot.com/o/pokemon%2Fpidgeotto-1.webp?alt=media&token=cb1b9f85-1ee3-44df-a0b3-d88b5295944e",
    precio: 7000,
    cuotas: "12 cuotas sin interés",
    tag1: "ROCKET",
    tag2: "ATRAPALOS YA",
  },

  {
    id: 4,
    title: "Charmander",
    subTitle: "Pokemón",
    img: "https://firebasestorage.googleapis.com/v0/b/react-funko-819d3.appspot.com/o/pokemon%2Fcharmander-1.webp?alt=media&token=5d11ce60-0b6e-48e3-a6bd-6da86c153c34",
    precio: 8300.0,
    cuotas: "6 cuotas sin interés",
    tag1: "ROCKET",
    tag2: "ATRAPALOS YA",
  },

  {
    id: 5,
    title: "Pikachu",
    subTitle: "Pokemón",
    img: "https://firebasestorage.googleapis.com/v0/b/react-funko-819d3.appspot.com/o/pokemon%2Fpikachu-1.webp?alt=media&token=f4cf7932-c7ff-4359-8b56-f1eade80a353",
    precio: 8000.0,
    cuotas: "3 cuotas sin interés",
    tag1: "ROCKET",
    tag2: "ATRAPALOS YA",
  },
  {
    id: 6,
    title: "Vulpix",
    subTitle: "Pokemón",
    img: "https://firebasestorage.googleapis.com/v0/b/react-funko-819d3.appspot.com/o/pokemon%2Fvulpix-1.webp?alt=media&token=4ae6013f-c75f-41d8-8abc-e81dc2a2b711",
    precio: 11000.0,
    cuotas: "3 cuotas sin interés",
    tag1: "ROCKET",
    tag2: "ATRAPALOS YA",
  },
  {
    id: 7,
    title: "ron weasley",
    subTitle: "hp",
    img: "https://media.forbiddenplanet.com/products/7e/c9/1a152ab3a5c918621fd254eee616cc310ec6.png",
    precio: 8000.0,
    cuotas: "3 cuotas sin interés",
    tag1: "tom riddle",
    tag2: "slitherin",
  },
  {
    id: 8,
    title: "tu vieja",
    subTitle: "hp",
    img: "https://media.forbiddenplanet.com/products/7e/c9/1a152ab3a5c918621fd254eee616cc310ec6.png",
    precio: 8000.0,
    cuotas: "3 cuotas sin interés",
    tag1: "tom riddle",
    tag2: "slitherin",
  },
  {
    id: 9,
    title: "la tuya test",
    subTitle: "hp",
    img: "https://media.forbiddenplanet.com/products/7e/c9/1a152ab3a5c918621fd254eee616cc310ec6.png",
    precio: 11000.0,
    cuotas: "3 cuotas sin interés",
    tag1: "tom riddle",
    tag2: "slitherin",
  },
];

//creo el provider
const ProductosProvider = ({ children }) => {
  //defino que arranque con 2 random o que lo levante de localStorage
  const productosIniciales =
    JSON.parse(localStorage.getItem("productosTienda")) || grillaShop;

  //ahora le creo el estado

  const [productos, setProductos] = useState(productosIniciales);

  //quedo atento a los cambios en carrito

  useEffect(() => {
    localStorage.productosTienda = JSON.stringify(productos);
  }, [productos]);

  return (
    <ProductosContext.Provider value={{ productos, setProductos }}>
      {children}
    </ProductosContext.Provider>
  );
};

//exporto el provider
export default ProductosProvider;

//Creo minihook para usarlo

export const useProductoContext = () => useContext(ProductosContext);
