import { useState } from "react";


const AdminListadoProductos = ({grillaShop}) => {
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


  const [elementos,setElementos] = useState(grillaShop)



  return (
    <>
      <div className="container mx-auto">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="border p-2">Imagen</th>
                <th className="border p-2">ID</th>
                <th className="border p-2">CÓDIGO</th>
                <th className="border p-2">NOMBRE DEL PRODUCTO</th>
                <th className="border p-2">CATEGORÍA</th>
               
              </tr>
            </thead>
            <tbody className="font-semibold uppercase">
              {elementos.map((elem) => (
                <tr key={elem.id}>
                  <td className="border p-2">
                    <img
                      src={elem.img}
                      alt="Imagen del producto"
                      className="h-10 w-10 mx-auto"
                    />
                  </td>
                  <td className="border p-2">{elem.id}</td>
                  <td className="border p-2">{elem.id}</td>
                  <td className="border p-2">{elem.title}</td>
                  <td className="border p-2">{elem.subTitle}</td>
                  <td className="border p-2"> <button className="text-gray-900"><ion-icon name="create-outline"></ion-icon></button></td>
                  <td className="border p-2"> <button className="text-red-700"><ion-icon name="trash-outline"></ion-icon></button></td>
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
