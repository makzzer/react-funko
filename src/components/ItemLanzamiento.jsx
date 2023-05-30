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
      {/*IronMan 1 */}
      <div className="uppercase max-w-xs rounded overflow-hidden shadow-lg mx-auto mb-2 flex flex-col">
        <div className="flex justify-end">
          <span className="inline-block bg-red-600 px-2 text-white rounded">
            Nuevo
          </span>
        </div>
        <img
          className="w-full relative"
          src={img}
          alt="Imagen de la card"
        ></img>
        <div className="px-6 py-4">
          <div className="font-semibold text-md">{subTitle}</div>
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-xl">${precio}</p>
          <p className="text-blue-500 text-md">{cuotas}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {tag1}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {tag2}
          </span>
        </div>
      </div>
    </>
  );
};

export default ItemLanzamiento;
