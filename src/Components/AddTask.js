import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Action/Actions";

function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  // handle Add
  const handleAdd = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addTodo({ id: Math.random(), done: false, text }));
      setText("");
    } else {
      alert("remplir le champs");
    }
  };
  return (
    <div>
      <Form
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "auto",
          width: "50%",
          paddingTop: "10px",
        }}
        onSubmit={handleAdd}
      >
        <FormControl
          type="text"
          placeholder="add task ..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant="secondary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
}

export default AddTask;