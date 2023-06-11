const ElemCarrito = ({title,precio}) => {
  return (
    <>
      {/**contenedor del carrito dentro van todos los elems*/}
      <div className=" bg-gray-200 items-center mx-auto justify-start rounded-md md:min-w-[40rem] m-2 flex flex-row">
        <div className="text-gray-900 flex md:gap-7 items-center mx-2 md:text-2xl gap-4 ">
          <div>
            <h1>{title} </h1>
          </div>
          <div>
            <h1>{precio} </h1>
          </div>


        </div>

        <div className="flex m-2 me-2 gap-2 mx-auto my-auto">
          <button className="btn border-t-indigo-300 min-w-[1.2rem] bg-green-400 p-1 rounded-lg">
            +
          </button>
          <button className="btn min-w-[1.2rem] border-t-indigo-300 bg-red-400 p-1 rounded-lg">
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default ElemCarrito;
