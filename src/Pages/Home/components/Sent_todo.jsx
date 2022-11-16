import { useState } from "react";
import REQUESTS from "../../../API/requests";
import send_todo from "./sendTodo";
import get_todo_list from "./getTodo";
import { useEffect } from "react";
import RenderTodoList from "./RenderTodo";

function SendTodoList() {
  const [todo, setDodo] = useState();
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    get_todo_list(setTodoList);
  }, []);

  return (
    <div>
      <input
        onChange={(e) => {
          setDodo(e.target.value);
        }}
      />
      <button
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
