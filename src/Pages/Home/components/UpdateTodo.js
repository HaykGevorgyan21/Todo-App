import REQUESTS from "../../../API/requests";
import get_todo_list from "./getTodo";
function update_todo_list(id, setTodoList, completed) {
  const body = {
    completed: !completed,
  };
  const colback = (data) => {
    get_todo_list(setTodoList);
  };
  const errorColback = (error) => {
    console.log(error);
  };
  REQUESTS.UPDATE_TODO(
    body,
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    colback,
    errorColback,
    id
  );
}

export default update_todo_list;
