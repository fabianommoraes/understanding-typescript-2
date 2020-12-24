import React from 'react';
import { Todo } from '../todo.model';
import './TodoList.css';

type TodoListProps = {
  items: Todo[];
  todoDeleteHandler: (id: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({ items, todoDeleteHandler }) => {
  const onClick = (text: string) => (_: React.MouseEvent) => {
    todoDeleteHandler(text);
  };

  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={onClick(todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
