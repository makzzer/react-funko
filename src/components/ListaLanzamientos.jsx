const ListaLanzamientos = () => {
  return (
    <>
      <div className="flex flex-col container max-w-[120rem] mx-auto p-4">
        <h1 className="py-4 md:text-start uppercase flex md:mx-none  mx-auto text-5xl text-center md:text-6xl font-semibold">
          últimos lanzamientos
        </h1>

        <div className="container max-w-[120rem] ml-auto flex md:flex-row flex-col">
          {/*Pikachu 1 */}
          <div className="uppercase max-w-xs rounded overflow-hidden shadow-lg mx-auto mb-2 flex flex-col">
            <div className="flex justify-end">
              <span className="inline-block bg-red-600 px-2 text-white rounded">
                Nuevo
              </span>
            </div>
            <img
              className="w-full relative"
              src="https://cdn.shopify.com/s/files/1/0643/0451/3264/products/Pop_Pikachu_hi-res.png?v=1680199544'"
              alt="Imagen de la card"
            ></img>
            <div className="px-6 py-4">
              <div className="font-semibold text-md">Pokemón</div>
              <div className="font-bold text-xl mb-2">Volt Pikachu</div>
              <p className="text-gray-700 text-xl">$4200,00</p>
              <p className="text-blue-500 text-md">3 CUOTAS SIN INTERÉS</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                animé
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                90'
              </span>
            </div>
          </div>

          {/*Pikachu 2 */}
          <div className="uppercase max-w-xs rounded overflow-hidden shadow-lg mx-auto mb-2 flex flex-col">
            <div className="flex justify-end">
              <span className="inline-block bg-red-600 px-2 text-white rounded">
                Nuevo
              </span>
            </div>
            <img
              className="w-full relative"
              src="https://cdn.shopify.com/s/files/1/0643/0451/3264/products/Pop_Pikachu_hi-res.png?v=1680199544'"
              alt="Imagen de la card"
            ></img>
            <div className="px-6 py-4">
              <div className="font-semibold text-md">Pokemón</div>
              <div className="font-bold text-xl mb-2">Volt Pikachu</div>
              <p className="text-gray-700 text-xl">$4200,00</p>
              <p className="text-blue-500 text-md">3 CUOTAS SIN INTERÉS</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                animé
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                90'
              </span>
            </div>
          </div>

          {/*Pikachu 3 */}
          <div className="uppercase max-w-xs rounded overflow-hidden shadow-lg mx-auto mb-2 flex flex-col">
            <div className="flex justify-end">
              <span className="inline-block bg-red-600 px-2 text-white rounded">
                Nuevo
              </span>
            </div>
            <img
              className="w-full relative"
              src="https://cdn.shopify.com/s/files/1/0643/0451/3264/products/Pop_Pikachu_hi-res.png?v=1680199544'"
              alt="Imagen de la card"
            ></img>
            <div className="px-6 py-4">
              <div className="font-semibold text-md">Pokemón</div>
              <div className="font-bold text-xl mb-2">Volt Pikachu</div>
              <p className="text-gray-700 text-xl">$4200,00</p>
              <p className="text-blue-500 text-md">3 CUOTAS SIN INTERÉS</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                animé
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                90'
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaLanzamientos;
