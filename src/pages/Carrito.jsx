import { useCarritoContext } from "../context/CarritoContext";
import ElemCarrito from "../components/ElemCarrito";

//desestructuro el carrito
const Carrito = () => {
  const { carrito } = useCarritoContext();

  return (
    <div className="min-h-screen w-full text-center items-center flex-col mt-6 md:m-20">
      <h1 className="pt-20 text-4xl md:text-6xl pb-4">Carrito</h1>

      {carrito.length === 0 ? (
        <h1 className="text-2xl">El Carrito está vacío</h1>
      ) : (
        carrito.map((elem) => (
          <div className="me-3 md:me-0">
          <ElemCarrito key={elem.id} title={elem.title} precio={elem.precio} />
          </div>
        ))
      )}
    </div>
  );
};

export default Carrito;

