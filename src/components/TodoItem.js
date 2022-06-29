const TodoItem = (props) => {
    const {text, createdAt, isCompleted} = props.todos
   
   return(
       <div>
        <p>{text}</p>
        <div>{createdAt}</div>
        <div>{String(isCompleted)}</div>
       </div>
  )
 
 }
 
 export default TodoItem