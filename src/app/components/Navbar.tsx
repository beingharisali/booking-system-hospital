const Navbar = () => {
  return (
    <header className="bg-red-700 text-white flex justify-between items-center px-6 py-3">
      <h1 className="text-xl font-bold">ADMINISTRATOR</h1>
      <div className="flex space-x-6">
        <span>Healthsol Hospital</span>
        <span>Head Office Location</span>
        <span className="font-semibold">Administrator</span>
      </div>
    </header>
  );
};

export default Navbar;
