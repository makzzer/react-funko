import ListaLanzamientos from "../components/ListaLanzamientos";
import ListaItemsTienda from "../components/ListaItemsTienda";
import Branding from "../Branding";
import { useState } from "react";

const Home = ({ elementosLanding }) => {
  const [elementosLand, SetElem] = useState(elementosLanding);
  return (
    <>
      <div className="container max-w-[120rem]">
        <div className="md:mb-0 mb-8 h-[50vh] bg-fixed bg-no-repeat bg-cover bg-center bg-[url('./assets/images/funkos-banner.webp')]">
          <div className="container mx-auto h-full">
            <Branding />
          </div>
        </div>

        <main className="container max-w-[120rem] flex flex-col">
          <ListaItemsTienda elementosLand={elementosLand} />
          

          <ListaLanzamientos />
        </main>
      </div>
    </>
  );
};

export default Home;
