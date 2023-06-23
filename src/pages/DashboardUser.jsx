import Manzanita from "../components/Manzanita";
import { useUserContext } from "../context/UserContext";

const DashboardUser = () => {

  const {user} = useUserContext()

  //const mensaje = "Hola🙂    "+user.email;
  const mensaje = "Hola Mica, me encanta cogerte toda la manzanita 🍎🖤";

  return (
    <>
      <div className="flex container mx-auto min-h-screen items-start m-20 text-center">
        <Manzanita mensaje={mensaje}/>
      </div>
    </>
  );
};

export default DashboardUser;
