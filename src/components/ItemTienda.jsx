const ItemTienda = ({ id, title, description, img }) => {



  return (
    <>
      <div className="flex flex-col items-center mb-1 px-auto mx-auto container md:flex-row max-w-screen-2xl">

        <article className="flex flex-col md:text-start text-center md:ml-4 mx-auto ">

          <h3 className="text-gray-800 text-4xl mb-4 whitespace-pre-line">
            {title}
          </h3>
          <p className="text-gray-800 text-2xl mb-4">
            {description}
          </p>
          <div className="border-2 border-red-500 mb-4 max-w-xl mx-4 md:mx-0"> </div>
          <div className="flex justify-center md:justify-start">
            <button className="px-20 py-4 text-2xl bg-gray-800 hover:bg-gray-900 text-white font-bold rounded-full">Ver colección</button>
          </div>

        </article>

        <div className="flex flex-col mt-4 md:mt-0 max-w-lg">
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