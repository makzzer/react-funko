import { useRouteError } from "react-router-dom";

const NotFound = () => {
    //uso este HOOK para capturar el error
    const error = useRouteError()

  return(
        <>
        <div className="text-center">
        <h1>404</h1>
        <h1>Page Not Found</h1>
        <h1>{error.message}</h1>
        </div>
        </>
    )
};

export default NotFound;
