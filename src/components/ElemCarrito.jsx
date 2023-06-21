import { useState } from "react";
import { useCarritoContext } from "../context/CarritoContext";
import { DetectarTamañoPantalla } from "../utilities/DetectarTamañoPantalla";

const ElemCarrito = ({ id, title, precio, img, cantidad }) => {
  const { eliminarElementoCarrito, actualizarCantidad } = useCarritoContext();

  const [cantidadModificada, setCantidadModificada] = useState(cantidad);

  const esPantallaMobile = DetectarTamañoPantalla();

  const eliminarElemento = (e) => {
    e.preventDefault();
    eliminarElementoCarrito(id);
    console.log(id);
  };

  return (
    <div className="border-b border-gray-300">
      <form className="uppercase max-w-md md:ms-0 md:max-w-none rounded-md md:p-4 m-2 flex md:flex-row justify-between mx-auto flex-col w-full">
        <div className="flex md:flex-row flex-col md:justify-between  font-semibold items-center justify-center">
          <button
            className="ml-auto md:ml-0 z-0 cursor-pointer md:me-8"
            onClick={eliminarElemento}
          >
            <ion-icon name="close-circle-outline" size="large"></ion-icon>
          </button>

          <div className="mx-auto items-center md:ps-10">
            <img src={img} alt="Producto" className="w-20 h-20" />
          </div>

          <div className="md:min-w-[16rem] text-center flex  ">
            {!esPantallaMobile ? (
              <h1 className="items-start ">{title}</h1>
            ) : (
              <>
                <h1 className="items-start me-2">Producto:</h1>
                <h1 className="items-start ">{title}</h1>
              </>
            )}
          </div>

          {/**este es el div que tiene los botones y la cantidad */}
          <div className="md:min-w-[16rem] md:flex md:pe-4  flex flex-row items-center justify-center">
            <button
              className={`py-2 bg-red-700 min-w-[20px] rounded-lg md:text-lg text-md hover:bg-red-600 px-1 m-1 text-md font-semibold text-white ${
                esPantallaMobile && "hidden"
              }`}
              //onClick={() => {
              //vaciarCarrito();
              // window.scrollTo(0, 0);
              //}}
            >
              -
            </button>

            {/*este div tiene el input de la cantidad y el label*/}
            <div className="">
              <label htmlFor="cantidad" className="text-red-600 hidden ">
               
              </label>

            {/**este es el boton - pero de responsive despues del label de cantidad */}
             
              <button
                className={`py-2 bg-red-700 min-w-[20px] md:hidden rounded-lg md:text-lg text-md hover:bg-red-600 px-1 m-1 text-md font-semibold text-white ${
                  !esPantallaMobile && "hidden"
                }`}
              >
                -
              </button>

              <input
                type="number"
                id={`cantidad-${id}`}
                value={cantidadModificada}
                className="w-12 md:w-14 text-center md:ps-3 ps-1 text-red-700 md:px-0 px-2  py-1 border border-gray-300 rounded-md focus:outline-none focus:border-red-600"
                //onChange={(e) => actualizarCantidad(id,parseInt(e.target.value))}
                onBlur={cantidadModificada === 0 && setCantidadModificada(1)}
              />
            </div>

            {/**boton + */}
            <button
              className="py-2  bg-red-700 min-w-[20px] rounded-lg md:text-lg text-md hover:bg-red-600 px-1 m-1 text-md font-semibold text-white"
              //onClick={() => {
              //vaciarCarrito();
              // window.scrollTo(0, 0);
              //}}
            >
              +
            </button>
          </div>

          <div className="md:min-w-[16rem] text-center md:justify-end items-center flex md:ms-3 ">
            {!esPantallaMobile ? (
              <h1 className="items-start ">${precio * cantidad}</h1>
            ) : (
              <>
                <h1 className="items-start me-2">Precio:</h1>
                <h1 className="items-start text-red-800 ">${precio * cantidad}</h1>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ElemCarrito;
