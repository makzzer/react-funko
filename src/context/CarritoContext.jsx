import { createContext, useEffect, useState } from "react";
import { useContext } from "react";

//Creo el contexto para compartir el elemento carrito
export const CarritoContext = createContext();

//creo el provider para inicializar el valor del carrito y grabarlo en local storage

const CarritoProvider = ({ children }) => {
  //defino que los itemsCarrito me los levante desde localStorage o que arranque vacio
  const itemsCarrito = JSON.parse(localStorage.getItem("itemscarrito")) || [];

  //acá creo el estado que voy a compartir
  const [carrito, setCarrito] = useState(itemsCarrito);

  //aca voy a estar atento a cambios en los carrito que defino en el [carrito,setCarrito]
  useEffect(() => {
    localStorage.itemscarrito = JSON.stringify(carrito);
  }, [carrito]);

  //acá le agrego un item al carrito
  const agregarAlCarrito = (item) => {
    setCarrito([...carrito, item]);
    //console.log(id)
  };

  //borrar carrito lo uso en Carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  //eliminar elemento del carrito lo uso en elemCarrito
  const eliminarElementoCarrito = (id) => {
    const nuevoArraySinElem = carrito.filter((elemento)=> elemento.id !== id)
    setCarrito(nuevoArraySinElem)
  }

  //lo uso en Carrito, veo la suma total del precio de los articulos comprados
  const totalCarrito = () => {
    let total = 0;
    carrito.forEach((elemento) => {
      total += elemento.precio;
    });
    return total
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, setCarrito, agregarAlCarrito, vaciarCarrito,totalCarrito,eliminarElementoCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

//exporto mi provider
export default CarritoProvider;

//Creo mi hook para desestructurar y obtener el contenido de mi provider

export const useCarritoContext = () => useContext(CarritoContext);
