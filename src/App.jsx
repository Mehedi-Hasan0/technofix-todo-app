import AddTodo from "./components/AddTodo";
import Navbar from "./components/Navbar";
import TodoCounter from "./components/TodoCounter";

function App() {
  return (
    <main className="main-container flex flex-col justify-center items-center gap-8 overflow-hidden">
      <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold">
        TechnoFix todo app
      </h2>
      <Navbar />
      <AddTodo />
      <TodoCounter />
    </main>
  );
}

export default App;
