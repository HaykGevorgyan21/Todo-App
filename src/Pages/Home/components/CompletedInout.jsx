import update_todo_list from "./UpdateTodo";
import classes from '../style/completedtodo.module.scss'
function CompletedInout({ completed, id, setTodoList }) {
  return (
    <input
    className={classes.checkbox}
      type={"checkbox"}
      checked={completed}
      onClick={() => {
        update_todo_list(`/${id}`, setTodoList, completed);
      }}
    />
  );
}
export default CompletedInout;
