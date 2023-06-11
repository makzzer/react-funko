import { useCarritoContext } from "../context/CarritoContext";
import ElemCarrito from "../components/ElemCarrito";

//desestructuro el carrito

const Carrito = () => {
  const { carrito } = useCarritoContext();

  return (
    <>
      <div className="min-h-screen text-center items-center flex max-w-6xl container flex-col mt-6 md:m-20">
        <h1 className="pt-20 text-4xl md:text-6xl pb-4">Carrito</h1>

        {carrito.length === 0 ? (
          <h1 className="text-2xl">El Carrito está vacio</h1>
        ) : (
          carrito.map((elem) => (
            <ul className="list-outside flex justify-start items-start">
              <li key={elem.id} className="justify-start">
                <ElemCarrito title={elem.title} precio={elem.precio} />
              </li>
            </ul>
          ))
        )}
      </div>
    </>
  );
};

export default Carrito;
