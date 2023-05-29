const ListaLanzamientos = () => {
  return (
    <>
      <div className="flex flex-col container max-w-[120rem] mx-auto p-4 justify-around">
        <h1 className="py-4 md:text-start uppercase flex md:mx-none  mx-auto text-5xl text-center md:text-6xl font-semibold">
          últimos lanzamientos
        </h1>

        <div className="container max-w-[120rem] ml-auto flex md:flex-row flex-col">
          {/*IronMan 1 */}
          <div className="uppercase max-w-xs rounded overflow-hidden shadow-lg mx-auto mb-2 flex flex-col">
            <div className="flex justify-end">
              <span className="inline-block bg-red-600 px-2 text-white rounded">
                Nuevo
              </span>
            </div>
            <img
              className="w-full relative"
              src="https://i5.walmartimages.com/asr/33fb6837-0de6-4940-a946-67762e862fa9_1.ebd0709f03d53a1283b55731b68068a5.png"
              alt="Imagen de la card"
            ></img>
            <div className="px-6 py-4">
              <div className="font-semibold text-md">Marvel</div>
              <div className="font-bold text-xl mb-2">Iron Man</div>
              <p className="text-gray-700 text-xl">$4200,00</p>
              <p className="text-blue-500 text-md">3 CUOTAS SIN INTERÉS</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                Avengers
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                Tony Stark
              </span>
            </div>
          </div>

          {/*IronMan 2 */}
          <div className="uppercase max-w-xs rounded overflow-hidden shadow-lg mx-auto mb-2 flex flex-col">
            <div className="flex justify-end">
              <span className="inline-block bg-red-600 px-2 text-white rounded">
                Nuevo
              </span>
            </div>
            <img
              className="w-full relative"
              src="https://i5.walmartimages.com/asr/33fb6837-0de6-4940-a946-67762e862fa9_1.ebd0709f03d53a1283b55731b68068a5.png"
              alt="Imagen de la card"
            ></img>
            <div className="px-6 py-4">
              <div className="font-semibold text-md">Marvel</div>
              <div className="font-bold text-xl mb-2">Iron Man</div>
              <p className="text-gray-700 text-xl">$4200,00</p>
              <p className="text-blue-500 text-md">3 CUOTAS SIN INTERÉS</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                Avengers
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                Tony Stark
              </span>
            </div>
          </div>

          {/*IronMan 3 */}
          <div className="uppercase max-w-xs rounded overflow-hidden shadow-lg mx-auto mb-2 flex flex-col">
            <div className="flex justify-end">
              <span className="inline-block bg-red-600 px-2 text-white rounded">
                Nuevo
              </span>
            </div>
            <img
              className="w-full relative"
              src="https://i5.walmartimages.com/asr/33fb6837-0de6-4940-a946-67762e862fa9_1.ebd0709f03d53a1283b55731b68068a5.png"
              alt="Imagen de la card"
            ></img>
            <div className="px-6 py-4">
              <div className="font-semibold text-md">Marvel</div>
              <div className="font-bold text-xl mb-2">Iron Man</div>
              <p className="text-gray-700 text-xl">$4200,00</p>
              <p className="text-blue-500 text-md">3 CUOTAS SIN INTERÉS</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                Avengers
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                Tony Stark
              </span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ListaLanzamientos;
