import React from "react";

const TodoItem = ({ todo, borrarTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>{todo.text}</span>
      <button
        onClick={() => borrarTodo(todo)}
        className="btn btn-danger btn-sm"
      >
        Eliminar
      </button>
    </li>
  );
};

export default TodoItem;
