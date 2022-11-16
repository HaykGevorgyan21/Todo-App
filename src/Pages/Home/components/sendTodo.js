import REQUESTS from "../../../API/requests";

const send_todo = (todo, grtTodo) => {
  const body = {
    description: todo,
  };

  const colback = (data) => {
    grtTodo();
  };
  const errorColback = (error) => {
    console.log(error);
  };
  REQUESTS.ADD_TODO(
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body,
    colback,
    errorColback
  );
};

export default send_todo;
