function Navbar() {
  return (
    <nav className="bg-[#935454] py-1 px-6 h-[60px] flex items-center">
      {/* Ovde kreiram nas Loga za moj web site */}
      <div className="flex justify-between items-center w-[80%] mx-auto">
        {/*Zajednicki border padding za gore */}
        <div className="flex space-x-16">
          <div className="flex flex-col text-yellow-500 leading-tight">
            {/*boja LOGO texta zuta */}
            <h4 className="text-xl leading-3 font-lg">ALLABOUT</h4>
            <h1 className="text-[20px] leading-4 font-semibold">MOVIES</h1>
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
