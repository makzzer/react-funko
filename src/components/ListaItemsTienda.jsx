import ItemTienda from "./ItemTienda";

const ListaItemsTienda = ({ elementosLand }) => {
  console.log(elementosLand);
  return (
    <>
      {elementosLand.map((elem) => (
        <>
        <div className="md:py-1 max-w-6xl mx-auto md:flex items-center container justify-between  md:px-10 px-2">
          <ItemTienda
            key={elem.id}
            title={elem.title}
            description={elem.description}
            img={elem.img}
            id={elem.id}
          />
          </div>
        </>
      ))}
    </>
  );
};

export default ListaItemsTienda;
