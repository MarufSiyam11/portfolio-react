const Navbar = () => {
  return (
    <div className="bg-rose-100 p-5 ">
      <ul className="flex justify-between gap-5">
        <div>
          <h3 className="font-bold text-3xl">
            Si<span className="text-amber-500">y</span>am
          </h3>
        </div>
        <div className="flex gap-5 text-xl font-medium">
          <li>Home</li>
          <li>About Me</li>
          <li>Blog</li>
        </div>
        <div className="bg-amber-500 rounded-md p-2 font-medium">
          <a href="">Hire Me</a>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
