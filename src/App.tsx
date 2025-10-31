import React, { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api';

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const fetchTodos = async () => {
    const fetchedTodos = await invoke('get_todos'); // Assuming 'get_todos' is the Tauri command
    setTodos(fetchedTodos);
  };

  const addTodo = async (todo: string) => {
    await invoke('add_todo', { todo }); // Assuming 'add_todo' is the Tauri command
    fetchTodos(); // Refresh the todo list after adding
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>TODO List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      {/* Add more UI elements to add and manage todos */}
    </div>
  );
};

export default App;