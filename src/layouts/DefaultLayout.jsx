import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
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
