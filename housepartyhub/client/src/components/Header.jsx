import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-green-950 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-zinc-50 underline decoration-wavy decoration-amber-500">
              HouseParty🏠
            </span>
            <span className="text-amber-500">Hub</span>
          </h1>
        </Link>

        <form className="bg-slate-100 p-2 rounded-lg flex items-center ">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-500" />
        </form>

        <ul className="text-slate-50 flex gap-4">
          <Link to={"/"}>
            <li className="hidden sm:inline hover:underline decoration-amber-500 decoration-2 underline-offset-8">
              Home
            </li>
          </Link>

          <Link to={"/about"}>
            <li className="hidden sm:inline hover:underline decoration-amber-500 decoration-2 underline-offset-8">
              About
            </li>
          </Link>

          <Link to={"/sign-in"}>
            <li className="hover:underline decoration-amber-500 decoration-2 underline-offset-8">
              Sign-in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
