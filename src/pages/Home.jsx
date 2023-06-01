import ListaLanzamientos from "../components/ListaLanzamientos";
import ListaItemsTienda from "../components/ListaItemsTienda";
import Branding from "../components/Branding";
import { useState } from "react";

const Home = ({ elementosLanding, nuevosLanzamientos }) => {
  const [elementosLand, SetElem] = useState(elementosLanding);

  const [ultimosLanzamientos, setNewLanz] = useState(nuevosLanzamientos);

  return (
    <>
      <div className="md:py-1 max-w-6xl mx-auto md:flex md:flex-col items-center container justify-between  bg-gray-900  md:px-10 px-2 ">
        
        <div className="w-screen md:mb-0 mb-8 h-[50vh] bg-fixed bg-no-repeat bg-cover bg-center bg-[url('./assets/images/funkos-banner.webp')]">
          <div className="max-w-6xl mx-auto h-full md:mt-2 ">
            <Branding />
          </div>
        </div>

        <main className="container flex flex-col">
          <ListaItemsTienda elementosLand={elementosLand} />

          <h1
              className="py-4
            uppercase md:mx-none
            text-5xl 
            md:text-6xl font-semibold
            text-center md:text-start"
            >
              últimos lanzamientos
            </h1>

          <div className="flex md:flex-row flex-col bg-green-400 container justify-between max-w-6xl">
              <ListaLanzamientos ultimosLanzamientos={ultimosLanzamientos} />
          
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
