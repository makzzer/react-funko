import Home from "./pages/Home";
import ListaLanzamientos from "./components/ListaLanzamientos";

export const elementosLanding = [
  {
    id: 1,
    title: "STARS WARS\n & THE MANDALORIAN",
    img: "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwdd9bfc03/images/funko/68650-1.png?sw=800&sh=800",
    description:
      "Disfruta de una saga que sigue agregando personajes a su colección.",
  },
  {
    id: 2,
    title: "POKEMÓN INDIGO",
    img: "https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/7O7TOQHZL5DWXJDDAGMCSEBIUE.png",
    description:
      "Atrapa todos los que puedas y disfruta de una colección llena de amigos.",
  },
  {
    id: 3,
    title: "HARRY POTTER",
    img: "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwb57047fd/images/funko/65652-1.png?sw=800&sh=800",
    description: "Revive los recuerdos de una saga llena de magia y encanto.",
  },
];

export const nuevosLanzamientos = [
  {
    id: 1,
    title: "Iron Man",
    subTitle: "Iron Man",
    img: "https://i5.walmartimages.com/asr/33fb6837-0de6-4940-a946-67762e862fa9_1.ebd0709f03d53a1283b55731b68068a5.png",
    precio: 5000,
    cuotas: "12 cuotas sin interés",
    tag1: "AVENGERS",
    tag2: "TONY STARK",
  },

  {
    id: 2,
    title: "Storm Trooper",
    subTitle: "star wars",
    img: "https://media.forbiddenplanet.com/products/7e/c9/1a152ab3a5c918621fd254eee616cc310ec6.png",
    precio: 4200.0,
    cuotas: "6 cuotas sin interés",
    tag1: "imperio",
    tag2: "destructor",
  },

  {
    id: 3,
    title: "voldemort",
    subTitle: "harry potter",
    img: "/multimedia_ funkoshop/multimedia/harry-potter/hermione-1.webp",
    precio: 8000.0,
    cuotas: "3 cuotas sin interés",
    tag1: "tom riddle",
    tag2: "avada kedabra",
  },
];

export const grillaShop = [
  {
    id: 1,
    title: "Iron Man",
    subTitle: "Iron Man",
    img: "https://i5.walmartimages.com/asr/33fb6837-0de6-4940-a946-67762e862fa9_1.ebd0709f03d53a1283b55731b68068a5.png",
    precio: 5000,
    cuotas: "12 cuotas sin interés",
    tag1: "AVENGERS",
    tag2: "TONY STARK",
  },

  {
    id: 2,
    title: "Storm Trooper",
    subTitle: "star wars",
    img: "https://media.forbiddenplanet.com/products/7e/c9/1a152ab3a5c918621fd254eee616cc310ec6.png",
    precio: 4200.0,
    cuotas: "6 cuotas sin interés",
    tag1: "imperio",
    tag2: "destructor",
  },

  {
    id: 3,
    title: "voldemort",
    subTitle: "harry potter",
    img: "/multimedia_ funkoshop/multimedia/harry-potter/hermione-1.webp",
    precio: 8000.0,
    cuotas: "3 cuotas sin interés",
    tag1: "tom riddle",
    tag2: "avada kedabra",
  },
  {
    id: 4,
    title: "Iron Man",
    subTitle: "Iron Man",
    img: "https://i5.walmartimages.com/asr/33fb6837-0de6-4940-a946-67762e862fa9_1.ebd0709f03d53a1283b55731b68068a5.png",
    precio: 5000,
    cuotas: "12 cuotas sin interés",
    tag1: "AVENGERS",
    tag2: "TONY STARK",
  },

  {
    id: 5,
    title: "Storm Trooper",
    subTitle: "star wars",
    img: "https://media.forbiddenplanet.com/products/7e/c9/1a152ab3a5c918621fd254eee616cc310ec6.png",
    precio: 4200.0,
    cuotas: "6 cuotas sin interés",
    tag1: "imperio",
    tag2: "destructor",
  },

  {
    id: 6,
    title: "voldemort",
    subTitle: "harry potter",
    img: "/multimedia_ funkoshop/multimedia/harry-potter/hermione-1.webp",
    precio: 8000.0,
    cuotas: "3 cuotas sin interés",
    tag1: "tom riddle",
    tag2: "avada kedabra",
  },
];



const App = () => {
  return <></>;
};

//tengo que exportar así porque no me dejaba con mas de una export nombrada y una directa,  sino falla !!
export default { App, elementosLanding, nuevosLanzamientos };
