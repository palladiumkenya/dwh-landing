const Navbar = () => {
  return (
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <img className="h-8 w-8" src="/next.svg" alt="DWH" />
              <img className="h-8 w-8" src="/next.svg" alt="NASCOP" />
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
              <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
              <a href="#" className="text-gray-800 hover:text-gray-600">Services</a>
              <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
            </div>
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700">Sign Up</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-blue-700">Login</button>
            </div>
          </div>
        </div>
      </nav>
  );
}
export default Navbar;
