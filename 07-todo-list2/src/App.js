import React, { useState } from "react";
import "./App.css";
import Input from "./Input";
import List from "./List";

function App() {
  const [todos, setTodos] = useState(["Learn React", "Learn TypeScript"]);

  return (
    <div className="flex justify-center items-center flex-col h-auto w-4/5 p-3 mt-32 shadow-slate-400 shadow-xl rounded-xl bg-gray-400">
      <h1 className="text-4xl font-mono mb-2">todos</h1>
      <Input addtodos={setTodos} todos={todos} />
      <List addtodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
