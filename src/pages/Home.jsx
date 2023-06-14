import ListaLanzamientos from "../components/ListaLanzamientos";
import ListaItemsTienda from "../components/ListaItemsTienda";
import Branding from "../components/Branding";
import { useState } from "react";

const Home = ({ elementosLanding, nuevosLanzamientos }) => {
  const [elementosLand, SetElem] = useState(elementosLanding);

  const [ultimosLanzamientos, setNewLanz] = useState(nuevosLanzamientos);

  return (
    <>
      <div className="transition-all  duration-500 max-w-6xl mx-auto md:flex md:flex-col items-center container justify-between content-center md:px-10 ">
        <div className="md:mb-0 w-screen mb-8 h-[50vh] bg-no-repeat bg-cover bg-center bg-[url('./assets/images/funkos-banner.webp')]">
          <div className="max-w-6xl mx-auto h-full md:mt-2 mt-16 ">
            <Branding />
          </div>
        </div>

        <main className="">
          <ListaItemsTienda elementosLand={elementosLand} />

          <h1
            className="py-4
            uppercase md:mx-none
            text-4xl 
            md:text-6xl md:pl-10 font-semibold
            text-center md:text-start mb-6 "
          >
            últimos lanzamientos
          </h1>

          
            <div className="p-2">

              <div className="grid px-12 grid-cols-1 md:grid-cols-3 gap-4">
                <ListaLanzamientos ultimosLanzamientos={ultimosLanzamientos} />
              </div>

            </div>
          
        </main>



      </div>
    </>
  );
};

export default Home;
