import Home from "./pages/Home";
import ListaLanzamientos from "./components/ListaLanzamientos"

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
    img: "https://cdn.shopify.com/s/files/1/0643/0451/3264/products/Pop_Pikachu_hi-res.png?v=1680199544",
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

const App = () => {
  

  return (
    <>
    
      <Home elementosLanding={elementosLanding}/>
      
      
      
    </>
  );
};

export default App ;
