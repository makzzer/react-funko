import IconLogo from "./icons/IconLogo";
import IconCarrito from "./icons/IconCarrito";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container max-w-[120rem]">
      <div className="bg-gray-900 flex md:flex-row p-8 flex-col items-center justify-around container mx-auto max-w-screen-2xl">
        {/*div con el logotipo*/}

        <div className="flex justify-start py-2 md:py-0">
          <NavLink
            to="/"
            className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-none duration-300"
          >
            <IconLogo />
          </NavLink>
        </div>

        {/*div con el navbar*/}

          <div className="flex justify-start md:ml-auto">
            <nav className="bg-gray-900 py-2 px-4 flex justify-around">
              <div className="md:flex md:mx-auto ">
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

                

                {/*
            <button className="hover:-translate-y-1 me-2 ps-1 hover:scale-110 hover:bg-red-500 duration-300"><IconCarrito /></button>
  */}
              </div>
            </nav>
          </div>
        </div>
      </div>
    
  );
};

export default NavBar;
