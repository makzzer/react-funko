import IconLogo from "./icons/IconLogo"

const NavBar = () => {
  return (
    <nav className="bg-gray-900 py-4 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <button>
            <IconLogo />
          </button>

          <div className="hidden md:flex md:justify-center md:mx-auto">
            <a
              href=""
              className="text-gray-300 px-3 py-2 rounded-md text-lg font-medium transition hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300"
            >
              Shop
            </a>
            <a
              href=""
              className="text-gray-300 px-3 py-2 rounded-md text-lg font-medium transition hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300"
            >
              Contacto
            </a>
            <a
              href=""
              className="text-gray-300 px-3 py-2 rounded-md text-lg font-medium transition hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300"
            >
              Ingresar
            </a>
            <a
              href=""
              className="text-gray-300 px-3 py-2 rounded-md text-lg font-medium transition hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300"
            >
              Carrito
            </a>
          </div>

        </div>
      </div>

    </nav>
  );
}

export default NavBar;
