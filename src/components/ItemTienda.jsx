const ItemTienda = ({id,title,description,img}) => {



  return (
    <>
      <div className="flex justify-center mb-2 mx-auto">

        <article className="flex flex-col justify-center">
          <h3 className="text-gray-800 text-4xl mb-4">
            {title}
          </h3>
          <p className="text-gray-800 text-2xl mb-4">
            {description}
          </p>
          <div className="border border-red-400 mb-4"> </div>
          <div className="flex justify-start">
            <button className="px-8 py-4 text-lg bg-gray-800 hover:bg-gray-900 text-white font-bold rounded-full">Ver colección</button>
          </div>

        </article>

        <div className="col">
          <img
            className="w-full pe-20"
            src={img}
            alt=""
          />
        </div>

      </div>
    </>
  )
}

export default ItemTienda;