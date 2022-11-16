function RenderTodoList({ todo }) {
  const todolist = todo?.map((el) => {
    return (
      <ul>
        <li>{el.description}</li>
      </ul>
    );
  });

  return <div>{todolist}</div>;
}

export default RenderTodoList;
