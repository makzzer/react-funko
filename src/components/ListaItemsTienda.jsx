import ItemTienda from "./ItemTienda";

const ListaItemsTienda = ({ elementosLand }) => {

{/*comento estas clases en el div arriba de <ItemTienda    md:py-1 max-w-6xl mx-auto md:flex items-center container justify-between  md:px-10 px-2*/}


  return (
    <>
      {elementosLand.map((elem) => (
        <>
        <div className="">
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
