import Users from "./componenets/Users/Users";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <header className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          User Management System
        </h1>
        <p className="text-gray-600">
          View and manage all users in a clean, modern interface
        </p>
      </header>

      <main className="max-w-6xl mx-auto">
        <Users />
      </main>
    </div>
  );
}

export default App;
