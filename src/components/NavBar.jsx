import { useState, useEffect } from "react";
import IconLogo from "./icons/IconLogo";
import IconCarrito from "./icons/IconCarrito";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [esPantallaMobile, setEsPantallaMobile] = useState(false);

  //links de navegacion configurados en recorrer map, genera un li y dentro un NavLink
  let navlinks = [
    {
      name: "SHOP",
      to: "/shop",
      classname:
        "md:ml-0 text-gray-300 py-2 px-0 md:my-0 my-3 md:px-2 rounded-md text-xl font-medium transition hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300",
    },
    {
      name: "CONTACTO",
      to: "/contacto",
      classname:
        "md:ml-0 text-gray-300 py-2 px-0 md:my-0 md:px-2 my-3 rounded-md text-xl font-medium transition hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300",
    },
    {
      name: "INGRESAR",
      to: "/ingresar",
      classname:
        "md:ml-0 text-gray-300 py-2 px-0 md:my-0 my-3 md:px-2 rounded-md text-xl font-medium transition hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300",
    },
    {
      name: "CART",
      to: "/ingresar",
      classname:
      "md:ml-0 text-gray-300 py-2 px-0 md:my-0 my-3 md:px-2 rounded-md text-xl font-medium transition hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300",
    },
  ];

  //variable que uso para ver si la barra está presionada
  let [open, setOpen] = useState(false);

  //acá detecto si estoy en pantalla mobile o desktop
  useEffect(() => {
    const handleResize = () => {
      setEsPantallaMobile(window.innerWidth < 640); // Ajusta el tamaño según tus necesidades
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/**creo el contendor principal donde coloco fixed para que la barra quede pegada cuando scrolleo"*/}
      <div className="bg-gray-900 shadow-md fixed mx-auto pt-4 pb-0 md:py-2 md:pb-4 top-0 w-full left-0">
        
        {/**creo otro div  que va a contener por un lado al logo, al boton para ampliar y a los links"*/}
        <div className=" max-w-6xl md:py-1 mx-auto md:flex items-center justify-between bg-gray-900 px-2">
          {/**Div con el logo  */}
          {esPantallaMobile ? (
            <>
              <NavLink className="mr-2 pt-2 transition-all duration-500 ease-in-out" to="/">
                <IconLogo ancho={280} alto={80} />
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
            className="text-3xl absolute right-4 top-10 cursor-pointer ps-2 md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <div>
            <ul
              className={`md:flex md:items-center md:pb-0  absolute md:static pb-1 bg-gray-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all pt-1 duration-500 ease-in ${
                open ? "top-20 " : "top-[-490px]"
              }`}
            >
              {navlinks.map((navlink) => {
                return (
                  <>
                    <li
                      key={navlink.name}
                      className="bg-gray-900 text-xl md:my-0 my-7"
                    >
                      <NavLink to={navlink.to} className={navlink.classname}>
                        {navlink.name}
                      </NavLink>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>


        </div>
      </div>
    </>
  );
};

export default Nav;
