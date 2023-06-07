import ElemCarrito from "../components/ElemCarrito";

const Carrito = () => {
  return (
    <>
      <div className="min-h-screen text-center items-center flex max-w-6xl container flex-col mt-6 md:m-20">
        <h1 className="pt-20 text-4xl md:text-6xl pb-4">Carrito</h1>
        <ul className="list-outside">
          <li>
          <ElemCarrito />
          <ElemCarrito />
          <ElemCarrito />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Carrito;
