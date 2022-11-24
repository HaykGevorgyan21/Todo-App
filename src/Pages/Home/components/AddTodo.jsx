import classes from "../style/sendtodo.module.scss";
import { useState } from "react";
import send_todo from "./sendTodo";
function AddTodo({ setTodoList }) {
  const [todo, setDodo] = useState();
  return (
    <div className={classes['background_input']}>
      <input
        className={classes["input_todo"]}
        value={todo}
        onChange={(e) => {
          setDodo(e.target.value);
        }}
      />
      <button
        className={classes["add_todo"]}
        onClick={() => {
          send_todo(todo, setTodoList, setDodo);
        }}
      >
        add todo
      </button>
    </div>
  );
}

export default AddTodo;
