import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

const DefaultLayout = () => {
  const { pathPagina } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathPagina]);

  console.log(pathPagina)

  return (
    <>
      <div className="">
        <header>
          <NavBar />
        </header>

        <main className="container max-w-6xl mx-auto">
          <Outlet />
        </main>

        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
