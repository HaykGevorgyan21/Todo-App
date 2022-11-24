import { useState } from "react";
import AddTodo from "./AddTodo";
import get_todo_list from "./getTodo";
import { useEffect } from "react";
import RenderTodoList from "./RenderTodo";
import classes from "../style/sendtodo.module.scss";

function SendTodoList() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    get_todo_list(setTodoList);
  }, []);

  return (
    <div className={classes["background"]}>
      <AddTodo setTodoList={setTodoList} />
      <RenderTodoList todo={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default SendTodoList;
