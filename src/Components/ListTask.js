import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Task";

function ListTask() {
  const todos = useSelector((state) => state.todoReducers.todos);

  return (
    <div
      style={{
        padding: "10px",
      }}
    >
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default ListTask;