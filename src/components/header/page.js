import { FaMoon } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="Header shadow-md p-5   ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="logo font-sans font-semibold">
            <h1>Where in the world?</h1>
          </div>
          <div className="menu">
            <button>
              {" "}
              <FaMoon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
