import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-black w-full h-16 flex justify-between items-center px-4 md:px-6">
      <Link
        className="w-36 sm:w-48 md:w-60 cursor-pointer hover:animate-pulse"
        to={"/"}
      >
        <img
          src="/Logo.png"
          alt="Logo do Site"
          className="w-full h-auto object-contain"
        />
      </Link>

      <Link
        to={"/favoritos"}
        className="bg-white py-1.5 px-3 md:px-4 rounded-full cursor-pointer text-black text-sm md:text-base font-medium hover:bg-gray-200 transition-colors ease-in-out duration-200"
      >
        Meus Favoritos
      </Link>
    </header>
  );
}

export default Header;
