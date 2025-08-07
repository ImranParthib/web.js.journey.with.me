import "./App.css";
import Users from "./componenets/Users/Users";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white py-10 px-4">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-700 drop-shadow-sm">
          Welcome to User Management
        </h1>
        <p className="text-gray-600 mt-2">Manage and view your users easily</p>
      </header>
      <Users />
    </div>
  );
}

export default App;
