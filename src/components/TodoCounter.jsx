import { useToDos } from "../context/TodoContext";

const TodoCounter = () => {
  const { totalTask, completedTask } = useToDos();
  return (
    <div className="flex items-center justify-between sub-container text-sm md:text-base 2xl:text-lg">
      <div className="flex items-center gap-2">
        <p>Total task:</p>
        <p>{totalTask}</p>
      </div>
      <div className="flex items-center gap-2">
        <p>Completed task:</p>
        <p>{completedTask}</p>
      </div>
    </div>
  );
};

export default TodoCounter;
