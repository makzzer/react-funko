import ItemLanzamiento from "./ItemLanzamiento";

import { useProductoContext } from "../context/ProductosContext";

const ListaGrid = ({ agregarProductoCarrito }) => {
  //me traigo el context con todos los productos y lo desestructuro
  const { productos } = useProductoContext();

  return productos.map((itemGrilla) => (
    <>
      <div className="py-2">
        <ItemLanzamiento
         
          key={itemGrilla.id}
          id={itemGrilla.id}
          title={itemGrilla.title}
          subTitle={itemGrilla.subTitle}
          img={itemGrilla.img}
          precio={itemGrilla.precio}
          cuotas={itemGrilla.cuotas}
          tag1={itemGrilla.tag1}
          tag2={itemGrilla.tag2}
          agregarProductoCarrito={agregarProductoCarrito}
        />
      </div>
    </>
  ));
};

export default ListaGrid;
