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
    title: "Harry Potter",
    subTitle: "Harry Potter",
    img: "https://firebasestorage.googleapis.com/v0/b/react-funko-819d3.appspot.com/o/harry-potter%2Fharry-1.webp?alt=media&token=6768c5c7-d6e4-4b4e-a864-933f1dda4cee",
    precio: 8000.0,
    cuotas: "3 cuotas sin interés",
    tag1: "tom riddle",
    tag2: "slitherin",
  },
  {
    id: 8,
    title: "Hermione",
    subTitle: "Harry Potter",
    img: "https://firebasestorage.googleapis.com/v0/b/react-funko-819d3.appspot.com/o/harry-potter%2Fhermione-1.webp?alt=media&token=76855b42-5297-4598-af2b-e0902014ec0a",
    precio: 8000.0,
    cuotas: "3 cuotas sin interés",
    tag1: "tom riddle",
    tag2: "slitherin",
  },
  {
    id: 9,
    title: "Luna Lovegood",
    subTitle: "Harry Potter",
    img: "https://firebasestorage.googleapis.com/v0/b/react-funko-819d3.appspot.com/o/harry-potter%2Fluna-1.webp?alt=media&token=6eb4deae-99af-436a-8969-e1310b47f639",
    precio: 11000.0,
    cuotas: "3 cuotas sin interés",
    tag1: "tom riddle",
    tag2: "slitherin",
  },

  {
    id: 10,
    title: "Snape Patronus",
    subTitle: "Harry Potter",
    img: "https://firebasestorage.googleapis.com/v0/b/react-funko-819d3.appspot.com/o/harry-potter%2Fsnape-patronus-1.webp?alt=media&token=728eae9b-a843-42ba-90d1-85a8547aca9a",
    precio: 11000.0,
    cuotas: "3 cuotas sin interés",
    tag1: "tom riddle",
    tag2: "slitherin",
  },


  {
    id: 11,
    title: "Baby Yoda",
    subTitle: "Star Wars",
    img: "https://firebasestorage.googleapis.com/v0/b/react-funko-819d3.appspot.com/o/star-wars%2Fbaby-yoda-1.webp?alt=media&token=6e7b736e-cdf9-4f79-9780-990c3bf44552",
    precio: 11000.0,
    cuotas: "3 cuotas sin interés",
    tag1: "imperio",
    tag2: "destructor",
  },

  {
    id: 12,
    title: "Boba Fett",
    subTitle: "Star Wars",
    img: "https://firebasestorage.googleapis.com/v0/b/react-funko-819d3.appspot.com/o/star-wars%2Fbobbafeth-1.webp?alt=media&token=972e5f77-cf99-4e15-af53-bb9cd2471816",
    precio: 11000.0,
    cuotas: "3 cuotas sin interés",
    tag1: "imperio",
    tag2: "destructor",
  },

  {
    id: 13,
    title: "Luke Skywalker",
    subTitle: "Star Wars",
    img: "https://firebasestorage.googleapis.com/v0/b/react-funko-819d3.appspot.com/o/star-wars%2Fluke-1.webp?alt=media&token=923021bc-d2cf-48fd-bdc1-2df250c9fc07",
    precio: 11000.0,
    cuotas: "3 cuotas sin interés",
    tag1: "imperio",
    tag2: "destructor",
  },

  {
    id: 14,
    title: "Trooper Sword",
    subTitle: "Star Wars",
    img: "https://firebasestorage.googleapis.com/v0/b/react-funko-819d3.appspot.com/o/star-wars%2Ftrooper-1.webp?alt=media&token=a397dbca-11a4-40c4-8b6b-a12125c4b818",
    precio: 11000.0,
    cuotas: "3 cuotas sin interés",
    tag1: "imperio",
    tag2: "destructor",
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
