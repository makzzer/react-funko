import IconLogo from "./icons/IconLogo";
import IconCarrito from "./icons/IconCarrito";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const NavBar = () => {
  //hacer barra responsive
  //1° setear un estado isOpen en false para ver si la barra esta abierta

  const [barraAbierta, setBarraAbierta] = useState(false);

  const cerrarBarra = () => {
    setBarraAbierta(!barraAbierta);
  };

  //2) creo el state del menú desplegable
  const menuDesplegable = () => {
    setBarraAbierta(!barraAbierta);
  };

  return (
    <>
      {/*primero creo el navbar*/}
      <nav className="bg-gray-900 p-6 ">
        {/*div para controlar el ancho total del que se va a mostrar el contenido*/}
        <div
          className={`${
            barraAbierta ? "h-auto" : "h - 16"
          } max-w-[120rem] mx-auto `}
        >
          {/*creo contenedor flex*/}
          <div className=" items-center justify-between mx-auto flex md:flex-row flex-col">
            {/*la siguiente linea es para qe la imagen siempre tenga el mismo tamaño*/}
            <div className="flex-shrink-0">
              <IconLogo />
            </div>

            {/*ahora voy a crear el div con el menu desplegable pero por defecto en md está hidden*/}
            <div className="items-start  flex mr-2 md:hidden">
              <button
                onClick={cerrarBarra}
                type="button"
                className="justify-center p-2 rounded-md 
				  text-gray-400 hover:text-white 
				  hover:bg-gray-700 focus:outline-none
				  focus:bg-gray-700 
				  focus:text-white"
              >
                {/*creo el svg del icono*/}
                <svg
                  className={`${barraAbierta ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${barraAbierta ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/*acá voy a crear el menú de navegación*/}
            <div className={`${barraAbierta ? "block" : "hidden"} md:block flex md:flex-row flex-col}`}>
              <NavLink
                to="/shop"
                href=""
                className="text-gray-300 px-3 py-2 rounded-md text-2xl font-medium transition hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300"
              >
                Shop
              </NavLink>

              <NavLink
                to="/contacto"
                href=""
                className="text-gray-300 px-3 py-2 rounded-md text-2xl font-medium transition hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300"
              >
                Contacto
              </NavLink>

              <NavLink
                to="/ingresar"
                href=""
                className="text-gray-300 px-3 py-2 rounded-md text-2xl font-medium transition hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300"
              >
                Ingresar
              </NavLink>

              <button className="hover:-translate-y-1 me-2 ps-1 hover:scale-110 hover:bg-red-500 duration-300">
                <IconCarrito />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
