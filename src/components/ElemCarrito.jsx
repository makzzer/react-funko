import { useCarritoContext } from "../context/CarritoContext";

const ElemCarrito = ({ id, title, precio, img, cantidad }) => {
  const { eliminarElementoCarrito } = useCarritoContext();

  const eliminarElemento = (e) => {
    e.preventDefault();
    eliminarElementoCarrito(id);
    console.log(id);
  };

  return (
    <div className="border-b border-gray-300">
      <form className="uppercase max-w-md md:ms-0 md:max-w-none rounded-md md:p-4 m-2 flex md:flex-row justify-between mx-auto flex-col w-full">
        <div className="flex md:flex-row flex-col md:justify-between font-semibold items-center justify-center">
          <button
            className="ml-auto md:ml-0 z-0 cursor-pointer me-2"
            onClick={eliminarElemento}
          >
            <ion-icon name="close-circle-outline" size="large"></ion-icon>
          </button>
          <div className="mx-auto items-center md:ps-10">
            <img src={img} alt="Producto" className="w-20 h-20" />
          </div>
          <div className="min-w-[16rem]">
            <h1 className="items-start">Producto: {title}</h1>
          </div>
          <div>
            <label htmlFor="cantidad" className="text-red-600 pr-2">
              Cantidad:
            </label>
            <input
              type="number"
              id="cantidad"
              value={cantidad}
              className="w-7 text-center px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-red-600"
              readOnly
            />
          </div>
          <div>
            <h1>Precio: ${precio}</h1>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ElemCarrito;
