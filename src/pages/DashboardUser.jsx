import UnderConstruction from "../components/UnderConstruction";

const DashboardUser = () => {
  const mensaje = "Hola Soy el Dashboard Privado";

  return (
    <>
      <div className="flex container mx-auto min-h-screen items-start m-20 text-center">
        <UnderConstruction mensaje={mensaje} />;
      </div>
    </>
  );
};

export default DashboardUser;
