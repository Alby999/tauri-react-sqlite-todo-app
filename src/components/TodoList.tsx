import React from 'react';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

interface TodoListProps {
    todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    {todo.title}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;