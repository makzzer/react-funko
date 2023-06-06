import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { ScrollTop } from "../utilities/ScrollTop";

const DefaultLayout = () => { 

  return (
    <>
      <ScrollTop />
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
