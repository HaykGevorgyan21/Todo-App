import './TodoFooter.css';



const TodoFooter = (props)=> {

let totalCountTodos = props.todos.length;
let completedTodos = props.todos.filter((todo)=>{
    return todo.isCompleted === true;
}).length;


    return (
        <div className='todoFooter'>
           <span>{`Is Copleted ${completedTodos}/${totalCountTodos}`}</span>
           <button className='delet' onClick={props.deleteCopleted}>Delete Completed</button>
        </div>
    )
}


export default TodoFooter;