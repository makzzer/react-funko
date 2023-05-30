import ItemTienda from "./ItemTienda"



const ListaItemsTienda = ({elementosLand}) => { 
    console.log(elementosLand)
    return (
        <>
        {
            elementosLand.map ( elem => (
                <ItemTienda key={elem.id}
                 title={elem.title}
                  description={elem.description}
                   img={elem.img}
                    id={elem.id}/>
            ))
        }
        </>
    )
 }

 export default ListaItemsTienda;