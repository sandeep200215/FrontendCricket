import React,{useState} from "react";
import { Link } from "react-router-dom";
const Navbar=()=>
{
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="bg-gray-800 fixed top-0 w-full   ">
        <div className="max-w-5xl mx-auto px-4 sm:px-4 lg:px-2  ">
          <div className="flex items-center justify-between h-12">
            <div className="flex-shrink-0">
              <Link to="/Home" className="text-white font-bold">
               CricketInformer
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-15 flex items-baseline space-x-4 ">
                <Link to="/" className="text-gray-300 hover:underline">
                  Home
                </Link>
                <Link to="/Live" className="text-gray-300 hover:underline">
                  Live Match
                </Link>
                <Link to="/History" className="text-gray-300 hover:underline">
                  History
                </Link>
                <Link to="/PointTable" className="text-gray-300 hover:underline">
                  PointTable
                </Link>
                
              </div>
            </div>
            <div className="-mr-1 flex md:hidden">
              <button
                onClick={toggleNavbar}
                className="inline-flex items-center justify-center p-2 mx-4 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
  
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 mx-2 sm:px-4">
              <Link
                to="/"
                className="  block text-gray-300 hover:underline"
              >
                Home
              </Link>
              <Link
                to="/Live"
                className="block text-gray-300 hover:underline"
              >
                Live
              </Link>
              <Link
                to="/History"
                className="block text-gray-300 hover:underline"
              >
                History
              </Link>
              <Link to="/PointTable" className="text-gray-300 hover:underline">
                  PointTable
                </Link>
            </div>
          </div>
        )}
      </nav>
    );
}
export default Navbar;