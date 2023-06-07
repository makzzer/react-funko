const ElemCarrito = () => {
  return (
    <>
      {/**contenedor del carrito dentro van todos los elems*/}
      <div className=" bg-gray-400 items-center mx-auto justify-start rounded-md md:min-w-[40rem]  m-2 flex flex-row">
        <div className="flex md:gap-7 items-center mx-2 md:text-2xl gap-4 justi ">
          <div>
            <h1 className=" text-white ">Nombre </h1>
          </div>
          <div>
            <h1 className=" text-white">Precio </h1>
          </div>

          <div>
            <h1 className=" text-white">Cantidad </h1>
          </div>

          <div>
            <h1 className=" text-white me-4">Color </h1>
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
