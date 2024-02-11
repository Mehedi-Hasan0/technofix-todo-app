export default function filteredTodoForTable(arr, searchParam) {
  let filteredData = arr;

  if (searchParam === "active") {
    filteredData = filteredData.filter((todo) => !todo.completed);
  }
  if (searchParam === "completed") {
    filteredData = filteredData.filter((todo) => todo.completed);
  }

  return filteredData;
}
