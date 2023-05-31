import ListaLanzamientos from "../components/ListaLanzamientos";
import ListaItemsTienda from "../components/ListaItemsTienda";
import Branding from "../components/Branding";
import { useState } from "react";

const Home = ({ elementosLanding, nuevosLanzamientos }) => {
  const [elementosLand, SetElem] = useState(elementosLanding);

  const [ultimosLanzamientos, setNewLanz] = useState(nuevosLanzamientos);

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

          <div className="container max-w-[120rem] ml-auto flex flex-col">
            <h1
              className="py-4 md:text-start
            uppercase flex md:mx-none
            mx-auto text-5xl text-center
            md:text-6xl font-semibold md:me-auto"
            >
              últimos lanzamientos
            </h1>

            <div className="flex flex-col md:flex-row container max-w-[120rem] mx-auto p-4">
              <ListaLanzamientos ultimosLanzamientos={ultimosLanzamientos} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
