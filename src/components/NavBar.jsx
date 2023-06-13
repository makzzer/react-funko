import { useState, useEffect } from "react";
import IconLogo from "./icons/IconLogo";
import IconCarrito from "./icons/IconCarrito";
import { NavLink } from "react-router-dom";
import { DetectarTamañoPantalla } from "../utilities/DetectarTamañoPantalla";

const Nav = () => {
  //variable que uso para ver si la barra está presionada
  let [open, setOpen] = useState(false);

  const esPantallaMobile = DetectarTamañoPantalla();

  const clasesita =
    "md:ml-0 text-gray-300 py-2 px-0 md:my-0 my-3 md:px-2 rounded-md md:text-xl  text-lg font-medium transition hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300";

  //links de navegacion configurados en recorrer map, genera un li y dentro un NavLink
  let navlinks = [
    {
      name: "SHOP",
      to: "/shop",
      classname: clasesita,
    },
    {
      name: "CONTACTO",
      to: "/contacto",
      classname: clasesita,
    },
    {
      name: "INGRESAR",
      to: "/ingresar",
      classname: clasesita,
    },
  ];

  const cambiarMenuAFalse = () => {
    setOpen(false);
  };

  return (
    <>
      {/**creo el contendor principal donde coloco fixed para que la barra quede pegada cuando scrolleo, le saco fixed por ahora"*/}
      <div className="bg-gray-900 shadow-md fixed mx-auto pt-1 md:pt-4 pb-0 md:py-2 md:pb-4 top-0  w-full left-0">
        {/**creo otro div  que va a contener por un lado al logo, al boton para ampliar y a los links"*/}
        <div className="px-10 h-[5rem] md:h-auto bg-gray-900 mb-0 justify-between max-w-6xl md:py-1 mx-auto md:flex items-center ">
          {/**Div con el logo  */}
          {esPantallaMobile ? (
            <>
              <NavLink className="mr-2 pt-2" to="/" onClick={cambiarMenuAFalse}>
                <IconLogo ancho={200} alto={80} />
              </NavLink>
            </>
          ) : (
            <>
              <NavLink className="mr-2 pt-2" to="/">
                <IconLogo ancho={444} alto={80} />
              </NavLink>
            </>
          )}

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl gap-4 absolute right-14 text-red-800 top-7 cursor-pointer ps-2 md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <NavLink
            to={"/carrito"}
            onClick={() => setOpen(false)}
            className="text-3xl gap-4 absolute right-4 text-red-800 top-7 cursor-pointer ps-2 md:hidden"
          >
            <ion-icon name="cart-outline"></ion-icon>
          </NavLink>

          <div>
            <ul
              className={` mt-1 md:flex md:items-center md:pb-0 absolute md:static pb-1 bg-gray-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-11 transition-all pt-0  duration-500 ease-in ${
                open ? "top-14 " : "top-[-490px]"
              }`}
            >
              {navlinks.map((navlink, index) => {
                return (
                  <>
                    <li
                      key={navlink.name}
                      className="bg-gray-900 text-xl md:my-0 my-7 pt-2"
                    >
                      <NavLink
                        to={navlink.to}
                        className={navlink.classname}
                        onClick={cambiarMenuAFalse}
                      >
                        {navlink.name}
                      </NavLink>
                    </li>
                  </>
                );
              })}
              {!esPantallaMobile && (
                <NavLink
                  to={"/carrito"}
                  className="text-3xl gap-4 transition hover:-translate-y-1 hover:scale-95 hover:bg-red-500 duration-300 text-red-800 cursor-pointer ps-1 pt-3 "
                >
                  <ion-icon name="cart-outline"></ion-icon>
                </NavLink>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
