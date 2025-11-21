function Navbar() {
  return (
    <nav className="bg-[#571212] py-1  h-[68px] flex items-center">
      {/* Ovde kreiram nas Loga za moj web site */}
      <div className="flex justify-between items-center w-[80%] mx-auto">
        {/*Zajednicki border padding za gore */}
        <div className="flex space-x-16">
          <div className="flex flex-col text-yellow-500 leading-tight gap-0">
            {/*boja LOGO texta zuta */}
            <h1 className="!text-[18px] leading-none m-0 font-md">ALLABOUT</h1>
            <h1 className="text-[20px] leading-none m-0 font-semibold">
              MOVIES
            </h1>
          </div>

          {/*Dugme */}
          <button className="text-[18px] text-yellow-500 hover:underline">
            EXPLORE
          </button>
        </div>

        {/*Search polje */}
        <div>
          <input
            type="text"
            placeholder="Search..."
            className=" bg-white w-[180px] h-8 text-[#c2c2c2] text-large outline-none px-4 
            placeholder:text-[#e67111] rounded-xl"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
