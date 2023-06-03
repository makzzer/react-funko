import ItemLanzamiento from "./ItemLanzamiento";

const ListaGrid = ({ grillaShop }) => {
  console.log(grillaShop);
  return grillaShop.map((itemGrilla) => (
    <>
      <ItemLanzamiento
        grillaShop={grillaShop}
        key={itemGrilla.id}
        id={itemGrilla.id}
        title={itemGrilla.title}
        subTitle={itemGrilla.subTitle}
        img={itemGrilla.img}
        precio={itemGrilla.precio}
        cuotas={itemGrilla.cuotas}
        tag1={itemGrilla.tag1}
        tag2={itemGrilla.tag2}
      />
    </>
  ));
};

export default ListaGrid;
