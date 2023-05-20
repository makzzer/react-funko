import IconLogotipoSimple from "./icons/IconLogotipoSimple"

const Footer = () => {
    return (
        <footer className="bg-gray-900 py-4 px-4 text-white">

            {/*div con 2 elem: navbar y logo*/}
            <div className="flex md:justify-between flex-row container mx-auto max-w-screen-2xl">

                {/*div con navbar*/}
                <div className="flex justify-start">
                    <nav className="bg-gray-900 py-4 px-8 flex flex-col md:flex-row justify-between">



                        <a
                            href=""
                            className="text-gray-300 px-3 py-2 rounded-md text-xl font-medium transition hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300"
                        >
                            Shop
                        </a>



                        <a
                            href=""
                            className="text-gray-300 px-3 py-2 rounded-md text-xl font-medium transition hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300"
                        >
                            Registrarse
                        </a>



                        <a
                            href=""
                            className="text-gray-300 px-3 py-2 rounded-md text-xl font-medium transition hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300"
                        >
                            Contacto
                        </a>
                        <a
                            href=""
                            className="text-gray-300 px-3 py-2 rounded-md text-xl font-medium transition hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300"
                        >
                            Ingresar
                        </a>



                    </nav>
                </div>

                {/*div con img logo*/}
                <div className="flex justify-items-end mx-auto self-end">
                    <div className="py-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-none duration-300"><IconLogotipoSimple /></div>
                </div>
            </div>


            <div className="container mx-auto text-center">
                <p>&copy; 2023 Funko! Todos los derechos reservados.</p>
            </div>
    
        </footer>
    )
}

export default Footer;