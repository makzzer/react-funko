const ItemTienda = ({ id, title, description, img }) => {



  return (
    <>
      <div className=" flex flex-col mb-1 mx-auto px-auto justify-around  container md:flex-row max-w-screen-2xl">

        <article className="flex flex-col md:text-start text-center mt-2 mx-auto justify-center">

          <h3 className="text-gray-800 text-4xl mb-4 whitespace-pre-line">
            {title}
          </h3>
          <p className="text-gray-800 text-2xl mb-4">
            {description}
          </p>
          <div className="border border-red-400 mb-4"> </div>
          <div className="flex justify-center md:justify-start">
            <button className="px-8 py-4 text-lg bg-gray-800 hover:bg-gray-900 text-white font-bold rounded-full">Ver colección</button>
          </div>

        </article>

        <div className="flex flex-col">
          <img
            className="w-full px-auto"
            src={img}
            alt="" />
        </div>

      </div>
    </>
  )
}

export default ItemTienda;