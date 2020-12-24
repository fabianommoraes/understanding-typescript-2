import React, { useRef } from 'react';
import './NewTodo.css';

type NewTodoProps = {
  todoAddHandler: (todoText: string) => void;
};

const inputId = 'todo-text';

const NewTodo: React.FC<NewTodoProps> = ({ todoAddHandler }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    todoAddHandler(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor={inputId}>Todo Text</label>
        <input type="text" id={inputId} ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
