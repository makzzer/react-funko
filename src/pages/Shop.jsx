import { useEffect, useState } from "react";
import ListaGrid from "../components/ListaGrid";

const Shop = ({ grillaShop }) => {
  const [productosCarrito, setProductosCarrito] = useState([]);

  const agregarProductoCarrito = (id) => {
    setProductosCarrito([...productosCarrito, grillaShop[id]]);
  };

  console.log(productosCarrito);

  {
    /** creo que este useEffect es necesario para mandarle al carrito el array nuevo actualizado cada vez que presiono comprar en la card
  useEffect = (() =>{

  })
*/
  }

  return (
    <>
      {/*este es el div del container general*/}
      <div className=" transition-all duration-500 max-w-6xl mx-auto d:flex md:flex-col items-center container  mt-10 md:mt-20">
        <div className="text-center text-4xl md:text-6xl mt-22 pt-14">
          <h1>Shop</h1>
        </div>

        {/*div flex col que contiene  barra y filtros*/}

        <div className=" pt-7 md:flex-row flex-col md:flex items-center justify-between md:mb-10 mb-2">
          <div className="flex mb-1 md:mb-3 justify-between px-1">
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

          <div className="mb-2 flex md:flex-row flex-col md:items-center items-start text-base md:text-lg ps-4">
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

        <main className="container flex flex-col md:max-w-6xl">
          <div className="p-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10">
              <ListaGrid
                grillaShop={grillaShop}
                agregarProductoCarrito={agregarProductoCarrito}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Shop;
