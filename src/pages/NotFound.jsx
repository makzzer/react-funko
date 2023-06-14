import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import IconoLogotipoSimple from "../components/icons/IconLogotipoSimple";


const NotFound = () => {
  //uso este HOOK para capturar el error
  const error = useRouteError();

  return (
    <>
      <NavBar />

      <div className="flex container mx-auto min-h-screen items-start m-20 text-center">
        <div className="mx-5 flex md:flex-row flex-col justify-center gap-6 items-center md:mx-0 container font-mono font-bold bg-gray-900 text-5xl mt-20 pb-10 pt-12">
          <h1 className="text-white">Not found</h1>
          <div className="text-green-500">
  
            {/* Agrega la clase "text-green-500" */}
            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-none duration-300">
              <IconoLogotipoSimple ancho={60} alto={80} />{" "}
     
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NotFound;
