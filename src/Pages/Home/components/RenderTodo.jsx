import classes from "../style/rendertodo.module.scss";
import DeletTodo from "./DeletTodo";
import CompletedInout from "./CompletedInout";
function RenderTodoList({ todo, setTodoList }) {
  console.log(todo[0]);
  const todolist = todo?.map((el) => {
    return (
      <ul className={classes["item"]}>
        <CompletedInout
          completed={el.completed}
          id={el._id}
          setTodoList={setTodoList}
        />
        <li>{el.description}</li>
        <DeletTodo id={el._id} setTodoList={setTodoList} />
      </ul>
    );
  });

  return <div className={classes["render_page"]}>{todolist}</div>;
}

export default RenderTodoList;
