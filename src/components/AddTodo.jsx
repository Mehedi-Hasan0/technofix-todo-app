import Button from "./ui/Button";

const AddTodo = () => {
  return (
    <form className="sub-container flex flex-col items-center gap-5">
      <textarea
        cols="30"
        rows="8"
        maxLength="200"
        placeholder="Write your task here..."
        className="border border-[#ccc] rounded w-full py-2 px-3 placeholder:text-sm placeholder:2xl:text-base placeholder:text-[#ccc]"
      />
      <div className="flex items-center gap-5">
        <Button
          btnTitle="Add"
          className="px-6 2xl:px-8 bg-[#68b984] text-center min-w-[120px]"
        />
        {/* priority options */}
        <div className="dropdown dropdown-hover dropdown-top dropdown-end md:dropdown-right">
          <div
            tabIndex={0}
            role="button"
            className="px-6 2xl:px-8 py-1 hover:bg-gray-200 rounded border border-[#ccc] hover:border-transparent transition duration-200 ease-in text-[#5b5b5b] hover:text-[#3e3e3e]"
          >
            Priority
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Low</a>
            </li>
            <li>
              <a>Medium</a>
            </li>
            <li>
              <a>High</a>
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
