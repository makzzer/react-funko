const ItemLanzamiento = ({
  id,
  title,
  subTitle,
  img,
  precio,
  cuotas,
  tag1,
  tag2,
}) => {
  
  console.log(tag1, tag1);
  return (
    <>
      {/*Item Lanzamiento template*/}
      <div className="uppercase max-w-xs rounded overflow-hidden shadow-lg mx-auto mb-2 flex flex-col ">
        <div className="flex justify-end">
          <span className="inline-block bg-red-600 px-2 text-white rounded">
            Nuevo
          </span>
        </div>
        <img
          className="w-full grow-0"
          src={img}
          alt="Imagen de la card"
        ></img>
        <div className="md:px-6 font-semibold px-4 text-center ">
          <div className="font-semibold md:text-md text-sm">{subTitle}</div>
          <div className="font-bold md:text-2xl text-sm mb-2">{title}</div>
          <p className="text-gray-700 md:text-xl font-semibold text-lg font-bol">${precio}</p>
          <p className="text-blue-500 md:text-lg font-semibold text-sm mb-2">{cuotas}</p>
        </div>
        <div className="md:px-4 md:pt-2 pt-0 pb-2  text-center ">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {tag1}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {tag2}
          </span>
        </div>
      </div>
    </>
  );
};

export default ItemLanzamiento;