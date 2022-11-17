import { useState } from "react";
import REQUESTS from "../../../API/requests";
import send_todo from "./sendTodo";
import get_todo_list from "./getTodo";
import { useEffect } from "react";
import RenderTodoList from "./RenderTodo";
import classes from '../style/sendtodo.module.scss'

function SendTodoList() {
  const [todo, setDodo] = useState();
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    get_todo_list(setTodoList);
  }, []);

  return (
    <div>
      <input className={classes['input_todo']}
        onChange={(e) => {
          setDodo(e.target.value);
        }}
      />
      <button className={classes['add_todo']}
        onClick={() => {
          send_todo(todo, get_todo_list(setTodoList));
        }}
      >
        add todo
      </button>
      <RenderTodoList todo={todoList} />
    </div>
  );
}

export default SendTodoList;
