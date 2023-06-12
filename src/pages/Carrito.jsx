import { useCarritoContext } from "../context/CarritoContext";
import ElemCarrito from "../components/ElemCarrito";
import { useEffect } from "react";

//desestructuro el carrito
const Carrito = () => {
  const { carrito, vaciarCarrito } = useCarritoContext();

  useEffect(() => {
    window.scrollTo(0, 0); // Hacer scroll al principio de la página al cargar el componente
  }, []);

  return (
    <>
      <div className="min-h-screen w-full text-center items-center flex-col mt-6 md:m-20">
        <h1 className="pt-20 text-4xl md:text-6xl pb-4">Carrito</h1>

        {carrito.length === 0 ? (
          <h1 className="text-2xl">Tu carrito está vacío</h1>
        ) : (
          carrito.map((elem) => (
            <div className=" md:me-0 mx-auto flex justify-center">
              <ElemCarrito
                key={elem.id}
                title={elem.title}
                precio={elem.precio}
                img={elem.img}
              />
            </div>
          ))
        )}

        {carrito.length > 0 && (
          <div className="items-center flex justify-center">
            <button
              className="py-2 bg-red-700 rounded-md px-2 m-2 text-md font-semibold text-white"
              onClick={() => {
                vaciarCarrito();
                window.scrollTo(0, 0);
              }}
            >
              Vaciar Carrito{" "}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Carrito;
