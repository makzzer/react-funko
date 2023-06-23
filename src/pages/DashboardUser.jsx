import Manzanita from "../components/Manzanita";
import { useUserContext } from "../context/UserContext";

const DashboardUser = () => {

  const {user} = useUserContext()

  //const mensaje = "Hola🙂    "+user.email;
  const mensaje = "Hola Mica, me encanta cogerte toda la manzanita";

  const mensaje2 = "🍎🖤"

  return (
    <>
      <div className="flex container mx-auto min-h-screen items-start m-20 text-center">
        <Manzanita mensaje={mensaje} mensaje2={mensaje2}/>
      </div>
    </>
  );
};

export default DashboardUser;
