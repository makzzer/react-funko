import IconLogo from "./components/icons/IconLogo.jsx";




const App = () => {
  return (
    <>
      <header>
        {/*acá arranca la NavBar*/}
        <nav className="bg-gray-800 pt-4 pb-4">
          <div className="container px-auto mx-auto">
            <div className="flex justify-items-center justify-between">
              
                <button> <IconLogo/> </button>
                
  
            
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
      </header>

      {/*acá arranca la imagen de fondo con el string*/}

      <section
        className="
        h-600 bg-fixed bg-cover bg-center

      bg-[url('src/assets/images/funkos_cover.jpg')]"
      >
        <div className="p-10">
          <h1 className="text-white text-4xl mb-2 px-auto">Nuevos ingresos</h1>
          <h2 className="text-white text-2xl mb-2 px-auto">
            Descubrí el proximo Funko de tu colección
          </h2>
          <button className="text-lg mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-full">
            Comprar{" "}
          </button>
        </div>
      </section>

      {/*primer baby yoda*/}

      <main>
        <article className="flex items-center justify-items-center">
          <div className="self-center mx-auto pl-20 pb-40">
            <h3 className="text-gray-800 text-4xl mb-4">
              Stars Wars <br></br>& The Mandalorian
            </h3>
            <p className="text-gray-800 text-2xl mb-2">
              Disfruta de una saga que sigue agregando personajes a su
              colección.
            </p>
            <div className="border border-red-400 mb-2"> </div>
            <button className="px-8 py-4 text-lg bg-gray-800 hover:bg-gray-900 text-white font-bold rounded-full">Ver colección</button>
          </div>

          <div>
            <img
              className="w-full pe-20"
              src="src/assets/images/baby-yoda-1.webp"
              alt=""
            />
          </div>
        </article>
      </main>
    </>
  );
};

export default App;
