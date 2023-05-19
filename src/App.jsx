import NavBar from "./components/NavBar.jsx";
import Branding from "./Branding.jsx";
import { useState } from "react";
import ListaItemsTienda from "./components/ListaItemsTienda.jsx";

const elementosLanding = [
  { id: 1, title: 'STARS WARS & THE MANDALORIAN', img: 'https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwdd9bfc03/images/funko/68650-1.png?sw=800&sh=800', description: 'Disfruta de una saga que sigue agregando personajes a su colección.' },
  { id: 2, title: 'POKEMÓN INDIGO', img: 'src/assets/images/charmander-1.webp', description: 'Atrapa todos los que puedas y disfruta de una colección llena de amigos.' },
  { id: 3, title: 'HARRY POTTER', img: 'src/assets/images/harry-1.webp', description: 'Revive los recuerdos de una saga llena de magia y encanto.' },
];

const App = () => {
  const [elementosLand, SetElem] = useState(elementosLanding);

  return (
    <>
      <NavBar />

      <div className="h-[50vh] bg-fixed bg-no-repeat bg-cover bg-center bg-[url('./assets/images/funkos-banner.webp')]">
        <div className="container  h-full">
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
