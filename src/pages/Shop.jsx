const Shop = () => {
  return (
    <>
      {/*este es el div del container general*/}
      <div className=" min-h-screen max-w-6xl text-center container text-4xl mt-10 flex flex-col">
        <h1 className="text-6xl mb-4 text-center pt-20">Shop</h1>
        {/*div flex col que contiene  barra y filtros*/}
        <div className="flex flex-col mb-4">
          <form className="flex justify-center items-center mt-2">
            <div>
              <input
                type="text"
                placeholder="Buscá tu pop!"
                className="border border-gray-900 rounded-md py-3 px-6 text-base focus:outline-none focus:ring-2 focus:ring-gray-900 w-full md:w-[50rem]"
              />
            </div>
          </form>
          
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-pink-500 border-black border-2">01</div>
            <div className="bg-blue-500 border-black border-2">02</div>
            <div className="bg-pink-500 border-black border-2">01</div>
            <div className="bg-blue-500 border-black border-2">02</div>
            <div className="bg-pink-500 border-black border-2">01</div>
            <div className="bg-blue-500 border-black border-2">02</div>
            <div className="bg-pink-500 border-black border-2">01</div>
            <div className="bg-blue-500 border-black border-2">02</div>
            <div className="bg-pink-500 border-black border-2">01</div>
            <div className="bg-blue-500 border-black border-2">02</div>
            <div className="bg-pink-500 border-black border-2">01</div>
            <div className="bg-blue-500 border-black border-2">02</div>
            <div className="bg-pink-500 border-black border-2">01</div>
            <div className="bg-blue-500 border-black border-2">02</div>
            <div className="bg-pink-500 border-black border-2">01</div>
            <div className="bg-blue-500 border-black border-2">02</div>
            <div className="bg-pink-500 border-black border-2">01</div>
            <div className="bg-blue-500 border-black border-2">02</div>
            <div className="bg-pink-500 border-black border-2">01</div>
            <div className="bg-blue-500 border-black border-2">02</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
