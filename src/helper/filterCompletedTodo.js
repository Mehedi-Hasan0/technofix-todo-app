// filter function to filter completed todo
export default function filterCompletedTodo(arr) {
  const completedTodo = arr?.filter((todo) => todo.completed === true);
  return completedTodo.length !== 0 ? completedTodo.length : 0;
}
