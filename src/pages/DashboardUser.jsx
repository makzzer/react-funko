import Manzanita from "../components/Manzanita";

const DashboardUser = () => {
  const mensaje = "Hola Soy el Dashboard Privado";

  return (
    <>
      <div className="flex container mx-auto min-h-screen items-start m-20 text-center">
        <Manzanita mensaje={mensaje}/>
      </div>
    </>
  );
};

export default DashboardUser;
