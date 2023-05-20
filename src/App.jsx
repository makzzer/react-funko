import NavBar from "./components/NavBar.jsx";
import Branding from "./Branding.jsx";
import { useState } from "react";
import ListaItemsTienda from "./components/ListaItemsTienda.jsx";
import ItemLanzamiento from "./components/ItemLanzamiento.jsx";
import Footer from "./components/Footer.jsx";


const elementosLanding = [
  { id: 1, title: 'STARS WARS\n & THE MANDALORIAN', img: 'https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwdd9bfc03/images/funko/68650-1.png?sw=800&sh=800', description: 'Disfruta de una saga que sigue agregando personajes a su colección.' },
  { id: 2, title: 'POKEMÓN INDIGO', img: 'https://cdn.shopify.com/s/files/1/0643/0451/3264/products/Pop_Pikachu_hi-res.png?v=1680199544', description: 'Atrapa todos los que puedas y disfruta de una colección llena de amigos.' },
  { id: 3, title: 'HARRY POTTER', img: 'https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwb57047fd/images/funko/65652-1.png?sw=800&sh=800', description: 'Revive los recuerdos de una saga llena de magia y encanto.' },
];

const App = () => {
  const [elementosLand, SetElem] = useState(elementosLanding);

  return (
    <>
      <header className="bg-gray-900">
        <NavBar />
      </header>

      <div className="md:mb-0 mb-8 h-[50vh] bg-fixed bg-no-repeat bg-cover bg-center bg-[url('./assets/images/funkos-banner.webp')]">
        <div className="container mx-auto h-full">
          <Branding />
        </div>
      </div>

      <main>

        <ListaItemsTienda elementosLand={elementosLand} />

      </main>

      <Footer />







    </>
  );
};

export default App;
