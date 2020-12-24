import React, { useRef } from 'react';

// type TodoListProps = {
//   items: { id: string; text: string }[];
// };

const inputId = 'todo-text';

const NewTodo: React.FC = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    console.log(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor={inputId}>Todo Text</label>
        <input type="text" id={inputId} ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
