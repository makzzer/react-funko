import IconoLogotipoSimple from "../components/icons/IconLogotipoSimple";

const UnderConstruction = () => {
  return (
    <>
      
        <div className="mx-5 flex md:flex-row flex-col justify-center gap-6 items-center md:mx-0 container font-mono font-bold bg-gray-900 text-5xl mt-20 pb-10 pt-12">
          <h1 className="text-white">Page under Construction</h1>
          <div className="text-green-500">
            {" "}
            {/* Agrega la clase "text-green-500" */}
            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-none duration-300">
              <IconoLogotipoSimple ancho={60} alto={80} />{" "}
              {/* Puedes usar "#00FF00" para verde */}
            </div>
          </div>
        </div>
      
    </>
  );
};

export default UnderConstruction;
