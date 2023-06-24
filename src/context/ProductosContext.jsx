import { createContext, useContext, useEffect, useState } from "react";

//creo el context
export const ProductosContext = createContext();

const grillaShop = [
  {
    id: 0,
    title: "Iron Man",
    subTitle: "Iron Man",
    img: "https://i5.walmartimages.com/asr/33fb6837-0de6-4940-a946-67762e862fa9_1.ebd0709f03d53a1283b55731b68068a5.png",
    precio: 5000,
    cuotas: "12 cuotas sin interés",
    tag1: "AVENGERS",
    tag2: "TONY STARK",
  },

  {
    id: 1,
    title: "Storm Trooper",
    subTitle: "star wars",
    img: "https://media.forbiddenplanet.com/products/7e/c9/1a152ab3a5c918621fd254eee616cc310ec6.png",
    precio: 4200.0,
    cuotas: "6 cuotas sin interés",
    tag1: "imperio",
    tag2: "destructor",
  },

  {
    id: 2,
    title: "voldemort",
    subTitle: "HP",
    img: "https://media.forbiddenplanet.com/products/7e/c9/1a152ab3a5c918621fd254eee616cc310ec6.png",
    precio: 8000.0,
    cuotas: "3 cuotas sin interés",
    tag1: "tom riddle",
    tag2: "slitherin",
  },
  {
    id: 3,
    title: "Iron Man",
    subTitle: "marvel",
    img: "https://i5.walmartimages.com/asr/33fb6837-0de6-4940-a946-67762e862fa9_1.ebd0709f03d53a1283b55731b68068a5.png",
    precio: 7000,
    cuotas: "12 cuotas sin interés",
    tag1: "AVENGERS",
    tag2: "TONY STARK",
  },

  {
    id: 4,
    title: "Charmander",
    subTitle: "Pokemon",
    img: "https://firebasestorage.googleapis.com/v0/b/react-funko-819d3.appspot.com/o/pokemon%2Fcharmander-1.webp?alt=media&token=5d11ce60-0b6e-48e3-a6bd-6da86c153c34",
    precio: 8300.0,
    cuotas: "6 cuotas sin interés",
    tag1: "imperio",
    tag2: "destructor",
  },

  {
    id: 5,
    title: "hermione",
    subTitle: "hp",
    img: "https://media.forbiddenplanet.com/products/7e/c9/1a152ab3a5c918621fd254eee616cc310ec6.png",
    precio: 8000.0,
    cuotas: "3 cuotas sin interés",
    tag1: "tom riddle",
    tag2: "slitherin",
  },
  {
    id: 6,
    title: "luna lovegood",
    subTitle: "hp",
    img: "https://media.forbiddenplanet.com/products/7e/c9/1a152ab3a5c918621fd254eee616cc310ec6.png",
    precio: 11000.0,
    cuotas: "3 cuotas sin interés",
    tag1: "tom riddle",
    tag2: "slitherin",
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
