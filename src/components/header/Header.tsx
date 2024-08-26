import PhoneIcon from "../../../public/header/phone-icon.svg";
import TruckIcon from "../../../public/header/truck.svg";
import SedeIcon from "../../../public/header/sede.svg";

const Header = () => {
  return (
    <header className="bg-[#00b8ff] text-white py-1.5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <div className="flex items-center space-x-2 md:space-x-4">
          <PhoneIcon className="h-5 w-5 mr-1 md:mr-2" />
          <span className="text-base md:text-base">04249007769</span>
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="flex items-center">
            <TruckIcon className="h-5 w-5 mr-1 md:mr-2" />
            <span className="text-base md:text-base">
              Envíos a nivel nacional
            </span>
          </div>
        </div>
        <button className="bg-[#00b8ff] text-white px-2 py-1 md:px-4 md:py-2 rounded-md border border-white flex items-center hover:bg-[#0099cc] transition-colors duration-300">
          <SedeIcon className="h-5 w-5 mr-1 md:mr-2" />
          <span className="text-base md:text-base">Seleccionar sede</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
