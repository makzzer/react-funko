import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const NotFound = () => {
    //uso este HOOK para capturar el error
    const error = useRouteError()

  return(
        <>
        <NavBar/>
        <div className="text-center text-4xl py-2">
        <h1>404</h1>
        <h1>Page Not Found</h1>
        <h1>{error.message}</h1>
        </div>
        <Footer/>
        </>
    )
};

export default NotFound;
