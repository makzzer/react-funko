import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <div className="container max-w-6xl mx-auto">
        <header className="bg-gray-900">
          <NavBar />
        </header>

        <main>
            <Outlet/>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;