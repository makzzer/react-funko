import { useCarritoContext } from "../context/CarritoContext";

const ElemCarrito = ({ id, title, precio, img, cantidad }) => {
  const { eliminarElementoCarrito } = useCarritoContext();

  //metodo que uso para eliminar el elemento metodo original desde carrito context
  const eliminarElemento = (e) =>{
    e.preventDefault()
    eliminarElementoCarrito(id)
    console.log(id);

  }



  return (
    <form className="uppercase max-w-md md:ms-0 md:max-w-none justify-start rounded-md md:p-4 m-2 flex md:flex-row flex-col w-full">
      <div className="flex md:flex-row flex-col  font-semibold items-center justify-center">


        <button
          className="ml-auto md:ml-0  cursor-pointer me-2"
          onClick={eliminarElemento}
        >
          <ion-icon name="close-circle-outline" size="large"></ion-icon>
        </button>

        <div className="mx-auto items-center ">
          <img src={img} alt="Producto" className="w-20 h-20" />
        </div>
        <div className="min-w-[16rem] ">
          <h1 className="items-start">Producto: {title}</h1>
        </div>
        <div>
          <h1 className="text-red-600 pe-2">Cantidad: {cantidad}</h1>
        </div>
        <div>
          <h1>Precio: {precio}</h1>
        </div>
      </div>
    </form>
  );
};

export default ElemCarrito;
