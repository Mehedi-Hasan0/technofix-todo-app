import EditTodo from "./EditTodo";

const EditTodoModal = ({ id, priority }) => {
  return (
    <>
      <dialog id="edit_modal" className="modal">
        <div className="modal-box overflow-hidden">
          <EditTodo todoId={id} priority={priority} />
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default EditTodoModal;
