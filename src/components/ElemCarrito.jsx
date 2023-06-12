const ElemCarrito = ({ title, precio,img }) => {
  return (
    <form className="divide-y md:divide-x border uppercase max-w-md md:ms-0 md:max-w-none justify-start rounded-md md:p-4 m-2 flex md:flex-row flex-col w-full">
     
      <div className="flex md:flex-row flex-col border-gray-300 border-solid divide-y md:divide-x font-semibold items-center justify-center">

        <button className="ml-auto md:ml-0 z-[-1] cursor-pointer">
          <ion-icon name="close-circle-outline" size="large"></ion-icon>
        </button>

        <div className="mx-auto items-center ">
          <img src={img} alt="Producto" className="w-20 h-20" />
        </div>
        <div className="min-w-[16rem] ">
          <h1 className="items-start">Producto: {title}</h1>
        </div>
        <div>
          <h1 >Precio: {precio}</h1>
        </div>
      </div>

    </form>
  );
};

export default ElemCarrito;
