import React, { useState, useContext } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  // State for search inputs
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState('');

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setIsProfileMenuOpen(false);
  };

  const handleSignupClick = () => {
    setShowSignupForm(true);
    setIsProfileMenuOpen(false);
  };

  const handleLogoutClick = () => {
    logout();
    setIsProfileMenuOpen(false);
  };

  const handleSearch = () => {
    console.log("Search Parameters:", { destination, checkInDate, checkOutDate, guests });
    // Optionally, clear fields after search or provide user feedback
    // setDestination('');
    // setCheckInDate('');
    // setCheckOutDate('');
    // setGuests('');
    // alert(`Searching for:
    // Destination: ${destination}
    // Check-in: ${checkInDate}
    // Check-out: ${checkOutDate}
    // Guests: ${guests}`);
  };

  return (
    <nav className="relative w-full border-b border-gray-200">


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
          <div className="relative"> {/* Added relative positioning for dropdown */}
            <button
              onClick={toggleProfileMenu}
              className="flex items-center gap-2 px-3 py-2 border rounded-full hover:shadow-md focus:outline-none"
            >
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
            </button>
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-white rounded-md shadow-lg py-1 z-50">
                {currentUser ? (
                  <>
                    <div className="px-4 py-2 text-sm text-gray-700">
                      Welcome, {currentUser.email.split('@')[0]}
                    </div>
                    <button
                      onClick={handleLogoutClick}
                      className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleLoginClick}
                      className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                    >
                      Login
                    </button>
                    <button
                      onClick={handleSignupClick}
                      className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </div>
            )}
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
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="flex flex-col pl-4 border-l">
            <label className="text-xs font-bold text-gray-500">Check-in</label>
            <input
              type="text" // Kept as text per instruction, consider type="date"
              placeholder="Add dates"
              className="text-sm focus:outline-none"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col pl-4 border-l">
            <label className="text-xs font-bold text-gray-500">Check-out</label>
            <input
              type="text" // Kept as text per instruction, consider type="date"
              placeholder="Add dates"
              className="text-sm focus:outline-none"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col pl-4 border-l">
            <label className="text-xs font-bold text-gray-500">Who</label>
            <input
              type="text" // Kept as text, consider type="number"
              placeholder="Add guests"
              className="text-sm focus:outline-none"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
          <button
            className="p-2 text-white bg-red-600 rounded-full hover:bg-red-500"
            onClick={handleSearch}
          >
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

      {showLoginForm && <LoginForm setShowLoginForm={setShowLoginForm} />}
      {showSignupForm && <SignupForm setShowSignupForm={setShowSignupForm} />}
    </nav>
  );
};

export default Navbar;