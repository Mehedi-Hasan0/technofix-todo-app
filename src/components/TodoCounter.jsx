const TodoCounter = () => {
  return (
    <div className="flex items-center justify-between sub-container text-sm md:text-base 2xl:text-lg">
      <div className="flex items-center gap-2">
        <p>Total task:</p>
        <p>0</p>
      </div>
      <div className="flex items-center gap-2">
        <p>Completed task:</p>
        <p>0</p>
      </div>
    </div>
  );
};

export default TodoCounter;
