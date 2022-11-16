import REQUESTS from "../../../API/requests";

function get_todo_list(state) {
  const colback = (data) => {
    state(data.data);
  };
  const errorColback = (error) => {
    console.log(error);
  };
  REQUESTS.GET_TODO(
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    colback,
    errorColback
  );
}

export default get_todo_list;
