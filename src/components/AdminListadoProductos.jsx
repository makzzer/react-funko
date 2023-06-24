import { useState } from "react";
import { NavLink } from "react-router-dom";

const AdminListadoProductos = ({ grillaShop }) => {
  const customers = [
    {
      id: 1,
      image: "https://example.com/image1.jpg",
      item: "Product A",
      customerName: "John Doe",
      totalAmount: "$100",
      status: "Completed",
    },
    {
      id: 2,
      image: "https://example.com/image2.jpg",
      item: "Product B",
      customerName: "Jane Smith",
      totalAmount: "$150",
      status: "Pending",
    },
  ];

  const [elementos, setElementos] = useState(grillaShop);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>

      <div className="container mx-auto flex flex-col">
       
       
       
       
       
        <div className="flex gap-2 justify-between flex-col md:flex-row items-center mb-10">
          <input
            type="text"
            placeholder="Buscar productos"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className=" m-2 md:m-0 border w-full border-gray-300 px-4 py-2 rounded-lg "
          />
          <NavLink className="bg-red-700 md:w-auto md:flex-shrink-0 md:py-2 w-full flex-shrink-0 md:px-4 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg">
            Crear Nuevo
          </NavLink>
        </div>

        <div className="overflow-x-auto">

       

        <table className="w-full divide-y divide-gray-200 overflow-x-auto">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Imagen
              </th>
              <th className="px-6 py-3 bg-gray-50 text-center  text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 bg-gray-50 text-center  text-xs font-medium text-gray-500 uppercase tracking-wider">
                CÓDIGO
              </th>
              <th className="px-6 py-3 bg-gray-50 text-center  text-xs font-medium text-gray-500 uppercase tracking-wider">
                NOMBRE DEL PRODUCTO
              </th>
              <th className="px-6 py-3 bg-gray-50 text-center  text-xs font-medium text-gray-500 uppercase tracking-wider">
                CATEGORÍA
              </th>
            </tr>
          </thead>

          <tbody className="divide-y">

            {elementos.map((elem) => (
              <tr key={elem.id}>


                <td className="px-6 py-4 whitespace-nowrap flex mx-auto justify-center">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 ">
                      <img
                        src={elem.img}
                        alt="Imagen del producto"
                        className="h-12 w-12 mx-auto"
                      />
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-center">{elem.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{elem.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{elem.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{elem.subTitle}</td>
                <td className="px-6 py-4 whitespace-nowrap ">
                  {" "}


                  <button className="text-gray-900">
                    <ion-icon name="create-outline"></ion-icon>
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {" "}
                  <button className="text-red-700">
                    <ion-icon name="trash-outline"></ion-icon>
                  </button>
                </td>
              </tr>
            ))}


          </tbody>
        </table>

        </div>
      </div>
    </>
  );
};

export default AdminListadoProductos;
