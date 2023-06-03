import ListaGrid from "../components/ListaGrid";

const Shop = ({ grillaShop }) => {
  return (
    <>
      {/*este es el div del container general*/}
      <div className=" min-h-screen max-w-6xl text-center container text-4xl mt-10 md:mt-20 flex flex-col">
        <h1 className="text-6xl mb-4 text-center pt-20 mt-2">Shop</h1>
        {/*div flex col que contiene  barra y filtros*/}

        <div className="md:flex-row flex-col md:flex items-center justify-between">
          <div className="flex items-center mb-1 md:mb-3 justify-between px-1">
            <form className="w-full ">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Buscá tu pop!"
                  className="w-full border border-gray-900 rounded-md py-3 px-6 text-base focus:outline-none focus:ring-2 focus:ring-gray-900  md:w-[55rem]"
                />
              </div>
            </form>
          </div>

          <div className="mb-2 flex md:flex-row flex-col items-center text-lg ps-4">
            <label
              htmlFor="select"
              className="text-gray-700 font-semibold mt-2 me-1 mb-2"
            >
              Ordenar por:
            </label>
            <select
              id="select"
              className="border-gray-900 rounded-md shadow-sm font-extrabold  focus:outline-none focus:ring-gray-900 focus:border-gray-900"
            >
              <option value="option1">Harry Potter</option>
              <option value="option1">Star wars</option>
              <option value="option2">Marvel</option>
              <option value="option2">Pokemon</option>
            </select>
          </div>
        </div>

        <div className="pb-2">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mt-12">
            <ListaGrid grillaShop={grillaShop} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
