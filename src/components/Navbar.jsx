import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sub-container flex flex-row items-center justify-between border-b border-[#ccc]">
      <Link to="/" className={"sm:text-lg md:text-xl 2xl:text-2xl"}>
        All
      </Link>
      <Link
        to="/?todos=active"
        className={"sm:text-lg md:text-xl 2xl:text-2xl"}
      >
        Active
      </Link>
      <Link
        to="/?todos=completed"
        className={"sm:text-lg md:text-xl 2xl:text-2xl"}
      >
        Completed
      </Link>
    </nav>
  );
};

export default Navbar;
