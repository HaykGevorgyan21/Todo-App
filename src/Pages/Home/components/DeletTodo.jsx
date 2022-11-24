import delete_todo_list from "./DeleteTodoById";
import classes from '../style/deletetodo.module.scss'
function DeletTodo({ id, setTodoList }) {
  return (
    <button
    className={classes.delete}
      onClick={() => {
        delete_todo_list(`/${id}`, setTodoList);
      }}
    >
      Delete
    </button>
  );
}

export default DeletTodo;
