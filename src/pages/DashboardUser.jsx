import AdminListadoProductos from "../components/AdminListadoProductos";
import { useUserContext } from "../context/UserContext";
import Manzanita from "../components/Manzanita";
import { grillaShop } from "../App";
import { NavLink } from "react-router-dom";

const DashboardUser = () => {
  const { user } = useUserContext();

  const mensaje = "hola test1";

  //const mensaje = "Hola🙂    " + user.email;

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

  return (
    <>
      <div className="transition-all duration-700 min-h-screen mx-auto max-w-6xl text-center items-center flex-col md:mt-20 mt-10">
     
        <div className="flex md:justify-between md:flex-row flex-col md:mt-24 md:me-auto mb-10 mt-12 mt-22 m-2 pt-14">
          <h1 className="md:text-4xl text-3xl md:text-start text-center my-2 md:my-0 md:me-auto">
            Listado de Productos
          </h1>

          <div className="flex items-center justify-center md:justify-between md:mx-0 mx-auto">
            <NavLink
              to={"#"}
              className="inline-block  md:mx-0 w-auto md:ms-auto p-2 me-1 md:me-0 bg-red-700 rounded-lg text-lg hover:bg-red-600 text-white"
            >
              Agregar Producto
            </NavLink>
          </div>
        </div>

        <div className="m-2">
          <AdminListadoProductos grillaShop={grillaShop} />
        </div>

        <Manzanita />
      </div>
    </>
  );
};

export default DashboardUser;
