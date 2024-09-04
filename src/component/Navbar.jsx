import img from "../../public/cool-background.png";
const Navbar = () => {
  return (
    <div className="bg-zinc-600 p-5 text-white">
      <ul className="flex justify-around gap-5">
        <div>
          <h3 className="font-medium text-3xl">Siyam</h3>
        </div>
        <div className="flex gap-5">
          <li>Home</li>
          <li>About Me</li>
          <li>Blog</li>
        </div>
        <div className="bg-sky-600 rounded-md p-2 font-medium">
          <a href="">Hire Me</a>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
