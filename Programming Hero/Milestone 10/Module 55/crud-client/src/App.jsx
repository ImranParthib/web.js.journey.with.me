import "./App.css";
import Users from "./components/Users";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        CRUD Application
      </h1>
      <Users />
    </div>
  );
}

export default App;
