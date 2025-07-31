import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";

function App() {
  return (
    <main className="w-screen h-screen items-center justify-center bg-gray-100">
      <div className="container max-w md mx-auto">
      <TaskForm />
      <TaskList />
      </div>
    </main>
  );
}

export default App;
