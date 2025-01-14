import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-200">


      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-2">
          <img
            className="w-8"
            src="/images/airbn_logo.png"
            alt="Airbnb logo"
          />
          <span className="text-lg font-bold text-red-600">airbnb</span>
        </div>


        <div className="flex gap-8 font-medium text-gray-600">
          <a href="#" className="hover:underline">
            Stays
          </a>
          <a href="#" className="hover:underline">
            Experiences
          </a>
        </div>

        
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm font-medium text-gray-700">
            Airbnb your home
          </a>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <img
              src="/images/web.png"
              alt="Globe icon"
              className="w-5"
            />
          </button>
          <div className="flex items-center gap-2 px-3 py-2 border rounded-full hover:shadow-md">
            <img
              src="/images/bar.png"
              alt="Menu icon"
              className="w-4"
            />
            <img
              src="/images/profile-user.png"
              alt="Profile icon"
              className="w-6"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 px-4 py-2 bg-white border rounded-full shadow-md">
          <div className="flex flex-col">
            <label className="text-xs font-bold text-gray-500">Where</label>
            <input
              type="text"
              placeholder="Search destinations"
              className="text-sm focus:outline-none"
            />
          </div>
          <div className="flex flex-col pl-4 border-l">
            <label className="text-xs font-bold text-gray-500">Check-in</label>
            <input
              type="text"
              placeholder="Add dates"
              className="text-sm focus:outline-none"
            />
          </div>
          <div className="flex flex-col pl-4 border-l">
            <label className="text-xs font-bold text-gray-500">Check-out</label>
            <input
              type="text"
              placeholder="Add dates"
              className="text-sm focus:outline-none"
            />
          </div>
          <div className="flex flex-col pl-4 border-l">
            <label className="text-xs font-bold text-gray-500">Who</label>
            <input
              type="text"
              placeholder="Add guests"
              className="text-sm focus:outline-none"
            />
          </div>
          <button className="p-2 text-white bg-red-600 rounded-full hover:bg-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16l-4-4m0 0l4-4m-4 4h16"
              />
            </svg>
          </button>
        </div>

    </nav>
  );
};

export default Navbar