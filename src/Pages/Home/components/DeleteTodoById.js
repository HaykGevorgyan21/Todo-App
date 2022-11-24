import REQUESTS from "../../../API/requests";
import get_todo_list from "./getTodo";
function delete_todo_list(id, setTodoList) {
  const colback = (data) => {
    get_todo_list(setTodoList);
  };
  const errorColback = (error) => {
    console.log(error);
  };
  REQUESTS.DELETE_TODO(
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    colback,
    errorColback,
    id
  );
}

export default delete_todo_list;
