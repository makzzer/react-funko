import { useCarritoContext } from "../context/CarritoContext";
import ElemCarrito from "../components/ElemCarrito";
import { useEffect } from "react";
import { DetectarTamañoPantalla } from "../utilities/DetectarTamañoPantalla";
import { NavLink } from "react-router-dom";

const Carrito = () => {
  //desestructuro desde m context los metodos y el array de carrito para usarlo en este componente
  const { carrito, vaciarCarrito, totalCarrito } = useCarritoContext();

  //metodo que traigo de otro componente para ver si estoy en pantalla pequeña
  const esPantallaMobile = DetectarTamañoPantalla();


  //use effect que uso para scrolear al top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //le paso al elemento del carrito el ID al que corresponde el presionado
  const indiceProducto = 0;

  return (


    <div className="min-h-screen mx-auto max-w-6xl text-center items-center flex-col mt-10 md:mt-20">
      <h1 className="text-4xl md:text-6xl pb-4 mt-22 pt-14">Carrito</h1>

      {carrito.length === 0 ? (
        <>
        <h1 className="text-2xl text-red-700 mb-4">Tu carrito está vacío</h1>
        <NavLink to={"/shop"} className="m-2 p-2 bg-red-700 rounded-lg text-lg hover:bg-red-600 text-white">Ir al Shop</NavLink>
        </>
      ) : (
        <ul className="border rounded-md divide-y md:m-0 m-2">
          <li
            className={`flex items-center p-4 font-semibold ${
              esPantallaMobile && "hidden"
            }`}
          >
            <div className="w-1/3">Producto</div>
            <div className="w-1/3">Precio</div>
            <div className="w-1/3">Cantidad</div>
          </li>

          {carrito.map((elem) => (
            <li className="p-0 m-2 md:m-0">
              <ElemCarrito
                key={elem.id}
                id={elem.id}
                title={elem.title}
                precio={elem.precio}
                img={elem.img}
                cantidad={elem.cantidad}
              />
            </li>
          ))}

          <li
            className="flex p-4 font-semibold items-end justify-end gap-2 text-lg">
              <div className="w-1/8 t">Total:</div>
              <div className="w-1/8 text-red-700">${totalCarrito()}</div>
            </li>
        </ul>
      )}

      {carrito.length > 0 && (
        <div className="items-center flex justify-center">
          <button
            className="py-2  bg-red-700 rounded-lg text-lg hover:bg-red-600 px-2 m-2 text-md font-semibold text-white"
            onClick={() => {
              vaciarCarrito();
              window.scrollTo(0, 0);
            }}
          >
            Vaciar Carrito
          </button>
        </div>
      )}
    </div>
  );
};

export default Carrito;
