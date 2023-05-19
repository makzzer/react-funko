import IconLogo from "./icons/IconLogo"

const NavBar = () => {
    return (

        <nav className="bg-gray-900 pt-4 pb-4">
            <div className="container px-auto mx-auto">
                <div className="flex justify-items-center justify-between">

                    <button> <IconLogo /> </button>


                    <div className="mt-4 items-stretch">
                        <a
                            href=""
                            className="text-gray-300 px-3 py-2 rounded-md text-2xl font-medium transition  hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300"
                        >
                            Shop
                        </a>
                        <a
                            href=""
                            className="text-gray-300 px-3 py-2 rounded-md text-2xl font-medium transition  hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300"
                        >
                            Contacto
                        </a>
                        <a
                            href=""
                            className="text-gray-300  px-3 py-2 rounded-md text-2xl font-medium transition  hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300"
                        >
                            Ingresar
                        </a>
                        <a
                            href=""
                            className="text-gray-300 px-3 py-2 rounded-md text-2xl font-medium transition  hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300"
                        >
                            Carrito
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;