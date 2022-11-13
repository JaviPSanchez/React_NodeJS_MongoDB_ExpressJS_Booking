const Navbar = () => {
  return (
    <div className="flex justify-center h-16 bg-primary">
      <div className="w-full max-w-5xl text-white flex items-center justify-between">
        <span className="font-medium">lamabooking</span>
        <div className="navItems">
          <button className="ml-5 px-2 py-2 bg-white text-primary">
            Register
          </button>
          <button className="ml-5 px-2 py-2 bg-white text-primary">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
