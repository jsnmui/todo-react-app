import TodoItem from './TodoItem'

const TodosList = (props) => {
 
    return (
      <div>
        <h2>To Dos</h2>
       
     {props.todos.map((item,idx) => <TodoItem todos={item} key={idx} /> )}

      </div>
    );
};

export default TodosList