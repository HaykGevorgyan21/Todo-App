import classes from '../style/rendertodo.module.scss'

function RenderTodoList({ todo }) {
  const todolist = todo?.map((el) => {
    return (
      <ul className={classes['item']}>
        <li>{el.description}</li>
      </ul>
    );
  });

  return <div className={classes['render_page']}>{todolist}</div>;
}

export default RenderTodoList;
