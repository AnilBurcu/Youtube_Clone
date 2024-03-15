import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { GoBellFill } from "react-icons/go";
import { IoIosVideocam } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <Link to={"/"} className="flex items-center gap-[10px]">
        <img className="w-[50px]" src="/youtube.png" alt="youtube logo" />
        <h1 className="hidden md:block text-2xl">Youtube</h1>
      </Link>
      <form className="flex items-center border border-gray-400 rounded-[20px] overflow-hidden">
        <input
          className="bg-black text-white px-3 py-1 outline-none w-[300px]"
          type="search"
        />
        <button className="border-l px-5 text-xl">
          <IoSearchOutline />
        </button>
      </form>
      <div className="flex gap-5 text-2xl cursor-pointer">
        <GoBellFill className="hover:text-[rgb(234,51,35)] transition duration-75" />
        <IoIosVideocam className="hover:text-[rgb(234,51,35)] transition duration-75" />
      </div>
    </div>
  );
};

export default Header;
