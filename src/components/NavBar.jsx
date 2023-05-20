import IconLogo from "./icons/IconLogo"
import IconCarrito from "./icons/IconCarrito"

const NavBar = () => {
  return (
    <nav className="bg-gray-900 py-4 px-4">


        <div className="flex md:flex-row flex-col items-center justify-around container mx-auto max-w-screen-2xl">
          
          <button className="justify-start transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-none duration-300">
            <IconLogo />
          </button>

          <div className="md:flex md:mx-auto justify-around">
            <a
              href=""
              className="text-gray-300 px-3 py-2 rounded-md text-2xl font-medium transition hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300"
            >
              Shop
            </a>
            <a
              href=""
              className="text-gray-300 px-3 py-2 rounded-md text-2xl font-medium transition hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300"
            >
              Contacto
            </a>
            <a
              href=""
              className="text-gray-300 px-3 py-2 rounded-md text-2xl font-medium transition hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300"
            >
              Ingresar
            </a>
            <button className="hover:-translate-y-1 me-2 ps-1 hover:scale-110 hover:bg-red-500 duration-300"><IconCarrito/></button>
          </div>

        </div>
  

    </nav>
  );
}

export default NavBar;
