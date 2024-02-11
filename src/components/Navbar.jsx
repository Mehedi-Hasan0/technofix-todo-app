import { Link, useSearchParams } from "react-router-dom";

const Navbar = () => {
  const [searchParams] = useSearchParams();
  const todosParams = searchParams.get("todos");
  return (
    <nav className="sub-container flex flex-row items-center justify-between border-b border-[#ccc]">
      <Link
        to="/"
        className={`${
          todosParams === null ? "active" : "non-active"
        } sm:text-lg md:text-xl 2xl:text-2xl`}
      >
        All
      </Link>
      <Link
        to="/?todos=active"
        className={`${
          todosParams === "active" ? "active" : "non-active"
        } sm:text-lg md:text-xl 2xl:text-2xl`}
      >
        Active
      </Link>
      <Link
        to="/?todos=completed"
        className={`${
          todosParams === "completed" ? "active" : "non-active"
        } sm:text-lg md:text-xl 2xl:text-2xl`}
      >
        Completed
      </Link>
    </nav>
  );
};

export default Navbar;
