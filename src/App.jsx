import NavBar from "./components/NavBar.jsx";
import Branding from "./Branding.jsx";
import { useState } from "react";
import ListaItemsTienda from "./components/ListaItemsTienda.jsx";

const elementosLanding = [
  { id: 1, title: 'STARS WARS\n & THE MANDALORIAN', img: 'https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwdd9bfc03/images/funko/68650-1.png?sw=800&sh=800', description: 'Disfruta de una saga que sigue agregando personajes a su colección.' },
  { id: 2, title: 'POKEMÓN INDIGO', img: 'https://http2.mlstatic.com/D_NQ_NP_715834-MLA31433080411_072019-O.jpg', description: 'Atrapa todos los que puedas y disfruta de una colección llena de amigos.' },
  { id: 3, title: 'HARRY POTTER', img: 'https://http2.mlstatic.com/D_NQ_NP_887637-MLA48532306800_122021-O.webp', description: 'Revive los recuerdos de una saga llena de magia y encanto.' },
];

const App = () => {
  const [elementosLand, SetElem] = useState(elementosLanding);

  return (
    <>
      <NavBar />

      <div className="h-[50vh] bg-fixed bg-no-repeat bg-cover bg-center bg-[url('./assets/images/funkos-banner.webp')]">
        <div className="container mx-auto h-full">
          <Branding />
        </div>
      </div>

      <main>
        <ListaItemsTienda elementosLand={elementosLand} />
      </main>
      </>
  );
};

export default App;
