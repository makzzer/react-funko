const Branding = () => {
    return (

        <div className="flex flex-col items-center md:items-start justify-center h-full py-auto px-auto container mx-auto ">

            <h1 className="text-white text-4xl mb-2">Nuevos ingresos</h1>
            <h2 className="text-white text-center text-2xl mb-2">
              Descubrí el próximo Funko de tu colección
            </h2>
            <div className="flex justify-left">
              <button className="mt-4 bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-4 animate-bounce text-lg rounded-full mb-4">
                Comprar
              </button>
            </div>

        </div>

    );
  }
  
  export default Branding;
  