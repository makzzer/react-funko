const Card = () => {
  return (
    <>
      
      

      <div className="max-w-md rounded overflow-hidden shadow-lg">
      <img className="w-full" src="https://picsum.photos/200/300" alt="Imagen de la tarjeta" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Título de la tarjeta</div>
        <p className="text-gray-700 text-base">
          Contenido de la tarjeta. Puedes agregar aquí cualquier texto o elementos adicionales.
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Etiqueta 1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Etiqueta 2
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          Etiqueta 3
        </span>
      </div>
    </div>


    </>
  );
};

export default Card;
