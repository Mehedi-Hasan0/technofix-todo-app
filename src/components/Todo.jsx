import { useToDos } from "../context/TodoContext";
import Button from "./ui/Button";
import filteredTodoForTable from "../helper/filteredTodoForTable";
import sortByPriority from "../helper/sortByPriority";
import { useSearchParams } from "react-router-dom";
import EditTodoModal from "./EditTodoModal";
import { useEffect, useState } from "react";

const Todo = () => {
  const { todo, handleToggleToDo, deleteToDo } = useToDos();

  const [todoId, setTodoId] = useState(null);
  const [priorityForEdit, setPriorityForEdit] = useState("Low");
  const [searchParams] = useSearchParams();
  const todosParams = searchParams.get("todos");

  // filtering todo based on active and completed
  const filteredTodoData = filteredTodoForTable(todo, todosParams);
  // sorting based on priority
  const sortedTodo = filteredTodoData.sort(sortByPriority);

  // setting id and priority and opening edit modal
  const openEditModal = (id, priority) => {
    setTodoId(id);
    setPriorityForEdit(priority);
  };

  useEffect(() => {
    if (todoId !== null) {
      document.getElementById("edit_modal").showModal();
    }
  }, [todoId]);

  return (
    <>
      <div className="flex flex-col max-w-[300px] sm:min-w-[550px] md:min-w-full pt-3">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Priority
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 flex justify-center items-center"
                    >
                      Complete
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Edit
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedTodo &&
                    sortedTodo?.length !== 0 &&
                    sortedTodo?.map((todo, i) => {
                      return (
                        <tr
                          key={i}
                          className="border-b dark:border-neutral-500"
                        >
                          <td
                            className={`whitespace-nowrap px-6 py-4 font-medium ${
                              todo?.priority === "High"
                                ? "text-red-400"
                                : todo?.priority === "Medium"
                                ? "text-blue-400"
                                : "text-green-400"
                            }`}
                          >
                            {todo?.priority}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 min-w-[120px]">
                            {todo?.completed === false
                              ? "Incomplete"
                              : "Completed"}
                          </td>
                          <td
                            className={`whitespace-wrap px-6 py-4 min-w-[200px] ${
                              todo?.completed === true ? "line-through" : ""
                            }`}
                          >
                            {todo?.task}
                          </td>
                          <td>
                            <div className="flex justify-center items-center py-4">
                              <input
                                type="checkbox"
                                checked={todo?.completed}
                                onChange={() => {
                                  handleToggleToDo(todo?.id);
                                }}
                                className=" w-5 h-5 cursor-pointer"
                              />
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center">
                              <Button
                                onClick={() => {
                                  openEditModal(todo?.id, todo?.priority);
                                }}
                                btnTitle="Edit"
                                className="px-3 2xl:px-4 bg-[#78de9c] hover:bg-[#68b984] transition duration-200 ease-in"
                              />
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center">
                              <Button
                                onClick={() => {
                                  deleteToDo(todo?.id);
                                }}
                                btnTitle="Delete"
                                className="px-3 2xl:px-4 bg-red-500"
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* edit todo modal */}
      <EditTodoModal id={todoId} priority={priorityForEdit} />
    </>
  );
};

export default Todo;
